import styled, { css } from 'styled-components'

export const WrappedHome = styled.main`
  ${({ theme }) => css`
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 2rem;
    height: calc(100vh - 5rem);
    display: flex;
    align-items: center;
    justify-content: space-around;

    & .hero {
      max-width: 600px;

      > span {
        font-size: 1.5rem;
        font-weight: bold;
      }

      h1 {
        font-size: 4.5rem;
        line-height: 4.5rem;
        font-weight: 900;

        span {
          color: ${theme.colors.cyan500};
        }
      }

      p {
        font-size: 1.5rem;
        line-height: 2.25rem;
        margin-top: 1.5rem;

        span {
          color: ${theme.colors.cyan500};
          font-weight: bold;
        }
      }

      button {
        margin-top: 2.5rem;
      }
    }
  `}
`
