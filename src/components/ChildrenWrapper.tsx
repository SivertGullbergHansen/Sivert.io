import React from 'react'
import { Children } from 'react';
import { motion } from "framer-motion"

export default function ChildrenWrapper({children, variants}: {children: any, variants: any}) {
  return (
      <>
{Children.map(children, child =>
        <motion.div variants={variants}>
          {child}
        </motion.div>
      )}
      </>
  )
}
