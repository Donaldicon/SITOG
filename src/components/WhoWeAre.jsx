import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";

import whoWeAre from '../assets/whoweare/who-we-are.png'

import WhoWeAreM from "./WhoWeAreM";

import { motion, easeInOut } from "motion/react";
 
const WhoWeAre = () => {
  return (
    <section>
    <div 
    className='mt-5 laptop:mt-7 big:mt-10 hidden md:flex  items-start justify-between rounded-3xl shadow-lg font-hind bg-white py-5 laptop:py-7 big:py-10 px-[3%]'>

        {/* left */}
        <div 
        className='w-[28%] text-[#4C4E54] md:text-[15px] lg:text-[18px] laptop:text-[21px] big:text-[30px] mt-1 laptop:mt-[8px]'>
            <motion.div 
            initial={{opacity:0, x:0}}
            whileInView={{opacity:100, x:0}}
            transition={{duration:2, ease:easeInOut}}
            viewport={{once:true}}
            >
                --Who We Are--
            </motion.div>
        </div>

        {/* right */}
        <div 
        className='flex flex-col justify-end w-[70%]'>
            <motion.div 
            initial={{opacity:0, x:30}}
            whileInView={{opacity:100, x:0}}
            transition={{duration:2, ease:easeInOut}}
            viewport={{once:true}}
            >
                <h1 
                className='text-[#3A3B40] md:text-[18px] lg:text-[24px] md:leading-[24px] lg:leading-[32px] laptop:leading-[40px] laptop:text-[32px] big:text-[38px] big:leading-[50px] font-semibold font-halyard'><span className="text-[#1C631F]">SITOG Global Links Limited </span> is a leading Engineering, Procurement, and Construction (EPC) company delivering innovative, reliable, and sustainable industrial solutions across Nigeria.</h1>

                <p 
                className='md:my-2 lg:my-3 laptop:my-4 big:my-6 md:text-[11px] lg:text-[12px] laptop:text-[16px] big:text-[22px]'>At SITOG, quality, transparency, and customer satisfaction drive everything we do. We are committed to building long-term partnerships through integrity, technical excellence, innovation, and safety, ensuring every project meets international standards and delivers measurable value.</p>
            </motion.div> 

            <motion.div 
            initial={{opacity:0, x:35}}
            whileInView={{opacity:100, x:0}}
            transition={{duration:2, ease:easeInOut}}
            viewport={{once:true}}
            >
                <button 
                className="bg-[#FDCF17] text-[#3A3B40] hover:bg-[#af8a04] transition-all duration-500 ease-in-out font-halyard w-[60px] h-[20px] lg:w-[75px] lg:h-[25px] laptop:w-[100px] laptop:h-[30px] big:w-[140px] big:h-[45px] font-medium space-x-[4px] laptop:space-x-[5px] big:space-x-[7px] rounded-[4px] laptop:rounded-[6px] md:text-[8px] lg:text-[10px] laptop:text-[13px] flex items-center justify-center big:text-[20px]">
                    <span>View More</span>
                    <div 
                    className=" text-[#FDCF17] bg-black  h-[10px] w-[10px] lg:w-[13px] lg:h-[13px] laptop:w-[16px] laptop:h-[16px] big:h-[20px] big:w-[20px] rounded-full flex items-center justify-center md:text-[5px] lg:text-[6px] laptop:text-[7px] big:text-[10px] mt-[1px] laptop:mt-[2px] big:mt-[3px]">
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </div>
                </button>
            </motion.div>
            

            <motion.div 
            initial={{opacity:0, x:40}}
            whileInView={{opacity:100, x:0}}
            transition={{duration:2, ease:easeInOut}}
            viewport={{once:true}}
            >
                <img 
                src={whoWeAre} alt="Who we are SITOG image" 
                className="rounded-3xl md:mt-3 lg:mt-4 laptop:mt-5 big:mt-8 object-cover w-full"/>
            </motion.div>
        </div>
    </div>

    <WhoWeAreM />
    </section>
  )
}

export default WhoWeAre