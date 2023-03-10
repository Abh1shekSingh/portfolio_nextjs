import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import myself from '../../../public/assets/mee.png'
function About() {
  return (
    <div className=' text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto mt-[4em]'>
        <h3 className='heading tracking-[10px] uppercase font-merriweather font-black  text-3xl text-[transparent] '>
            Me, Myself and I
        </h3>
        <motion.div 
        initial = {{
          opacity: 0,
          y: 100,
        }}
        whileInView ={{
          opacity: 1,
          y: 0,
        }}
        viewport ={{once:true}}
        transition ={{
          duration: 1.5,
          delay: 0.5,
          type: 'spring',
        }}
        className='flex flex-col justify-center items-center gap-10 md:flex-row'>
          <Image src={myself} alt='Myself' className='rounded-[20px] -rotate-0 w-[400px] mt-14 md:w-[500px] '></Image>
          <div className='space-y-10 px-0 md:px-10'>
            <h2 className='text-left font-merriweather leading-snug text-3xl'><span className='font-bold '> ਸਤ ਸ੍ਰੀ ਅਕਾਲ |</span> My name is <span className='font-bold text-4xl underline font-sacramento text-[#484B6A]'>Abhishek Singh</span>, I am a <span className='font-bold'>Web Developer</span> from <span className='font-bold'>India</span>. &lsquo;&lsquo;As a web developer, I am passionate about creating visually stunning and functional websites.&rsquo;&rsquo;</h2>
            <p className='text-left font-merriweather text-lg'>Currently pursuing my <span className='font-bold'>Bachelors in Computer Science</span> from <span className='font-bold'>Chandigarh University</span>. I am a <span className='font-bold'>self-taught</span> developer, I have been working on web development for the past <span className='font-bold'>2 years</span>. I have worked on various projects and have gained a lot of experience in the field of web development. Recently, I have worked for <span className='font-bold'>Stakesmen.com</span> as a <span className='font-bold'>React JS Intern</span>. <br></br><br></br>I have worked on various technologies such as <span className='font-bold'>ReactJS, NextJS, TailwindCSS, Material UI, Firebase, etc.</span></p>
          </div>
        </motion.div>
    </div>
  )
}

export default About