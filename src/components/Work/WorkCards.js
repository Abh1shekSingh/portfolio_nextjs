import Image from 'next/image'
import React from 'react'
import {motion } from 'framer-motion'

function WorkCards({title, role, techStack, duration, image, points}) {
  return (
    <motion.article 
    initial={{
        y: 200,
        opacity: 0,
    }}
    whileInView={{
        y: 0,
        opacity: 1,
    }}
    transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20,
    }}
    viewport={{once: true}}

    className=' flex flex-col items-center rounded-lg flex-shrink-0 space-y-7 w-[350px] md:w-[420px] xl:[900px] snap-center bg-[#fdfdfd]  cursor-pointer transition-opacity duration-200'>
       
        <Image src={image} alt={title} width={350} height={350} className='object-cover object-center w-[150px] mb-5' ></Image>
        <div className='relative -top-8 px-2 md:px-10'>
            <h4 className='text-3xl font-montserrat font-extrabold'>{title}</h4>
            <p className='mt-1 text-lg font-merriweather font-thin'>{role}</p>
            <div className='my-2 space-x-2 px-2'>
                {techStack.map((tech, index) => (
                    <span key={index} className='text-xs font-semibold bg-[#484B6A]/50 text-white px-2 py-1 rounded-lg'>{tech}</span>
                ))}
            </div>
            <p className='uppercase my-3 text-xs px-2'>{duration}</p>
            <ul className='font-montserrat font-medium text-sm list-disc ml-5 space-y-4'>
                {points.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
        </div>
    </motion.article>
  )
}

export default WorkCards