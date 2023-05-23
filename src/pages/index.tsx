import Left from "@/components/Left";
import Middle from "@/components/Middle";
import Right from "@/components/Right";
import { motion } from "framer-motion";
import { bottomSmall, top, topSmall } from "@/animations/Animations";
import Head from "next/head";
import ThemeSwitch from "@/components/ThemeSwitcher";
import Link from "next/link";

const sidebarWidth = 192;

export default function Home() {
  return (
    <>
      <Head>
        <title>Sivert Gullberg Hansen</title>
      </Head>
      <ThemeSwitch />
      <main id="main" className="w-screen sm:h-screen py-16 sm:p-0 md:overflow-hidden grid place-content-center justify-items-center gap-16">
        <motion.div
          layout
          variants={top}
          animate="animate"
          exit="exit"
          initial="initial"
          transition={{ type: "spring", duration: 1 }}
          className="w-full text-center font-bold flex flex-col gap-2"
        >
          <h1 className="sm:text-4xl text-3xl font-bold">
            Sivert Gullberg Hansen
          </h1>
          <h2 className="sm:text-3xl text-2xl font-medium">
            Full-Stack Developer
          </h2>
        </motion.div>
        <div className="flex sm:flex-row flex-col lg:gap-16 gap-6">
          <Left width={sidebarWidth} />
          <Middle />
          <Right width={sidebarWidth} />
        </div>
        <motion.div variants={bottomSmall}
        layout
        animate="animate"
        exit="exit"
        initial="initial"
        transition={{ type: "spring", duration: 1 }}
        >
        <Link href='#contact' className="btn btn-primary">Contact Me</Link>
        </motion.div>
      </main>
      <main id="contact" className="w-screen sm:h-screen py-16 sm:p-0 md:overflow-hidden grid place-content-center justify-items-center gap-16">
        <h1 className="font-bold text-6xl">Contact Me</h1>
        
<p className="text-center">Feel free to get in touch with me using my social links above or by sending me an email at <a href="mailto:contact@sivert.io" className="link link-primary">contact@sivert.io</a></p>

        <Link href='#main' className="btn btn-primary">Back to top</Link>
      </main>
    </>
  );
}
