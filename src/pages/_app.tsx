import { AppProps } from 'next/app'
import { Header } from 'components/header'
import { SessionProvider } from 'next-auth/react'
import { GlobalStyle } from 'styles/global'
import dark from 'styles/themes/dark'
import { ThemeProvider } from 'styled-components'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <SessionProvider session={pageProps.session}>
        <Header />
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  )
}

export default MyApp
