import { AppProps } from 'next/app'
import { Header } from 'components/header'
import { SessionProvider } from 'next-auth/react'
import { GlobalStyle } from 'styles/global'
import dark from 'styles/themes/dark'
import { ThemeProvider } from 'styled-components'

function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={dark}>
        <SessionProvider session={pageProps.session}>
          <GlobalStyle />
          <Header />
          <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
    </>
  )
}

export default App
