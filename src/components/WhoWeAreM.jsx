import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";

import whoWeAre from '../assets/whoweare/who-we-are.png'

import { motion, easeInOut } from "motion/react";

const WhoWeAreM = () => {
  return (
    <section 
    className='mt-6 md:hidden overflow-hidden flex flex-col items-start rounded-3xl shadow-lg font-hind bg-white py-3 px-[4%]'>

      
        <div 
        className='text-[#4C4E54] text-[15px]'>
            <motion.div 
            initial={{opacity:0, x:0}}
            whileInView={{opacity:100, x:0}}
            transition={{duration:2, ease:easeInOut}}
            viewport={{once:true}}
            >
                --Who We Are--
            </motion.div>
        </div>

       
        <div 
        className='flex flex-col mt-2'>
            <motion.div 
            initial={{opacity:0, x:30}}
            whileInView={{opacity:100, x:0}}
            transition={{duration:2, ease:easeInOut}}
            viewport={{once:true}}
            >
                <h1 
                className='text-[#3A3B40] text-[18px] leading-[27px] font-semibold font-halyard'><span className="text-[#1C631F]">SITOG Global Links Limited </span>  is a leading Engineering, Procurement, and Construction (EPC) company delivering innovative, reliable, and sustainable industrial solutions across Nigeria.</h1>
            </motion.div> 

            <motion.div 
            initial={{opacity:0, x:-30}}
            whileInView={{opacity:100, x:0}}
            transition={{duration:2, ease:easeInOut}}
            viewport={{once:true}}
            >
                <p 
                className='my-4 text-[12px] text-[#4C4E54]'>At SITOG, quality, transparency, and customer satisfaction drive everything we do. We are committed to building long-term partnerships through integrity, technical excellence, innovation, and safety, ensuring every project meets international standards and delivers measurable value.</p>
            </motion.div>

            <motion.div 
            initial={{opacity:0, x:0}}
            whileInView={{opacity:100, x:0}}
            transition={{duration:2, ease:easeInOut}}
            viewport={{once:true}}
            >
                <button 
                className="bg-[#FDCF17] text-[#3A3B40] hover:bg-[#af8a04] transition-all duration-500 ease-in-out font-halyard w-[75px] h-[30px] font-medium space-x-[4px] rounded-[4px] text-[11px] flex items-center justify-center">
                    <span>View More</span>
                    <div 
                    className=" text-[#FDCF17] bg-black  h-[10px] w-[10px]  rounded-full flex items-center justify-center text-[5px] mt-[1px] laptop:mt-[2px] big:mt-[3px]">
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
                className="rounded-lg mt-4 h-[220px] phone:h-[300px] object-cover w-full"/>
            </motion.div>
        </div>
    </section>
  )
}

export default WhoWeAreM