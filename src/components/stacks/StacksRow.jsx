import { useState } from 'react'
import {GraphicDesign, Modeling, frontEnd, productDesign, stacks} from '../../export'
import { Projects } from '../portfolio/Projects'
import Stacks from './Stacks'



function StacksRow() {
  const [id, setId] = useState(1)

  const handleClick=(key)=>{
    setId (key)
    console.log(id);
  }


  return (
    <div className='flex flex-col gap-10 justify-between'>
        <div className=' flex gap-4 bg-[#242948] min-h-[30vh] justify-center min-w-screen mb-20 flex-wrap md:flex-1 md:mt-16'>
            {stacks.map((stack) =>(
                <Stacks
                key={stack.id}
                icon={stack.icon}
                title={stack.title} 
                description={stack.description}
                onClick={() => handleClick(stack.id)}
                />
            ))}
        </div>

        <div className=' flex flex-col gap-10'>
          <div id='projects'>MY PROJECTS</div>
          <div className='flex flex-wrap gap-0 md:gap-[2rem] justify-center md:justify-start w-[90vw]'>
            {id === 1 && frontEnd.map((project, index) => (
              <Projects
                key={index}
                proj={project.title}
                des={project.description}
                link={project.link}
                img={project.pic}
              />
            ))}
            {id === 3 && productDesign.map((project, index) => (
              <Projects
                key={index}
                proj={project.title}
                des={project.description}
                link={project.link}
                img={project.pic}
              />
            ))}
            {id === 2 && Modeling.map((project, index) => (
              <Projects
                key={index}
                proj={project.title}
                des={project.description}
                link={project.link}
                img={project.pic}
              />
            ))}
            {id === 4 && GraphicDesign.map((project, index) => (
              <Projects
                key={index}
                proj={project.title}
                des={project.description}
                link={project.link}
                img={project.pic}
              />
            ))}
          </div>
        </div>
    </div>
    
  )
}

export default StacksRow