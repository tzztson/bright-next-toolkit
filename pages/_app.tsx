import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'
import { GlobalStyle } from 'styles/GlobalStyle'
import { AppProps } from 'next/app'
import Head from 'next/head'

function Toolkit({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <Head>
        <title>Bright Development</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default Toolkit
