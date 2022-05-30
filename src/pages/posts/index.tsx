import Head from 'next/head'
import * as S from '../../styles/pages/mainPosts'
import { getPrismicClient } from 'services/prismic'
import dateFormat from 'utils/dateFormat'
import * as format from '@prismicio/helpers'
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
  const { formatDate, today } = dateFormat()
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
              <S.WrapperPostCard key={post.slug} href={`/posts/${post.slug}`}>
                <time>{post.updatedAt}</time>
                <h2>{post.title}</h2>
                <p>{post.subtitle}</p>
              </S.WrapperPostCard>
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
      updatedAt: new Date(post.last_publication_date).toLocaleDateString(
        'pt-br',
        {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        }
      )
    }
  })
  return {
    props: { posts } // Will be passed to the page component as props
  }
}
