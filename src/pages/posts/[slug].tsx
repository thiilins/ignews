import { GetServerSideProps } from 'next'
import { getSession, useSession } from 'next-auth/react'
import { getPrismicClient } from 'services/prismic'
import * as format from '@prismicio/helpers'
import { formatDate } from 'utils/dateFormat'
import Head from 'next/head'
import * as S from 'styles/pages/posts'
type PostProps = {
  post: {
    slug: string
    title: string
    subtitle: string
    content: string
    internalUrl: string
    updateAt: string
  }
}
export default function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title> {post.title} | Ignews</title>
      </Head>
      <S.WrapperPostPage>
        <S.WrapperPost>
          <header>
            <h1>{post.title}</h1>
            <time> {post.updateAt}</time>
            <span className="subtitle">{post.subtitle}</span>
          </header>
          {/* TODO Criar um input copiar link para postagem */}
          <S.PostContent
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></S.PostContent>
        </S.WrapperPost>
      </S.WrapperPostPage>
    </>
  )
}
export const getServerSideProps: GetServerSideProps = async ({
  req,
  params
}) => {
  const { slug } = params
  const session = await getSession({ req })
  if (!session?.activeSubscription) {
    return {
      redirect: { destination: `/posts/preview/${slug}`, permanent: false }
    }
  }
  const client = getPrismicClient(req)
  const response = await client.getByUID('post', String(slug), {})
  const post = {
    slug,
    title: response.data.title,
    subtitle: response.data.subtitle,
    content: format.asHTML(response.data.content),
    internalUrl: process.env.NEXTAUTH_URL,

    updateAt: formatDate(response.last_publication_date, {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }

  return {
    props: { post }
  }
}
