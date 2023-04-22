import { Html, Head, Main, NextScript } from 'next/document'
import { useEffect } from 'react';
import ReactGA from "react-ga4";


export default function Document() {
  const meta = {
    title: 'Jaime García Díaz',
    description: 'Fascinated with React, Machine Learning, Blockchain, Web3, Smart Contracts, NFTs, Solana and Ethereum',
    image: 'https://jaime.mintitmedia.com/images/blog-banner.png',
  }

  useEffect(() => {
    ReactGA.initialize("G-76T38NTY0G");
  }, [])

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourname" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
