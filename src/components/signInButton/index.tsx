import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/react'
import * as S from './styles'
export function SignInButton() {
  const session = useSession()

  return session.status === 'authenticated' ? (
    <S.WrapperSignInButtonContainer type="button">
      <FaGithub color="#04d361" />
      {session.data.user.name}
      <FiX color="#737380" className="closeIcon" onClick={() => signOut()} />
    </S.WrapperSignInButtonContainer>
  ) : (
    <S.WrapperSignInButtonContainer
      type="button"
      onClick={() => {
        signIn('github')
      }}
    >
      <FaGithub color="#eba417" />
      Sign in with Github
    </S.WrapperSignInButtonContainer>
  )
}
