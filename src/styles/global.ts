import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
${({ theme }) => css`
  * {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720x) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: ${theme.colors.gray900};
    color: ${theme.colors.white};
  }
  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`}`
