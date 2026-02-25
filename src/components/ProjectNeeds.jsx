
import co from '../assets/projectneeds/Co.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import ProjectNeedsM from './ProjectNeedsM'

const ProjectNeeds = () => {
  return (
    <section>
    <div 
    className='mt-3 relative hidden md:block'>
        <img 
        src={co} 
        alt="Let's discuss your project needs" 
        className='w-full h-[250px] lg:h-[330px] laptop:h-[450px] big:h-[590px] object-cover object-top rounded-3xl'
        />
        <div 
        className='bg-white/10 backdrop-blur-[10px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[70%] flex flex-col items-center px-[8%] py-[25px] lg:py-[35px] laptop:py-[55px] big:py-[70px]'>
            <h1 
            className='font-halyard text-white md:text-[22px] lg:text-[27px] laptop:text-[38px] big:text-[45px]'>
                Let’s Discuss Your Project Needs
            </h1>
            <p 
            className='text-[#F3F4F5] md:text-[10px] lg:text-[12px] laptop:text-[15px] big:text-[20px] text-center mt-[1px] lg:mt-[2px] laptop:mt-[4px] big:mt-[7px] font-hind'>
                Reach out to our team to discuss your requirements, request a quote, or explore how we can deliver reliable, efficient solutions for your industry.
            </p>
            <button 
            className="mt-[8px] lg:mt-[10px] laptop:mt-[16px] big:mt-[22px] bg-[#FDCF17] text-[#3A3B40] hover:bg-[#af8a04] transition-all duration-500 ease-in-out font-halyard w-[90px] h-[22px] lg:w-[105px] lg:h-[27px] laptop:w-[140px] laptop:h-[33px] big:w-[210px] big:h-[48px] font-medium space-x-[4px] laptop:space-x-[5px] big:space-x-[7px] rounded-[4px] laptop:rounded-[6px] md:text-[8px] lg:text-[10px] laptop:text-[13px] flex items-center justify-center big:text-[20px]">
                <span>Contact Our Team</span>
                <div 
                className=" text-[#FDCF17] bg-black  h-[10px] w-[10px] lg:w-[13px] lg:h-[13px] laptop:w-[16px] laptop:h-[16px] big:h-[20px] big:w-[20px] rounded-full flex items-center justify-center md:text-[5px] lg:text-[6px] laptop:text-[7px] big:text-[10px] mt-[1px] laptop:mt-[2px] big:mt-[3px]">
                    <FontAwesomeIcon icon={faChevronRight}/>
                </div>
            </button>
        </div>
    </div>
    <ProjectNeedsM />
    </section>
  )
}

export default ProjectNeeds