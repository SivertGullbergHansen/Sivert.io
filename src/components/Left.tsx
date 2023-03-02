import React from 'react'
import { motion } from "framer-motion"
import { delayTime, left } from '@/animations/Animations'

function DetailElement({ children, titleText}: { children: any, titleText: string}) {
            return <div className='flex flex-col'>
              <h2 className='text-md'>{ titleText }</h2>
              <h3 className='text-2xl font-bold'>{ children }</h3>
            </div>
}

function SocialLink({ titleText, href}: { titleText: string, href: string}) {
            return <a className='text-md link' target='_blank' href={href}>{ titleText }</a>
}

export default function Left({width}: {width: number}) {
    return (
          <div className='flex flex-col gap-8'>
      <motion.div
        layout
          key='Links'
          initial={left.initial}
          animate={left.animate}
          exit={left.exit}
          transition={{ delay: delayTime * 3, type: 'spring', duration: 1 }}
          className={`flex flex-col gap-2 text-left pt-12`}
          style={{width:width}}>
        <h1 className='font-bold text-3xl'>Links</h1>
        <SocialLink titleText='Linkedin' href='https://www.linkedin.com/in/sivertgullberghansen' />
        <SocialLink titleText='GitHub' href='https://github.com/SivertGullbergHansen' />
        <SocialLink titleText='ORCID' href='https://orcid.org/0000-0001-7555-2983' />
        <SocialLink titleText='Blog' href='https://blog.sivert.xyz'/>
          </motion.div>
      <motion.div
        layout
          key='Education'
          initial={left.initial}
          animate={left.animate}
          exit={left.exit}
          transition={{ delay: delayTime * 3, type: 'spring', duration: 1 }}
          className={`flex flex-col gap-2 text-left`}
          style={{width:width}}>
          <h1 className='font-bold text-3xl'>Education</h1>
          <DetailElement titleText='2023 - B.Sc. '>
            Web Development
          </DetailElement>
          </motion.div>
        </div>
  )
}
