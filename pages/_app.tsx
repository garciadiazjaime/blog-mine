import 'nextra-theme-blog/style.css'
import { useEffect } from 'react';
import TagManager from 'react-gtm-module'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/main.css'

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'GTM-5C2PVP7'
    }

    TagManager.initialize(tagManagerArgs)
  }, [])

  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
