import React from 'react'
import { SocialIcon } from 'react-social-icons';
function Header() {
  return (
    <header className='flex flex-row sticky top-0 justify-between mx-w-7xl p-5 mx-auto xl:items-center'>
      <div className='flex flex-row items-center'>
        <SocialIcon url="https://linkedin.in/craftingbugs" fgColor='grey' bgColor='transparent' />
        <SocialIcon url="https://instagram.com/craftingbugs" fgColor='grey' bgColor='transparent' />
        <SocialIcon url="https://github.com/craftingbugs" fgColor='grey' bgColor='transparent' />
      </div>
      <div className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <SocialIcon network='email' fgColor='grey' bgColor='transparent'/>
        <p className='uppercase hidden md:inline-flex text-sm text-gray-500'>Get In Touch</p>
      </div>
    </header>
  )
}

export default Header