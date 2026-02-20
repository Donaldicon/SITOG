import OurServicesM from './OurServicesM'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight'

import OS1 from '../assets/ourservices/OS1.png'
import OS2 from '../assets/ourservices/OS2.png'
import OS3 from '../assets/ourservices/OS3.png'

import { motion, easeInOut } from 'motion/react'

const OurServices = () => {
  return (
    <section>
        <section 
        className='hidden md:block bg-white py-7 laptop:py-10 big:py-14 px-[3%] rounded-3xl shadow-lg font-halyard '>
            <motion.div 
            initial={{opacity:0, y:20}}
            whileInView={{opacity:100, y:0}}
            transition={{duration:2, ease:easeInOut}}
            viewport={{once:true}}
            className='flex items-center justify-between'
            >
                <div 
                className='w-[29%]'>
                    <p 
                    className='bg-[#F0F1F3] text-[#63646C] text-[9px] lg:text-[10px] laptop:text-[12px] big:text-[15px] rounded-md py-1 px-2 laptop:py-[6px] laptop:px-[8px] big:py-[8px] big:px-[12px] laptop:rounded-lg big:rounded-xl w-[68px] lg:w-[75px] laptop:w-[83px] big:w-[113px] mb-1 lg:mb-2 laptop:mb-3 big:mb-5'>
                        Our Services
                    </p>

                    <h1 
                    className=' text-[#3A3B40] md:text-[15px] md:leading-[22px] lg:text-[18px] lg:leading-[24px] laptop:leading-[29px] big:leading-[36px] laptop:text-[21px] big:text-[30px] font-semibold'>
                        Comprehensive Engineering<br /> & Industrial Solutions
                    </h1>

                    <p 
                    className='md:my-2 lg:my-3 laptop:my-4 big:my-6 md:text-[10px] lg:text-[12px] laptop:text-[16px] big:text-[22px] font-hind'>SITOG Global Links Limited provides end-<br />to-end engineering, procurement, and<br /> technical solutions across the industrial<br /> project lifecycle.
                    </p>

                    <button 
                    className="bg-[#FDCF17] text-[#3A3B40] hover:bg-[#af8a04] transition-all duration-500 ease-in-out font-halyard w-[60px] h-[20px] lg:w-[75px] lg:h-[25px] laptop:w-[100px] laptop:h-[30px] big:w-[140px] big:h-[45px] font-medium space-x-[4px] laptop:space-x-[5px] big:space-x-[7px] rounded-[4px] laptop:rounded-[6px] md:text-[8px] lg:text-[10px] laptop:text-[13px] flex items-center justify-center big:text-[20px]">
                        <span>Learn More</span>
                        <div 
                        className=" text-[#FDCF17] bg-black  h-[10px] w-[10px] lg:w-[13px] lg:h-[13px] laptop:w-[16px] laptop:h-[16px] big:h-[20px] big:w-[20px] rounded-full flex items-center justify-center md:text-[5px] lg:text-[6px] laptop:text-[7px] big:text-[10px] mt-[1px] laptop:mt-[2px] big:mt-[3px]">
                            <FontAwesomeIcon icon={faChevronRight}/>
                        </div>
                    </button>
                    
                </div>

                <div 
                className='w-[69%] flex items-center justify-between'>
                    <div 
                    className='w-[32%] relative'>
                        <img 
                        src={OS1} 
                        alt="Engineering Services Image" 
                        className='w-full h-[180px] lg:h-[220px] laptop:h-[310px] big:h-[410px] object-cover rounded-2xl shadow-md'
                        />
                        <p 
                        className='absolute bottom-2 laptop:bottom-3 big:bottom-4 left-[5%] text-white md:text-[15px] md:leading-[16px] lg:text-[18px] lg:leading-[20px] laptop:leading-[24px] big:leading-[32px] laptop:text-[21px] big:text-[30px] font-medium '>
                            Engineering <br /> Services
                        </p>
                    </div>
                    
                    <div 
                    className='w-[32%] relative'>
                        <img 
                        src={OS2} 
                        alt="Procurement Management Image" 
                        className='w-full h-[180px] lg:h-[220px] laptop:h-[310px] big:h-[410px] object-cover rounded-2xl shadow-md'
                        />
                        <p 
                        className='absolute bottom-2 laptop:bottom-3 big:bottom-4 left-[5%] text-white md:text-[15px] md:leading-[16px] lg:text-[18px] lg:leading-[20px] laptop:leading-[24px] big:leading-[32px] laptop:text-[21px] big:text-[30px] font-medium '>
                            Procurement <br /> Management
                        </p>
                    </div>
                    
                    <div 
                    className='w-[32%] relative'>
                        <img 
                        src={OS3} 
                        alt="Project Execution and Support Image" 
                        className='w-full h-[180px] lg:h-[220px] laptop:h-[310px] big:h-[410px] object-cover rounded-2xl shadow-md'
                        />
                        <p 
                        className='absolute bottom-2 laptop:bottom-3 big:bottom-4 left-[5%] text-white md:text-[15px] md:leading-[16px] lg:text-[18px] lg:leading-[20px] laptop:leading-[24px] big:leading-[32px] laptop:text-[21px] big:text-[30px] font-medium '>
                            Project Execution <br /> & Support
                        </p>
                    </div>
                    



                </div>
            </motion.div>
        </section>
        <OurServicesM />
    </section>
  )
}

export default OurServices