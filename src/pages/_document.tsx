import Document, { Html, Head, Main, NextScript } from 'next/document'

export default function MyDocument() {
  return (
    <Html>
      <Head>
        <link
          rel="shortcut icon"
          href="/static/favicon.ico"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
