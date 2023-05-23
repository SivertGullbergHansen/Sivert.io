import { staggerTime, topSmall } from "@/animations/Animations";
import BackButton from "@/components/BackButton";
import ChildrenWrapper from "@/components/ChildrenWrapper";
import ParentWrapper from "@/components/ParentWrapper";
import ThemeSwitch from "@/components/ThemeSwitcher";
import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";

function AboutMe() {
  return (
    <ChildrenWrapper variants={topSmall}>
      <h2>Hello! 👋</h2>
<p><b>My name is Sivert, and coding has been my passion since childhood.</b> I started experimenting with coding at a young age, and I&apos;ve been hooked ever since. With approximately 7 years of coding experience, I have developed a solid competence.</p>
<p><b>Over the past 2 years, I have worked as a full-stack developer in professional teams.</b> This experience has provided valuable insights into working efficiently and collaborating seamlessly with others.</p>
<p><b>During my free time, I indulge in game development.</b> I am a big fan of game engines like Unity, Unreal Engine, and Roblox, and I have been working with them since around 2015. It is a passion that brings me immense joy and fulfillment.</p>
<p><b>Recently, I had the opportunity to explore AI technology with <a target='_blank' href='https://hulleberg.net'>Ola Hulleberg</a>.</b> We have been training a recognition model capable of identifying creatures in a video game. The goal is to enable the model to analyze screenshots from the game and make context-based decisions. This exciting project has opened up new horizons for me, and I eagerly anticipate the possibilities it holds.</p>
<p><b>All in all, I am a dedicated developer with a wide range of interests. Quality is of utmost importance to me in everything I undertake, and I eagerly await the opportunities my career has in store.</b></p>
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
          <BackButton />
        </ParentWrapper>
      </main>
    </>
  );
}
