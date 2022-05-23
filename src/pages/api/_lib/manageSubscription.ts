import { fauna } from 'services/fauna'
import { query as q } from 'faunadb'
import { stripe } from 'services/stripe'
export async function saveSubscription(
  subscriptionId: string,
  customerId: string,
  createAction = false
) {
  try {
    //Buscar o usuário no banco do fauna com o ID (stripe_customer_id)
    const userRef = await fauna.query(
      q.Select(
        'ref',
        q.Get(q.Match(q.Index('user_by_stripe_customer_id'), customerId))
      )
    )
    //Salvar os dados da subscription do usuário
    const subscription = await stripe.subscriptions.retrieve(subscriptionId)
    const subscriptionData = {
      id: subscription.id,
      userId: userRef,
      status: subscription.status,
      price_id: subscription.items.data[0].price.id
    }
    if (createAction) {
      await fauna.query(
        q.Create(q.Collection('subscriptions'), { data: subscriptionData })
      )
    } else {
      await fauna.query(
        q.Replace(
          q.Select(
            'ref',
            q.Get(q.Match(q.Index('subscriptions_by_id'), subscriptionId))
          ),
          { data: subscriptionData }
        )
      )
    }
  } catch (err) {
    console.log(err)
  }
}
