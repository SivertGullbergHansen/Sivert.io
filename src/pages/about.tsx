import { staggerTime, topSmall } from "@/animations/Animations";
import ChildrenWrapper from "@/components/ChildrenWrapper";
import ParentWrapper from "@/components/ParentWrapper";
import ThemeSwitch from "@/components/ThemeSwitcher";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import React from "react";

function AboutMe() {
  return (
    <ChildrenWrapper variants={topSmall}>
      <p>Hello! 👋</p>
      <p>
        My name is Sivert, and I&apos;ve been a coding enthusiast ever since I was a
        kid.
      </p>
      <p>
        I started experimenting with coding at a young age, and have been hooked
        ever since. I now have about 7 years of coding experience, and have been
        working professionally with full-stack development for about 1.5 years.
      </p>

      <p>
        When I&apos;m not at work, I love spending my time working on my own game
        development projects. I&apos;m a big fan of the game engines Unity, Unreal
        Engine and Roblox, and have recently gained a small following on
        Twitter, where I share insights to my latest projects.
      </p>

      <p>
        Recently, I&apos;ve been exploring AI technology and have been working with a
        friend, Ola Hulleberg, to train a model that recognizes specific
        creatures in a video game. We plan to use the model to create an
        automated &quot;shiny-catcher&quot; that will both train our own creatures and
        capture any rare creatures it encounters. It&apos;s been an exciting project
        and I can&apos;t wait to see where it takes us.
      </p>

      <p>
        All in all, I&apos;m a passionate developer with a wide range of interests.
        I&apos;m committed to quality in everything I do, and I can&apos;t wait to see
        where my career takes me.
      </p>
    </ChildrenWrapper>
  );
}
export default function about() {
  return (
    <>
      <Head>
        <title>Sivert Gullberg Hansen - About</title>
      </Head>
      <ThemeSwitch />
      <main className="min-h-screen py-16 px-4 overflow-hidden lg:py-12 flex flex-col place-items-center">
        <ParentWrapper
          delayChildren={0}
          staggerChildren={staggerTime}
          className="prose lg:prose-xl max-w-prose"
        >
          <motion.h1 variants={topSmall}>About me</motion.h1>
          <AboutMe />
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
