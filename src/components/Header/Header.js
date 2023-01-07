import React from 'react'
import { SocialIcon } from 'react-social-icons';
import {motion} from 'framer-motion'
function Header() {
  return (
    <header className='z-20 bg-[#f4f4f4] flex flex-row sticky top-0 justify-between max-w-7xl p-5 mx-auto xl:items-center '>
      <motion.div 
       initial ={{
          x: -100,
          opacity: 0,
          scale:0.5
       }}
       animate={{
          x: 0,
          opacity: 1,
          scale:1
       }}
        transition={{
          type: 'spring',
          stiffness: 120,
          delay: 0.5
        }}

       className='flex flex-row items-center'>
        <SocialIcon url="https://instagram.com/craftingbugs" fgColor='grey' bgColor='transparent' />
        <SocialIcon url="https://www.linkedin.com/in/craftingbugs/" fgColor='grey' bgColor='transparent' />
        <SocialIcon url="https://github.com/Abh1shekSingh" fgColor='grey' bgColor='transparent' />
      </motion.div>
      
      <motion.div 
      initial ={{
          x: 100,
          opacity: 0,
          scale:0.5
       }}
       animate={{
          x: 0,
          opacity: 1,
          scale:1
       }}
        transition={{
          type: 'spring',
          stiffness: 120,
          delay: 0.5
        }}
      className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <SocialIcon network='email' fgColor='grey' bgColor='transparent'/>
        <p className='uppercase hidden md:inline-flex text-sm text-gray-500'>Get In Touch</p>
      </motion.div>
    </header>
  )
}

export default Header