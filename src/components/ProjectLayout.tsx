import Head from 'next/head';
import React from 'react'
import ThemeSwitch from './ThemeSwitcher';
import ParentWrapper from './ParentWrapper';
import { staggerTime, topSmall } from '@/animations/Animations';
import { motion } from 'framer-motion';
import BackButton from './BackButton';
import Image from 'next/image';

export default function ProjectLayout({children, title, image}: {children: React.ReactNode, title: string, image: string}) {
    return (
        <>
          <Head>
                <title>Sivert Gullberg Hansen - {title}</title>
          </Head>
          <ThemeSwitch />
          <main className="min-h-screen py-16 px-4 overflow-hidden lg:py-12 flex flex-col place-items-center">
            <ParentWrapper
              delayChildren={0}
              staggerChildren={staggerTime}
              className="prose lg:prose-xl max-w-prose"
                >
                    <motion.div variants={topSmall}><Image className='rounded-xl' src={image} width={1920} height={1080} alt='' /></motion.div>
                    <motion.h1 variants={topSmall}>{title}</motion.h1>
                    {children}
              <BackButton link='/projects' />
            </ParentWrapper>
          </main>
        </>
      );
}
