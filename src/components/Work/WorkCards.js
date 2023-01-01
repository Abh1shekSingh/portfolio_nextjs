import Image from 'next/image'
import React from 'react'
import {motion } from 'framer-motion'

function WorkCards({title, role, techStack, duration, image, points}) {
  return (
    <motion.article 
    initial={{
        y: 200,
    }}
    whileInView={{
        y: 0,
    }}
    transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20,
        delay: 0.5,
    }}
    viewport ={{once:true}}

    className='flex flex-col items-center rounded-lg flex-shrink-0 space-y-7 w-[350px] md:w-[420px] xl:[900px] snap-center bg-[#dedede] opacity-50 hover:opacity-100 cursor-pointer transition-opacity duration-200'>
       
        <Image src={image} alt={title} width={350} height={350} className='object-cover object-center w-[350px]' ></Image>
        <div className='relative -top-8 px-2 md:px-10'>
            <h4 className='text-3xl font-bold '>{title}</h4>
            <p className='mt-1 text-xl font-merriweather  '>{role}</p>
            <div className='my-2 space-x-2 px-2'>
                {techStack.map((tech, index) => (
                    <span key={index} className='text-sm font-semibold bg-[#3F9D86] text-white px-2 py-1 rounded-lg'>{tech}</span>
                ))}
            </div>
            <p className='uppercase mb-1 text-sm px-2'>{duration}</p>
            <ul className='list-disc ml-5 space-y-4'>
                {points.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
        </div>
    </motion.article>
  )
}

export default WorkCards