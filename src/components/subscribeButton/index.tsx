import * as S from './styles'
import { signIn, useSession } from 'next-auth/react'
import { api } from 'services/api'
import { getStripeJs } from 'services/stripe-js'
import Router, { useRouter } from 'next/router'
interface SubscribeButtonProps {
  priceID: string
}

export function SubscribeButton() {
  const session = useSession()
  const router = useRouter()
  async function handleSubscribe() {
    if (!session.data) {
      signIn('github')
      return
    }
    if (session.data.activeSubscription) {
      router.push('/posts')
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
    <S.WrapperSubscribeButton type="button" onClick={handleSubscribe}>
      Subscribe Now
    </S.WrapperSubscribeButton>
  )
}
