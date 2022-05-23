import Head from 'next/head'
import * as S from '../_style/mainPosts'
export default function Home() {
  return (
    <>
      <Head>
        <title>Posts | IGNEWS </title>
      </Head>
      <S.WrapperMainPostsPage>
        <h1>Posts</h1>
        <S.WrapperPostList>
          <S.WrapperPostCard>
            <time>12 de março de 2021</time>
            <h2>Creating a Monorepo with Lerna & Yarn Workspaces</h2>
            <p>
              In this guide, you will learn how to create a Monorepo to manage
              multiple packages with a shared build, test, and release process.
            </p>
          </S.WrapperPostCard>
          <S.WrapperPostCard>
            <time>12 de março de 2021</time>
            <h2>Creating a Monorepo with Lerna & Yarn Workspaces</h2>
            <p>
              In this guide, you will learn how to create a Monorepo to manage
              multiple packages with a shared build, test, and release process.
            </p>
          </S.WrapperPostCard>
          <S.WrapperPostCard>
            <time>12 de março de 2021</time>
            <h2>Creating a Monorepo with Lerna & Yarn Workspaces</h2>
            <p>
              In this guide, you will learn how to create a Monorepo to manage
              multiple packages with a shared build, test, and release process.
            </p>
          </S.WrapperPostCard>
          <S.WrapperPostCard>
            <time>12 de março de 2021</time>
            <h2>Creating a Monorepo with Lerna & Yarn Workspaces</h2>
            <p>
              In this guide, you will learn how to create a Monorepo to manage
              multiple packages with a shared build, test, and release process.
            </p>
          </S.WrapperPostCard>
          <S.WrapperPostCard>
            <time>12 de março de 2021</time>
            <h2>Creating a Monorepo with Lerna & Yarn Workspaces</h2>
            <p>
              In this guide, you will learn how to create a Monorepo to manage
              multiple packages with a shared build, test, and release process.
            </p>
          </S.WrapperPostCard>
        </S.WrapperPostList>
      </S.WrapperMainPostsPage>
    </>
  )
}
