import "../styles/globals.css"
import Head from "next/head"
import type { AppProps } from "next/app"

const MetaHead = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <title>next.js</title>
    </Head>
  )
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MetaHead />
      <Component {...pageProps} />
    </>
  )
}
