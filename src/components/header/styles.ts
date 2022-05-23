import Link from 'next/link'
import styled, { css } from 'styled-components'

export const WrapperHeader = styled.header`
  ${({ theme }) => css`
    height: 5rem;
    border-bottom: 1px solid ${theme.colors.gray700};

    .headerContent {
      max-width: 1120px;
      height: 5rem;
      margin: 0 auto;
      padding: 0 2rem;
      display: flex;
      align-items: center;

      nav {
        margin-left: 9rem;
        height: 5rem;

        a {
          display: inline-block;
          position: relative;
          padding: 0 0.5rem;
          height: 5rem;
          line-height: 5rem;
          color: ${theme.colors.gray300};
          transition: color 0.2s;

          & + a {
            margin-left: 2rem;
          }

          &:hover {
            color: ${theme.colors.white};
          }

          &.active {
            color: ${theme.colors.white};
            font-weight: bold;

            &::after {
              content: '';
              height: 3px;
              border-radius: 3px 3px 0 0;
              width: 100%;
              position: absolute;
              bottom: 1px;
              left: 0;
              background: ${theme.colors.yellow500};
            }
          }
        }
      }
      button {
        margin-left: auto;
      }
    }
  `}
`
