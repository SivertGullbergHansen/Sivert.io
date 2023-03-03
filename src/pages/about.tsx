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
      <p>
        Hey there!👋
      </p>
      <p>My name is Sivert, and I&apos;ve been a coding enthusiast
        ever since I was a kid. I started experimenting with coding at a young
        age, and I&apos;ve been hooked ever since. I now have around 7 years of
        coding experience, and I&apos;ve been working professionally as a
        Full-stack developer for about a year.
      </p>
      <p>
        When I&apos;m not at work, I love spending my
        evenings working on my own game development projects. I&apos;m a big fan
        of game engines like Unity, Unreal Engine and Roblox, and I&apos;ve
        gained a small following on Twitter where I share sneak peeks of my
        latest indie dev projects.
      </p>
      <p>
        Growing up, my family and I used to spend our holidays up in the snowy
        mountains. In winter we would go cross-country skiing, and during summer we would hike and fish. Our cabin up there, which my
        grandfather built, holds many special memories to me. It&apos;s where my
        brother and I used to pretend we were the characters from Lord of the
        Rings, fighting orcs and trolls as if we were the heroes from the movie
        series (I would be Legolas and he would be Aragorn). These childhood memories have stuck with me throughout my life
        and have given me a deep appreciation for the fantasy genre. I love
        watching movies and series set in the middle ages, and my favorite strategy game
        is Age of Empires II.
      </p>
      <p>
        Recently, I&apos;ve been exploring AI technology and have been working
        with a friend to train a model that recognizes specific creatures in a
        video game. We&apos;re planning on using the model to create an automated &quot;shiny catcher&quot;
        that will both train our own creatures and catch any rare shiny ones it encounters.
        It&apos;s been an exciting project so far, and I can&apos;t wait to see where
        it takes us.
      </p>
      <p>
        Aside from gaming, I&apos;m also interested in sports, particularly
        cycling and bodybuilding. Cycling has always been a part of my life, since I was
        a kid, and I&apos;ve recently taken up road cycling. However, despite enjoying summer activies a lot, I still am Norwegian,
        and my favorite season of the year is winter.
      </p>
      <p>
        Overall, I&apos;m a passionate web developer with a wide range of
        interests. My childhood memories, particularly the times I spent with my
        family up in the snowy mountains, have shaped my interests and given me
        a deep appreciation for nature, gaming, and the fantasy genre. I&apos;m
        committed to excellence in everything that I do, and I can&apos;t wait
        to see where my career will take me.
      </p>
    </ChildrenWrapper>
  );
}
export default function about() {
  return (
    <>
      <Head>
        <title>About Sivert Gullberg Hansen</title>
      </Head>
        <ThemeSwitch />
    <main className="w-screen sm:h-screen py-8 px-4 overflow-hidden grid place-content-center gap-16">
      <ParentWrapper
        delayChildren={0}
        staggerChildren={staggerTime}
        className="flex flex-col gap-4 md:w-[640px] sm:w-[480px]"
        >
        <motion.h1
          variants={topSmall}
          className="text-4xl text-center font-bold"
          >
          About me
        </motion.h1>
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
