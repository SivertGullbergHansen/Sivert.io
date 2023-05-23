import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export function ProjectCard({title, type, image, link}: {title: string, type:string, image: string, link: string}) {
  return (
    <div className='not-prose'>
      <Link href={`/projects/${link}`} className='flex flex-col gap-0 justify-start h-auto rounded-xl overflow-hidden bg-base-100 dark:bg-base-300'>
          <Image src={image} alt='' width={1280} height={720} className='w-full h-auto' />
        <div className='flex flex-col p-6 gap-2'>
          <h3 className='text-sm'>{type}</h3>
          <h2 className='font-bold text-xl'>{title}</h2></div>
          <p className='text-end p-6'>Read More</p>
    </Link>
    </div>
  )
}
