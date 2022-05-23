import styled, { css } from 'styled-components'

export const WrapperMainPostsPage = styled.main`
  ${({ theme }) => css`
    z-index: 1;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 2rem;
    h1 {
      padding: 2rem 0 0 1rem;
      margin-bottom: -18rem;
      font-size: 20rem;
      opacity: 0.3;
      color: ${theme.colors.gray700};
    }
  `}
`
export const WrapperPostList = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.layers.alwaysOnTop};
    max-width: 720px;
    margin: 5rem auto 0;
  `}
`
export const WrapperPostCard = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.layers.alwaysOnTop};
    display: flex;
    flex-direction: column;
    gap: 1rem;
    & time {
      color: ${theme.colors.gray300};
      font-size: 0.8rem;
    }
    a {
      font-size: 1.5rem;
      white-space: nowrap;
      font-weight: 900;
    }
    p {
      font-size: 0.9rem;
    }
    & + div {
      margin-top: 2rem;
      padding-top: 2rem;
      border-top: 1px solid ${theme.colors.gray700};
    }
    &:last-child {
      padding-bottom: 3rem;
    }
  `}
`
