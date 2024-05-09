import React from 'react'
import './Stacks.css'


function Stacks({icon, title, description, onClick, link, id}) {
  return (
    <div onClick={() => onClick(link)} className='w-[17rem] h-[15rem] flex flex-col items-center justify-center gap-1' id='stacks'>
      <div className='w-[15rem] h-[7rem] flex flex-col md:items-center justify-center items-center gap-2'>
          <div >{icon}</div>
          <p className='font-bold'>{title}</p>
          <p className='text-[0.5rem]'>{description}</p>
          <a href="#projects" className='bg-[#A98F76] text-[#242948] p-[7px] flex justify-center text-[12px] '>VIEW PROJECTS</a>
        </div>
    </div>
  )
}

export default Stacks