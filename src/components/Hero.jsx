import resume from '../assets/Resume.pdf'
import {Cursor, useTypewriter} from 'react-simple-typewriter'


function Hero() {
  const [text] = useTypewriter({
    words:['PROJECT MANAGER', 'PRODUCT DESIGNER', 'UI / UX DESIGNER', 'GRAPHIC DESIGNER', 'FRONTEND DEVELOPER'],
    loop:{},
  })

  return (
    <div className='flex justify-center items-center md:justify-start m'>
        <div className='w-screen flex flex-col gap-5  md:justify-start md:items-start md:w-[50vw]'>
            <p className='font-bold text-base md:text-2xl lg:text-base xl:text-base'>ERHENEDE MUDIAGA DANIEL</p>
            <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold'>
              <span className='flex flex-wrap items-center'>
                {text}
                <Cursor />
              </span>
            </h1>
            <p className='text-sm md:text-base lg:text-sm xl:text-sm py-4'>
            As a multi-disciplinary professional in Front End Development, Graphic Design, UI/UX, and 3D Art, my skills cover coding, visual design, and user experience, making me a versatile asset. I excel at crafting user-friendly websites, creating compelling visuals, and designing intuitive interfaces. My ability to blend creativity with functionality makes me an ideal choice to enhance any teams digital presence.
            </p>
            <div className='flex flex-col gap-2 md:flex-row md:gap-4'>
              <a href={resume} className='w-full md:w-[30vh] bg-[#A98F76] py-2 md:py-3 text-[#242948] text-center'>
                RESUME
              </a>
              <a href="mailto:md.erhenede@gmail.com" className='w-full md:w-[30vh] border-2 border-[#A98F76] py-2 md:py-3 text-[#A98F76] text-center'>
                CONTACT ME
              </a>
            </div>
        </div>
    </div>
  )
}

export default Hero