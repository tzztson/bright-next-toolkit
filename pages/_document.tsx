import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps
} from 'next/document'
import Link from 'next/link'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()]
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <Link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
            rel='stylesheet'
          />
          <Link rel='shortcut icon' href='/images/brightFavIcon.png' />
          <meta name='description' content='A product built by Bright Development.' />
          <meta name='theme-color' content='#000000' />
          <meta property='og:title' content='Bright Development' />
          <meta property='og:site_name' content='Bright Development' />
          <meta property='og:description' content='A product built by Bright Development.' />
          <meta property='og:url' content='https://bright-development.com/' />
          <meta property='og:type' content='website' />
          <meta property='og:image' content='/images/brightFavIcon.png' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
