import Left from "@/components/Left";
import Middle from "@/components/Middle";
import Right from "@/components/Right";
import { motion } from "framer-motion";
import { top } from "@/animations/Animations";
import Head from "next/head";
import ThemeSwitch from "@/components/ThemeSwitcher";

const sidebarWidth = 192;

export default function Home() {
  return (
    <>
      <Head>
        <title>Sivert Gullberg Hansen</title>
      </Head>
        <ThemeSwitch />
    <main className="w-screen sm:h-screen py-16 sm:p-0 md:overflow-hidden grid place-content-center justify-items-center gap-16">
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
      <div className="flex sm:flex-row flex-col lg:gap-16 md:gap-6 gap-0">
        <Left width={sidebarWidth} />
        <Middle />
        <Right width={sidebarWidth} />
      </div>
    </main>
        </>
  );
}
