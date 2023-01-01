import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import myself from '../../../public/assets/mee.png'
function About() {
  return (
    <div className='h-screen text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto '>
        <h3 className='tracking-[10px] uppercase font-merriweather  text-xl text-[#3F9D86] '>
            Me, Myself and I
        </h3>
        <div className='flex flex-col justify-center items-center gap-10 md:flex-row'>
          <Image src={myself} alt='Myself' className='rounded-[20px] -rotate-0 w-78 mt-14 '></Image>
          <div className='space-y-10 px-0 md:px-10'>
            <h2 className='text-left font-merriweather leading-snug text-3xl'><span className='font-bold '> ਸਤ ਸ੍ਰੀ ਅਕਾਲ |</span> My name is <span className='font-bold text-4xl underline font-sacramento text-[#3F9D86]'>Abhishek Singh</span>, I am a <span className='font-bold'>Web Developer</span> from <span className='font-bold'>India</span>. &lsquo;&lsquo;As a web developer, I am passionate about creating visually stunning and functional websites.&rsquo;&rsquo;</h2>
            <p className='text-left font-merriweather text-lg'>Currently pursuing my <span className='font-bold'>Bachelors in Computer Science</span> from <span className='font-bold'>Chandigarh University</span>. I am a <span className='font-bold'>self-taught</span> developer, I have been working on web development for the past <span className='font-bold'>2 years</span>. I have worked on various <span className='underline cursor-pointer'>projects</span> and have gained a lot of experience in the field of web development. Recently, I have worked for <span className='font-bold'>Stakesmen.com</span> as a <span className='font-bold'>React JS Intern</span>. <br></br><br></br>I have worked on various technologies such as <span className='font-bold'>ReactJS, NextJS, TailwindCSS, Material UI, Firebase, etc.</span></p>
          </div>
        </div>
    </div>
  )
}

export default About