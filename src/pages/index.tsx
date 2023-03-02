import Left from '@/components/Left';
import Middle from '@/components/Middle';
import Right from '@/components/Right';
import Head from 'next/head'
import { motion } from "framer-motion"
import { delayTime, top } from '@/animations/Animations'

const sidebarWidth = 192


export default function Home() {
  return (
      <main className='w-screen h-screen overflow-hidden grid place-content-center gap-16'>
        <motion.div
        layout
          key='Title'
          initial={top.initial}
          animate={top.animate}
          exit={top.exit}
          transition={{ delay: delayTime * 2, type: 'spring', duration: 1 }}
          className='w-full text-center font-bold flex flex-col gap-2'>
        <h1 className='text-4xl font-bold'>Sivert Gullberg Hansen</h1>
        <h2 className='text-3xl font-medium'>Full-Stack Developer</h2>
        </motion.div>
        <div className='flex flex-row gap-16'>
          <Left width={sidebarWidth}/>
          <Middle />
          <Right width={sidebarWidth}/>
        </div>
      </main>
  )
}
