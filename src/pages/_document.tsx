import { Html, Head, Main, NextScript } from 'next/document'

const description = "Experienced full-stack developer by day, avid game developer by night"
const title = "Sivert Gullberg Hansen"
const url = "https://www.sivert.xyz/"
const metaImg = "/meta/meta.png"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
<meta name="title" content={title} />
<meta name="description" content={description} />

<meta property="og:type" content="website" />
<meta property="og:url" content={url} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={metaImg} />

<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content={url} />
<meta property="twitter:title" content={title} />
<meta property="twitter:description" content={description} />
<meta property="twitter:image" content={metaImg} />

        <meta name="theme-color" content="#FFFFFF" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className='bg-base-100'>
          <Main />
          <NextScript />  
      </body>
    </Html>
  )
}
