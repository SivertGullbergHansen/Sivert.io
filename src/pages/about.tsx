import { delayTime, top } from '@/animations/Animations'
import { motion } from "framer-motion"
import Head from 'next/head'
import React from 'react'

function AboutMe() {
    return <p>
        Hey there! My name is Sivert, and I&apos;ve been a coding enthusiast ever since I was a kid. I started experimenting with coding at a young age, and I&apos;ve been hooked ever since. I now have around 7 years of coding experience, and I&apos;ve been working professionally as a front-end developer for about a year.
    <br />
    When I&apos;m not working on client projects, I love spending my evenings working on my own game development projects. I&apos;m a big fan of game engines like Unity, Unreal Engine, and Roblox, and I&apos;ve even gained a following on Twitter where I share sneak peeks of my latest Roblox projects.
    <br />
    Growing up, my family and I used to spend our holidays up in the snowy mountains, skiing, hiking, and fishing. Our cabin up there, which my grandfather built, holds many special memories for me. It&apos;s where my brother and I used to play our favorite game, &quot;Lord of the Rings.&quot; I would always be Legolas, son of Thranduil, while my brother would portray Aragorn, son of Arathorn. These childhood memories have stuck with me throughout my life and have given me a deep appreciation for the fantasy genre. I love watching movies and series set in the middle ages, and my favorite game in the Age of Empires series is Age of Empires II.
    <br />
    Recently, I&apos;ve been exploring AI technology and have been working with a friend to train a model that recognizes specific creatures in a video game. We&apos;re planning on creating an automated shiny catcher that will train our creatures and look out for rare shiny ones. It&apos;s been an exciting project, and I can&apos;t wait to see where it takes us.
    <br />
    Aside from gaming, I&apos;m also interested in sports, particularly cycling and bodybuilding. Cycling has been a part of my life since I was a kid, and I&apos;ve recently taken up road cycling. Being a Norwegian, winter is my favorite time of year. There&apos;s nothing quite like taking a walk during winter and experiencing the serene beauty of the snowy landscape.
    <br />
    Overall, I&apos;m a passionate web developer with a wide range of interests. My childhood memories, particularly the times I spent with my family up in the snowy mountains, have shaped my interests and given me a deep appreciation for nature, gaming, and the fantasy genre. I&apos;m committed to excellence in everything that I do, and I can&apos;t wait to see where my career takes me next.
</p>
}
export default function about() {
  return (
      <main className='w-screen h-screen overflow-hidden grid place-content-center gap-16'>
        <motion.div
        layout
          key='Title'
          initial={top.initial}
          animate={top.animate}
          exit={top.exit}
          transition={{ delay: delayTime, type: 'spring', duration: 1 }}
          className='w-full text-center font-bold flex flex-col gap-2'>
        <h1 className='text-4xl font-bold'>About me</h1>
        </motion.div>
              <div className='flex flex-row gap-16'>
                  <AboutMe />
        </div>
      </main>
  )
}
