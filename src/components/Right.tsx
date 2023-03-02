import React from 'react'
import { motion } from "framer-motion"
import { delayTime, right } from '@/animations/Animations';

function DetailElement({ children, titleText}: { children: any, titleText: string}) {
            return <div className='flex flex-col'>
              <h2 className='text-md'>{ titleText }</h2>
              <h3 className='text-2xl font-bold'>{ children }</h3>
            </div>
}

  function getAge(dateString: string) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  }

export default function Right({width}: {width: number}) {
    return (
      <motion.div
        layout
          key='Details'
          initial={right.initial}
          animate={right.animate}
          exit={right.exit}
          transition={{ delay: delayTime * 4, type: 'spring', duration: 1 }}
        className={`flex flex-col gap-2 text-right pt-12`}
      style={{width:width}}
      >
        <h1 className='font-bold text-3xl'>Details</h1>
          <div className='flex flex-col gap-8'>
            <DetailElement titleText='Age'>
              { getAge("1998/06/05") }
            </DetailElement>
            <DetailElement titleText='Nationality'>
              Norwegian
            </DetailElement>
            <DetailElement titleText='Years of Experience'>
              { getAge("2021/08/01") }
          </DetailElement>
          </div>
          </motion.div>
  )
}
