/* eslint-disable @next/next/no-html-link-for-pages */
import { SignInButton } from 'components/signInButton'
import * as S from './styles'
export function Header() {
  return (
    <S.WrapperHeader>
      <div className="headerContent">
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <a className="active" href="/">
            Home
          </a>
          <a href="/posts">Posts</a>
        </nav>
        <SignInButton />
      </div>
    </S.WrapperHeader>
  )
}
