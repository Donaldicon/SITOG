import c from '../assets/projectneeds/C.png'
import cm from '../assets/projectneeds/Cm.png'
import co from '../assets/projectneeds/Co.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const ProjectNeedsM = () => {
  return (
    <div 
    className='mt-3 relative md:hidden'>
        <img 
        src={co} 
        alt="Let's discuss your project needs" 
        className='w-full h-[450px] object-cover object-top rounded-3xl'
        />
        <div 
        className='bg-white/10 backdrop-blur-[10px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[95%] flex flex-col items-center px-[3%] py-[10px] '>
            <h1 
            className='font-halyard text-white text-[25px] leading-[30px] text-center'>
                Let’s Discuss Your Project Needs
            </h1>
            <p 
            className='text-[#F3F4F5] text-[12px] mt-[7px] text-center font-hind'>
                Reach out to our team to discuss your requirements, request a quote, or explore how we can deliver reliable, efficient solutions for your industry.
            </p>
        <button 
        className="mt-[12px] bg-[#FDCF17] text-[#3A3B40] hover:bg-[#af8a04] transition-all duration-500 ease-in-out font-halyard w-[110px] h-[30px] font-medium space-x-[4px] rounded-[4px] text-[11px] flex items-center justify-center">
            <span>Contact Our Team</span>
            <div 
            className=" text-[#FDCF17] bg-black  h-[10px] w-[10px]  rounded-full flex items-center justify-center text-[5px] mt-[1px] laptop:mt-[2px] big:mt-[3px]">
                <FontAwesomeIcon icon={faChevronRight}/>
            </div>
        </button>
        </div>
    </div>
  )
}

export default ProjectNeedsM