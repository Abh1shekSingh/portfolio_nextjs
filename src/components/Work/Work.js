import React from 'react'
import WorkCards from './WorkCards'
import {work} from '../../constant/index'
function Work() {
  return (
    <div className='relative h-screen mt-[7em] overflow-hidden flex items-center justify-evenly flex-col '>
      <h3 className='heading uppercase absolute top-0 text-[transparent] text-3xl tracking-[10px] font-merriweather font-black'>Experience</h3>
      <div className='absolute w-full flex space-x-5 snap-x snap-mandatory overflow-x-scroll p-10 md:justify-center md:items-center'>
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