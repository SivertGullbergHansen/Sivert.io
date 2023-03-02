import React from 'react'
import { motion } from "framer-motion"
import { left } from '@/animations/Animations'

function SocialLink({ titleText, href}: { titleText: string, href: string}) {
            return <a className='text-md link' target='_blank' href={href}>{ titleText }</a>
}

export default function Left() {
    return (
      <motion.div
          initial={left.initial}
          animate={left.animate}
          exit={left.exit}
          transition={{ delay: .4, type: 'spring', duration: 1 }}
        className='flex flex-col gap-2 text-left w-32 pt-12'>
        <h1 className='font-bold text-3xl'>Links</h1>
        <SocialLink titleText='Linkedin' href='https://www.linkedin.com/in/sivertgullberghansen' />
        <SocialLink titleText='GitHub' href='https://github.com/SivertGullbergHansen' />
        <SocialLink titleText='ORCID' href='https://orcid.org/0000-0001-7555-2983' />
        <SocialLink titleText='Blog' href='https://blog.sivert.xyz'/>
          </motion.div>
  )
}
