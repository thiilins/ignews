import styled, { css } from 'styled-components'

export const WrapperSubscribeButton = styled.button`
  ${({ theme }) => css`
    height: 260px;
    height: 4rem;
    border: 0;
    border-radius: 2rem;
    background: ${theme.colors.yellow500};
    color: ${theme.colors.gray900};
    font-size: 1.25rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 3rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  `}
`
