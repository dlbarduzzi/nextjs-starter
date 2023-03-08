import "../styles/globals.css"
import type { AppProps } from "next/app"

import { MetaHead } from "../components/meta-head"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MetaHead />
      <Component {...pageProps} />
    </>
  )
}
