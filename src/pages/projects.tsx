import { staggerTime, topSmall } from "@/animations/Animations";
import ParentWrapper from "@/components/ParentWrapper";
import ThemeSwitch from "@/components/ThemeSwitcher";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function about() {
  return (
    <>
      <Head>
        <title>Sivert Gullberg Hansen - Projects</title>
      </Head>
      <ThemeSwitch />
      <main className="min-h-screen py-16 px-4 overflow-hidden lg:py-12 flex flex-col place-items-center">
        <ParentWrapper
          delayChildren={0}
          staggerChildren={staggerTime}
          className="prose lg:prose-xl max-w-prose"
        >
          <motion.h1 variants={topSmall}>Projects</motion.h1>
          <motion.div variants={topSmall} className="flex flex-row justify-end">
            <Link scroll={false} href="/" className="font-bold link">
              Back
            </Link>
          </motion.div>
        </ParentWrapper>
      </main>
    </>
  );
}
