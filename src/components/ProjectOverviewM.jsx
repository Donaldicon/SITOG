import po1 from '../assets/projectoverview2/PO1.png'
import po2 from '../assets/projectoverview2/PO2.png'
import po3 from '../assets/projectoverview2/PO3.png'
import po4 from '../assets/projectoverview2/PO4.png'

import { motion, easeInOut } from 'motion/react'

const ProjectOverviewM = () => {
  return (
    <div 
    className="md:hidden flex flex-col items-center justify-center bg-white rounded-3xl my-4 py-3  shadow-lg  font-halyard">
        <p 
        className='bg-[#F0F1F3] text-[#63646C] text-[10px] rounded-lg py-2 px-3 w-fit mx-auto'>
            Project Overview
        </p>
        <h1 
        className=' text-[#3A3B40] text-[20px] leading-[23px] font-bold text-center my-2'>
            Proven Experience Across<br /> Critical Industries
        </h1>
        <div 
        className='flex flex-col items-center mt-3 space-y-3 '>
            {/* Left Container */}
           <div 
           className='space-y-3 flex items-center flex-col w-[92%]'>
                <motion.div 
                initial={{opacity:0, x:-50}}
                whileInView={{opacity:100, x:0}}
                transition={{duration:2, ease:easeInOut}}
                viewport={{once:true}}
                >
                    <div 
                    className="relative w-full">
                        <img
                        src={po1} 
                        alt="Installation anfd Commisioning of Process Instruments and Mechanic Systems" 
                        className='w-full h-full object-cover rounded-lg'/>
                        <p 
                        className='absolute bottom-2 mx-[2%] px-[3%] py-[8px]  bg-white/80 text-[15px] otherPhones:text-[17px]  font-medium leading-[16px] rounded-md '>Installation and Commisioning of Process Instruments and Mechanic System</p>
                    </div>
                </motion.div>
                
                <motion.div 
                initial={{opacity:0, x:50}}
                whileInView={{opacity:100, x:0}}
                transition={{duration:2, ease:easeInOut}}
                viewport={{once:true}}
                >
                    <div 
                    className="relative w-full">
                        <img
                        src={po3} 
                        alt="Supply of Critical Engineering Components for Refinery, Fertilizer, and Food production plants." 
                        className='w-full object-cover rounded-lg'/>
                        <p 
                        className='absolute bottom-2 mx-[2%] laptop:mx-[3%] px-[3%] py-[8px]  bg-white/80 text-[15px] otherPhones:text-[17px]  font-medium leading-[16px] rounded-md '>Supply of Critical Engineering Components for Refinery, Fertilizer, and Food production plants.</p>
                    </div>
                </motion.div>
                
           </div>

           
            {/* Right Container */}
           <div 
           className='space-y-3 flex items-center flex-col w-[92%]'>
                <motion.div 
                initial={{opacity:0, x:-50}}
                whileInView={{opacity:100, x:0}}
                transition={{duration:2, ease:easeInOut}}
                viewport={{once:true}}
                >
                    <div 
                    className="relative w-full">
                        <img
                        src={po2} 
                        alt="Technical Training and Field Workshops for Maintenance Teams" 
                        className='w-full object-cover rounded-lg'/>
                        <p 
                        className='absolute bottom-2 laptop:bottom-3 big:bottom-5 mx-[2%] laptop:mx-[3%] px-[3%] py-[8px]  bg-white/80 text-[15px] otherPhones:text-[17px]  font-medium leading-[16px] rounded-md'>Technical Training and Field Workshops for Maintenance Teams</p>
                    </div>
                </motion.div>

                <motion.div 
                initial={{opacity:0, x:50}}
                whileInView={{opacity:100, x:0}}
                transition={{duration:2, ease:easeInOut}}
                viewport={{once:true}}
                >
                    <div 
                    className="relative w-full">
                        <img
                        src={po4} 
                        alt="Calibration and maintenance of industrial instrumentation." 
                        className='w-full object-cover rounded-lg'/>
                        <p 
                        className='absolute bottom-2 mx-[2%] laptop:mx-[3%] px-[3%] py-[8px]  bg-white/80 text-[15px] otherPhones:text-[17px]  font-medium leading-[16px] rounded-md'>Calibration and maintenance of industrial instrumentation.</p>
                    </div>
                </motion.div>
                
           </div>


        </div>
    </div>
  )
}

export default ProjectOverviewM