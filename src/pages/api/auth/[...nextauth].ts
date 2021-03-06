import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { fauna } from 'services/fauna'
import { Casefold, query as q } from 'faunadb'
export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: {
          scope: 'read:user'
        }
      }
    })
  ],
  callbacks: {
    async session({ session }) {
      try {
        const userActiveSubscription = await fauna.query(
          q.Get(
            q.Intersection([
              q.Match(
                q.Index('subscription_by_user_ref'),
                q.Select(
                  'ref',
                  q.Get(
                    q.Match(
                      q.Index('user_by_email'),
                      q.Casefold(session.user.email)
                    )
                  )
                )
              ),
              q.Match(q.Index('subscription_by_status'), 'active')
            ])
          )
        )
        return {
          ...session,
          activeSubscription: userActiveSubscription
        }
      } catch (error) {
        console.log(JSON.stringify(error))
        return {
          ...session,
          activeSubscription: null
        }
      }
    },
    async signIn({ user }) {
      const { email } = user
      try {
        await fauna.query(
          //SE
          q.If(
            //NÃO
            q.Not(
              //EXISTE
              q.Exists(
                //USUARIO 'WHERE' INDEX - EMAIL
                q.Match(q.Index('user_by_email'), q.Casefold(user.email))
              )
            ),
            // CRIE UM NOVO USUARIO COM O EMAIL
            q.Create(q.Collection('users'), { data: { email } }),
            //SE EXISTIR BUSCAR AS INFORMAÇÕES
            q.Get(q.Match(q.Index('user_by_email'), q.Casefold(user.email)))
          )
        )
        return true
      } catch (err) {
        console.log(err)
        return false
      }
    }
  }
})
