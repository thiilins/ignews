import { ActiveLink } from 'components/ActiveLink'
import { SignInButton } from 'components/signInButton'
import * as S from './styles'
export function Header() {
 
  return (
    <S.WrapperHeader>
      <div className="headerContent">
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <ActiveLink href="/" activeClassName="active">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink href="/posts" activeClassName="active">
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </S.WrapperHeader>
  )
}
