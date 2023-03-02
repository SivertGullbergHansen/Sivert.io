import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import { AnimatePresence } from 'framer-motion'

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] })

export default function App({ Component, pageProps, router }: AppProps) {
  const url = router.route
  
  return<>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
    
    <AnimatePresence mode='wait'>
      <Component {...pageProps} key={url} />
        </AnimatePresence>
  </>
}
