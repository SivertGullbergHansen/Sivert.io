import { staggerTime, topSmall } from "@/animations/Animations";
import ChildrenWrapper from "@/components/ChildrenWrapper";
import ParentWrapper from "@/components/ParentWrapper";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

function AboutMe() {
  return (
    <ChildrenWrapper variants={topSmall}>
      <p>
        Hey there! My name is Sivert, and I&apos;ve been a coding enthusiast
        ever since I was a kid. I started experimenting with coding at a young
        age, and I&apos;ve been hooked ever since. I now have around 7 years of
        coding experience, and I&apos;ve been working professionally as a
        front-end developer for about a year.
      </p>
      <p>
        When I&apos;m not working on client projects, I love spending my
        evenings working on my own game development projects. I&apos;m a big fan
        of game engines like Unity, Unreal Engine, and Roblox, and I&apos;ve
        even gained a following on Twitter where I share sneak peeks of my
        latest Roblox projects.
      </p>
      <p>
        Growing up, my family and I used to spend our holidays up in the snowy
        mountains, skiing, hiking, and fishing. Our cabin up there, which my
        grandfather built, holds many special memories for me. It&apos;s where
        my brother and I used to play our favorite game, &quot;Lord of the
        Rings.&quot; I would always be Legolas, son of Thranduil, while my
        brother would portray Aragorn, son of Arathorn. These childhood memories
        have stuck with me throughout my life and have given me a deep
        appreciation for the fantasy genre. I love watching movies and series
        set in the middle ages, and my favorite game in the Age of Empires
        series is Age of Empires II.
      </p>
      <p>
        Recently, I&apos;ve been exploring AI technology and have been working
        with a friend to train a model that recognizes specific creatures in a
        video game. We&apos;re planning on creating an automated shiny catcher
        that will train our creatures and look out for rare shiny ones.
        It&apos;s been an exciting project, and I can&apos;t wait to see where
        it takes us.
      </p>
      <p>
        Aside from gaming, I&apos;m also interested in sports, particularly
        cycling and bodybuilding. Cycling has been a part of my life since I was
        a kid, and I&apos;ve recently taken up road cycling. Being a Norwegian,
        winter is my favorite time of year. There&apos;s nothing quite like
        taking a walk during winter and experiencing the serene beauty of the
        snowy landscape.
      </p>
      <p>
        Overall, I&apos;m a passionate web developer with a wide range of
        interests. My childhood memories, particularly the times I spent with my
        family up in the snowy mountains, have shaped my interests and given me
        a deep appreciation for nature, gaming, and the fantasy genre. I&apos;m
        committed to excellence in everything that I do, and I can&apos;t wait
        to see where my career takes me next.
      </p>
    </ChildrenWrapper>
  );
}
export default function about() {
  return (
    <main className="w-screen sm:h-screen py-16 px-4 overflow-hidden grid place-content-center gap-16">
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
        <motion.div
          variants={topSmall}
          className="flex flex-row justify-end"
        >
          <Link href="/" className="font-bold link">
            Back
          </Link>
        </motion.div>
      </ParentWrapper>
    </main>
  );
}
