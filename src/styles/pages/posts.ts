import styled, { css } from 'styled-components'
export const WrapperPostPage = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
`
export const WrapperPost = styled.article`
  ${({ theme }) => css`
    max-width: 900px;
    margin: 5rem auto 0;
    display: flex;
    flex-direction: column;
    & header {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      h1 {
        font-size: 3rem;
        font-weight: 900;
        max-width: 100%;
      }
      time {
        display: block;
        color: ${theme.colors.gray300};
        font-size: 0.9rem;
      }
      .subtitle {
        padding: 2rem;
        color: ${theme.colors.gray300};
        border-top: 2px solid ${theme.colors.gray700};
        border-bottom: 2px solid ${theme.colors.gray700};
      }
    }
  `}
`

export const PostContent = styled.div`
  ${({ theme }) => css`
    padding: 2rem 1rem;
    line-height: 2rem;
    font-size: 1.125rem;
    color: ${theme.colors.gray50};

    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 2.2rem;
    }
    h3 {
      font-size: 2rem;
    }
    p,
    ul {
      margin: 1.5rem 0;
    }
    ul {
      padding-left: 1.5rem;
      li {
        margin: 0.5rem 0;
      }
    }
    strong {
      font-weight: 900;
    }
    pre {
      padding: 1rem;
      font-size: 1rem;
      border-radius: 0.5rem;
      background-color: ${theme.colors.black};
      & * {
        word-wrap: break-word;
        max-width: 100%;
      }
    }
    a {
      color: ${theme.colors.yellow500};
    }
    &.preview__content {
      background: linear-gradient(${theme.colors.white}, transparent);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      -webkit-text-fill-color: transparent;
    }
  `}
`
export const WrapperContinueReading = styled.div`
  ${({ theme }) => css`
    padding: 2rem;
    text-align: center;
    background: ${theme.colors.gray800};
    border-radius: 100px;
    font-size: 1.25rem;
    font-weight: bold;
    margin: 4rem 0 2rem;
    a {
      color: ${theme.colors.yellow500};
      &:hover {
        text-decoration: underline;
      }
    }
  `}
`
