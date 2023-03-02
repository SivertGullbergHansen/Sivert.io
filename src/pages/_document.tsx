import { Html, Head, Main, NextScript } from 'next/document'
import { AnimatePresence } from 'framer-motion'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-base-100'>
        <AnimatePresence>
          <Main />
          <NextScript />  
        </AnimatePresence>
      </body>
    </Html>
  )
}
