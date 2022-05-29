import Head from 'next/head'
import * as S from '../../styles/pages/mainPosts'
import { getPrismicClient } from 'services/prismic'
import dateFormat from 'utils/dateFormat'
type PostMainProps = {
  posts: [
    {
      id: string
      uid: string
      first_publication_date: string
      data: {
        title: string
        subtitle: string
      }
    }
  ]
}
export default function Posts({ posts }: PostMainProps) {
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
              <S.WrapperPostCard key={post.id} href={`/posts/${post.uid}`}>
                <time>{formatDate(post.first_publication_date)}</time>
                <h2>{post.data.title}</h2>
                <p>{post.data.subtitle}</p>
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
  const posts = await client.getAllByType('post', {
    fetch: ['posts.title', 'posts.subtitle'],
    pageSize: 100
  })
  return {
    props: { posts } // Will be passed to the page component as props
  }
}
