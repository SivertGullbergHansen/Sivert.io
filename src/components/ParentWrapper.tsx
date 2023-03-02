import { delayTime } from '@/animations/Animations'
import React from 'react'
import { motion } from "framer-motion"

export default function ParentWrapper({children, className, style, delayChildren, staggerChildren}: {children: any, className?: string, style?: any, delayChildren: number, staggerChildren: number}) {
  return (
      <motion.div
      className={className}
      style={style}
        layout
        key='Left'
        variants={{}}
    initial="initial"
        animate="animate"
        exit='exit'
          transition={{ delayChildren: delayChildren, type: 'spring', duration: 1, staggerChildren: staggerChildren }}
      >{children}</motion.div>
  )
}
