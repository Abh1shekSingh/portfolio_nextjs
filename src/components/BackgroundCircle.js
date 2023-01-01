import React from 'react'
import { motion } from 'framer-motion'
function BackgroundCircle() {
  return (
    <motion.div 
    initial ={{
        opacity: 0,
    }}
    animate={{
        scale:[1,2,2,3,1],
        opacity: [0.1,0.2,0.7,0.8,1],
        borderRadius: ['20%', '40%', '60%', '40%', '100%'],
    }}
    transition = {{
        duration: 2.5,
    }}
    className='flex relative items-center justify-center'>
        <div className='absolute w-[200px] h-[200px] border border-[#D9D9D9] rounded-full mt-96 animate-ping' ></div>
        <div className='absolute w-[300px] h-[300px] border border-[#D9D9D9] rounded-full mt-96' ></div>
        <div className='absolute w-[500px] h-[500px] border border-[#3F9D86] rounded-full mt-96 animate-pulse' ></div>
        <div className='absolute w-[650px] h-[650px] border border-[#D9D9D9] rounded-full mt-96' ></div>
        <div className='absolute w-[800px] h-[800px] border border-[#D9D9D9] rounded-full mt-96 ' ></div>
    </motion.div>
  )
}

export default BackgroundCircle