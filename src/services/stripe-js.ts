import { loadStripe } from '@stripe/stripe-js'
export async function getStripeJs() {
  //Informar a chave publica
  const stripeJs = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)
  return stripeJs
}
