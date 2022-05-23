/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next'
import { stripe } from 'services/stripe'
import { getSession } from 'next-auth/react'
import { fauna } from 'services/fauna'
import { query as q } from 'faunadb'
type User = {
  ref: {
    id: string
  }
  data: {
    stripe_customer_id: string
  }
}
export default async (req: NextApiRequest, res: NextApiResponse) => {
  //Obtendo os dados da sessão
  const session = await getSession({ req })

  //Buscando o usuário no Fauna
  const user = await fauna.query<User>(
    q.Get(q.Match(q.Index('user_by_email'), q.Casefold(session.user.email)))
  )
  let customerId = user.data.stripe_customer_id

  // Criando o customer no Stripe
  if (!customerId) {
    const stripeCustomer = await stripe.customers.create({
      email: session.user.email
      // metadata
    })

    await fauna.query(
      q.Update(q.Ref(q.Collection('users'), user.ref.id), {
        data: {
          stripe_customer_id: stripeCustomer.id
        }
      })
    )
    customerId = stripeCustomer.id
  }

  // Verificando se o método usado é POST
  if (req.method === 'POST') {
    //Criando a CheckoutSession no Stripe
    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ['card'],
      billing_address_collection: 'required',
      line_items: [{ price: 'price_1JyiqgCbRDzwsN15z13A0Y6z', quantity: 1 }],
      mode: 'subscription',
      allow_promotion_codes: true,
      success_url: process.env.STRIPE_SUCCESS_URL,
      cancel_url: process.env.STRIPE_CANCEL_URL
    })
    //Retornando o ID da Checkout Session
    return res.status(200).json({ sessionId: stripeCheckoutSession.id })
  } else {
    //Caso não seja informar que só aceita via POST
    res.setHeader('Allow', 'POST')
    res.status(405).send('Method not Allowed')
  }
}
