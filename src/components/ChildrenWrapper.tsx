import React from 'react'
import { Children } from 'react';
import { motion } from "framer-motion"

export default function ChildrenWrapper({children, variants, className}: {children: any, variants: any, className?: string}) {
  return (
      <>
{Children.map(children, child =>
        <motion.div  className={className} variants={variants}>
          {child}
        </motion.div>
      )}
      </>
  )
}
