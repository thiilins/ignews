import styles from './styles.module.scss'
import { signIn, useSession } from 'next-auth/react'
import { api } from 'services/api'
import { getStripeJs } from 'services/stripe-js'
interface SubscribeButtonProps {
  priceID: string
}

export function SubscribeButton({ priceID }: SubscribeButtonProps) {
  const session = useSession()
  async function handleSubscribe() {
    if (!session.data) {
      signIn('github')
      return
    }
    try {
      const response = await api.post('/subscribe')
      const { sessionId } = response.data
      const stripe = await getStripeJs()
      await stripe.redirectToCheckout({ sessionId })
    } catch (err) {
      alert(err.message)
      console.log(err)
    }
  }
  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe Now
    </button>
  )
}
