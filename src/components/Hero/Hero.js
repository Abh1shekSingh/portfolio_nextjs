import Image from 'next/image'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from '../BackgroundCircle'
import dev from '../../../public/assets/Sardar ji.png'
import Link from 'next/link'

function Hero() {
  const [text, count] = useTypewriter({
    words: ['Developer', 'Photographer', 'Abhishek'],
    loop: 1,
    delaySpeed: 1000,
  })
  return (
    <div className='flex flex-col justify-start items-center h-screen space-y-8 overflow-hidden text-center pt-16'>
      <BackgroundCircle />
      <Image src={dev} alt='Developer' className='w-32 relative mx-auto object-cover' />
      <div className='z-20'>
        <h1 className='text-[#7E7E7E] opacity-[50%] text-sm uppercase p-2 tracking-[10px]'>Web Developer</h1>
        <h1 className='text-7xl pt-2 font-sacramento font-semibold text-[#484B6A]'>
          <span>I&apos;m {text}</span>
          <Cursor 
            cursorColor='#484B6A' 
          />
        </h1>  
        <div className=''>
        <Link href='#about'>
          <button className='heroButton'>About</button>
        </Link>
        <Link href='#project'>
          <button className='heroButton'>Projects</button>
        </Link>
        <Link href='#work'>
          <button className='heroButton'>Work</button>
        </Link>      
        </div> 
      </div>
         
    </div>
    
    
  )
}

export default Hero