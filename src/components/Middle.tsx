import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import { bottom, delayTime } from '@/animations/Animations'

export default function Middle() {
  return (<motion.div
        layout
    className='cursor-grab active:cursor-grabbing sm:order-2
    md:w-[333px] md:max-w-[333px] md:min-w-[333px] md:h-[512px] w-[256px] max-w-[256px] min-w-[256px] h-[420px]
    '
    drag
    key='photograph'
    dragConstraints={{
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }}
    dragElastic={.5}
    dragTransition={{ bounceDamping: 20, bounceStiffness: 500 }}
    variants={bottom}
    animate='animate'
    initial='initial'
    exit='exit'
          transition={{ delay: delayTime, type: 'spring', duration: 1 }}
  >
                <Image
            src='/img/Sivert_optimized.jpeg'
            width={512}
      height={512}
      priority
            alt='Portrait photograph of Sivert'
      className='w-full h-full pointer-events-none rounded-full border-solid border-black border-2 object-cover'
          />
    </motion.div>
  )
}
