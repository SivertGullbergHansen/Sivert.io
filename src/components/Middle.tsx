import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import { bottom } from '@/animations/Animations'

export default function Middle() {
  return (<motion.div
    className='cursor-grab active:cursor-grabbing'
    drag
    dragConstraints={{
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }}
    dragElastic={.5}
    dragTransition={{bounceDamping: 20, bounceStiffness: 500}}
          initial={bottom.initial}
          animate={bottom.animate}
          exit={bottom.exit}
          transition={{ delay: .6, type: 'spring', duration: 1 }}
  >
                <Image
            src='/img/Sivert_optimized.jpeg'
            width={512}
            height={512}
            alt='Portrait photograph of Sivert'
            className='w-[333px] h-[512px] pointer-events-none rounded-full border-solid border-black border-2 object-cover'
          />
    </motion.div>
  )
}
