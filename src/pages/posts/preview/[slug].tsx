import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import { getSession, useSession } from 'next-auth/react'
import { getPrismicClient } from 'services/prismic'
import * as format from '@prismicio/helpers'
import { formatDate } from 'utils/dateFormat'
import Head from 'next/head'
import * as S from 'styles/pages/posts'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

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
export default function PostPreview({ post }: PostProps) {
  const session = useSession()
  const router = useRouter()
  useEffect(() => {
    if (session.data?.activeSubscription) {
      router.push(`/posts/${post.slug}`)
    }
  }, [session])
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
            className="preview__content"
          />
          <S.WrapperContinueReading>
            Wanna Continue Reading
            <Link href="/">
              <a> Subscribe now 🤗</a>
            </Link>
          </S.WrapperContinueReading>
        </S.WrapperPost>
      </S.WrapperPostPage>
    </>
  )
}
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params
  const client = getPrismicClient()
  const response = await client.getByUID('post', String(slug), {})
  const post = {
    slug,
    title: response.data.title,
    subtitle: response.data.subtitle,
    content: format.asHTML(response.data.content.splice(0, 3)),
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
