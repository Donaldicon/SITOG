import po1 from '../assets/projectoverview/PO1.png'
import po2 from '../assets/projectoverview/PO2.png'
import po3 from '../assets/projectoverview/PO3.png'
import po4 from '../assets/projectoverview/PO4.png'

import ProjectOverviewM from './ProjectOverviewM'

import { motion, easeInOut } from 'motion/react'

const ProjectOverview = () => {
  return (
    <section>
    <div 
    className="hidden md:flex flex-col items-center justify-center bg-white rounded-3xl my-5 laptop:my-7 big:my-10 py-5 laptop:py-7 big:py-10  shadow-lg  font-halyard">
        <p 
        className='bg-[#F0F1F3] text-[#63646C] text-[9px] lg:text-[10px] laptop:text-[12px] big:text-[15px] rounded-md py-1 px-2 laptop:py-[6px] laptop:px-[8px] big:py-[8px] big:px-[12px] laptop:rounded-lg big:rounded-xl  mb-1 lg:mb-2 laptop:mb-3 big:mb-5 text-center'>
            Project Overview
        </p>
        <motion.div 
        initial={{opacity:0, x:0}}
        whileInView={{opacity:100, x:0}}
        transition={{duration:2, ease:easeInOut}}
        viewport={{once:true}}
        >
        <h1 
        className=' text-[#3A3B40] md:text-[19px] md:leading-[23px] lg:text-[24px] lg:leading-[28px] laptop:leading-[32px] big:leading-[42px]  laptop:text-[28px] big:text-[40px] font-bold text-center '>
            Proven Experience Across<br /> Critical Industries
        </h1>
        </motion.div>
        <div 
        className='flex items-top space-x-3 laptop:space-x-5 big:space-x-7 mt-5 laptop:mt-7  big:mt-10'>
            {/* Left Container */}
           <div 
           className='space-y-3 flex items-center flex-col laptop:space-y-5 big:space-y-7 overflow-hidden'>
                <motion.div 
                initial={{opacity:0, x:-50}}
                whileInView={{opacity:100, x:0}}
                transition={{duration:2, ease:easeInOut}}
                viewport={{once:true}}
                >
                    <div 
                    className="relative md:h-[420px] laptop:h-[580px] big:h-[718px]">
                        <img
                        src={po1} 
                        alt="Installation anfd Commisioning of Process Instruments and Mechanic Systems" 
                        className='w-[280px] lg:w-[380px] laptop:w-[520px] big:w-[650px] h-full object-cover rounded-lg'/>
                        <p 
                        className='absolute bottom-2 laptop:bottom-3 big:bottom-5 mx-[2%] laptop:mx-[3%] px-[3%] py-[8px]  bg-white/80 md:text-[15px] md:leading-[17px] lg:text-[18px] lg:leading-[22px] laptop:text-[24px] laptop:leading-[27px] big:text-[30px] big:leading-[32px]  font-medium rounded-md laptop:rounded-lg big:rounded-xl  '>
                            Installation and Commisioning of Process Instruments and Mechanic System
                        </p>
                    </div>
                </motion.div>
                
                <motion.div 
                initial={{opacity:0, x:-50}}
                whileInView={{opacity:100, x:0}}
                transition={{duration:2, ease:easeInOut}}
                viewport={{once:true}}
                >
                    <div 
                    className="relative md:h-[360px] laptop:h-[480px] big:h-[619px]">
                        <img
                        src={po3} 
                        alt="Supply of Critical Engineering Components for Refinery, Fertilizer, and Food production plants." 
                        className='w-[280px] lg:w-[380px] laptop:w-[520px] big:w-[650px] h-full object-cover rounded-lg'/>
                        <p 
                        className='absolute bottom-2 laptop:bottom-3 big:bottom-5 mx-[2%] laptop:mx-[3%] px-[3%] py-[8px]  bg-white/80 md:text-[15px] md:leading-[17px] lg:text-[18px] lg:leading-[22px] laptop:text-[24px] laptop:leading-[27px] big:text-[30px] big:leading-[32px]  font-medium rounded-md laptop:rounded-lg big:rounded-xl '>
                            Supply of Critical Engineering Components for Refinery, Fertilizer, and Food production plants.
                        </p>
                    </div>
                </motion.div>
                
           </div>

           
            {/* Right Container */}
           <div 
           className='space-y-3 laptop:space-y-5 big:space-y-7 flex items-center flex-col overflow-hidden'>
                <motion.div 
                initial={{opacity:0, x:30}}
                whileInView={{opacity:100, x:0}}
                transition={{duration:2, ease:easeInOut}}
                viewport={{once:true}}
                >
                    <div 
                    className="relative md:h-[360px] laptop:h-[480px] big:h-[619px]">
                        <img
                        src={po2} 
                        alt="Technical Training and Field Workshops for Maintenance Teams" 
                        className='w-[280px] lg:w-[380px] laptop:w-[520px] big:w-[650px] h-full object-cover rounded-lg'/>
                        <p 
                        className='absolute bottom-2 laptop:bottom-3 big:bottom-5 mx-[2%] laptop:mx-[3%] px-[3%] py-[8px]  bg-white/80 md:text-[15px] md:leading-[17px] lg:text-[18px] lg:leading-[22px] laptop:text-[24px] laptop:leading-[27px] big:text-[30px] big:leading-[32px]  font-medium rounded-md laptop:rounded-lg big:rounded-xl ]'>
                            Technical Training and Field Workshops for Maintenance Teams
                        </p>
                    </div>
                </motion.div>

                <motion.div 
                initial={{opacity:0, x:50}}
                whileInView={{opacity:100, x:0}}
                transition={{duration:2, ease:easeInOut}}
                viewport={{once:true}}
                >
                    <div 
                    className="relative md:h-[420px] laptop:h-[580px] big:h-[718px]">
                        <img
                        src={po4} 
                        alt="Calibration and maintenance of industrial instrumentation." 
                        className='w-[280px] lg:w-[380px] laptop:w-[520px] big:w-[650px] h-full object-cover rounded-lg'/>
                        <p 
                        className='absolute bottom-2 laptop:bottom-3 big:bottom-5 mx-[2%] laptop:mx-[3%] px-[3%] py-[8px]  bg-white/80 md:text-[15px] md:leading-[17px] lg:text-[18px] lg:leading-[22px] laptop:text-[24px] laptop:leading-[27px] big:text-[30px] big:leading-[32px]  font-medium rounded-md laptop:rounded-lg big:rounded-xl '>
                            Calibration and maintenance of industrial instrumentation.
                        </p>
                    </div>
                </motion.div>
           </div>


        </div>
    </div>
    <ProjectOverviewM />
    </section>
  )
}

export default ProjectOverview