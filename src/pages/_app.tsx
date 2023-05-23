import "@/styles/globals.scss";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import Head from "next/head";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
    <ThemeProvider value={{ light: 'corporate', dark: 'dracula', system: 'dracula' }}>
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          if (typeof window !== "undefined") {
            document.body.scrollTo({ top: 0 });
          }
        }}
      >
        
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ThemeProvider>
    </>
  );
}
