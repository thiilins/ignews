import styled, { css } from 'styled-components'

export const WrapperSignInButtonContainer = styled.button`
  ${({ theme }) => css`
    height: 3rem;
    border-radius: 3rem;
    background-color: ${theme.colors.gray800};
    padding: 0 1.5rem;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    transition: filter 0.2s;

    svg {
      width: 20px;
      height: 20px;

      &:first-child {
        margin-right: 1rem;
      }

      &.closeIcon {
        margin-left: 1rem;
      }
    }

    &:hover {
      filter: brightness(0.8);
    }
  `}
`
