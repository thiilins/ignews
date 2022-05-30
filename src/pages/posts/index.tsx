import Head from 'next/head'
import * as S from '../../styles/pages/mainPosts'
import { getPrismicClient } from 'services/prismic'
import Link from 'next/link'
import { formatDate } from 'utils/dateFormat'
type MainPostsProps = {
  posts: [
    {
      slug: string
      title: string
      subtitle: string
      updatedAt: string
    }
  ]
}
export default function Posts({ posts }: MainPostsProps) {
  return (
    <>
      <Head>
        <title>Posts | IGNEWS </title>
      </Head>
      <S.WrapperMainPostsPage>
        <h1>Posts</h1>
        <S.WrapperPostList>
          {posts.map(post => {
            return (
              <Link href={`/posts/${post.slug}`}>
                <S.WrapperPostCard key={post.slug}>
                  <time>{post.updatedAt}</time>
                  <h2>{post.title}</h2>
                  <p>{post.subtitle}</p>
                </S.WrapperPostCard>
              </Link>
            )
          })}
        </S.WrapperPostList>
      </S.WrapperMainPostsPage>
    </>
  )
}

export async function getStaticProps() {
  const client = getPrismicClient()
  const response = await client.getAllByType('post', {
    fetch: ['posts.title', 'posts.subtitle'],
    pageSize: 100
  })
  const posts = response.map(post => {
    return {
      slug: post.uid,
      title: post.data.title,
      subtitle: post.data.subtitle,
      updatedAt: formatDate(post.last_publication_date, {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })
  return {
    props: { posts } 
  }
}
