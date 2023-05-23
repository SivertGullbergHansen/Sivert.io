import { topSmall } from '@/animations/Animations'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

export default function BackButton({link}: {link?: string}) {
    return (
        <motion.div variants={topSmall} className="flex justify-end">
  <Link scroll={false} href={link ?? "/"} className="font-bold btn">
    Back
  </Link>
</motion.div>
  )
}
