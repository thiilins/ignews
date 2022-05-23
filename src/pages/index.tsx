import { GetStaticProps, GetServerSideProps } from 'next'
import Head from 'next/head'
import { SubscribeButton } from 'components/subscribeButton'
import { stripe } from 'services/stripe'
import * as S from './_style/home'
interface HomeProps {
  product: {
    priceId: string
    amount: number
  }
}
export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | IGNEWS </title>
      </Head>
      <S.WrappedHome>
        <section className="hero">
          <span> 👏 Hey, welcome!</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceID={product.priceId} />
        </section>
        <img src="/images/avatar.svg" alt="Girl Coding " />
      </S.WrappedHome>
    </>
  )
}
/**
 *
 * SSG - STATIC SITE GENERATION
 * Apenas usar quando a página pode ser estática
 *
 */
export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1JyiqgCbRDzwsN15z13A0Y6z')
  const product = {
    priceID: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100)
  }
  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 //24hr
  }
}

// SSR - SERVER SIDE RENDERING
// export const getServerSideProps: GetServerSideProps = async () => {
//   const price = await stripe.prices.retrieve("price_1JyiqgCbRDzwsN15z13A0Y6z");
//   const product = {
//     priceID: price.id,
//     amount: new Intl.NumberFormat("en-US", {
//       style: "currency",
//       currency: "USD",
//     }).format(price.unit_amount / 100),
//   };
//   return {
//     props: {
//       product,
//     },
//   };
// };
