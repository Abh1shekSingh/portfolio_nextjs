import React from 'react'
import WorkCards from './WorkCards'
import {work} from '../../constant/index'
function Work() {
  return (
    <div className='h-screen mt-24 overflow-hidden flex items-center justify-evenly flex-col '>
      <h3 className=' uppercase text-[#3F9D86] text-xl tracking-[10px]'>Experience</h3>
      <div className='w-full flex space-x-5 snap-x snap-mandatory overflow-x-scroll p-10 md:justify-center md:items-center'>
        {work.map(({id, title, role, techStack, duration, image, points}) => (
          <WorkCards 
            key={id} 
            title={title} 
            role={role} 
            techStack={techStack} 
            duration={duration}
            image={image}
            points={points}
          />
        ))}
      </div>
    </div>
  )
}

export default Work