import cvBg from '../../assets/about/core-values/CV-BG.png'
import cvOv from '../../assets/about/core-values/CV-OV.png'
import cvCv from '../../assets/about/core-values/CV-CV.png'
import cvOm from '../../assets/about/core-values/CV-OM.png'

import { motion, easeInOut } from 'motion/react'

const CoreValuesM = () => {
  return (
        <div 
        className='relative mt-4 md:hidden'>
            <img 
            src={cvBg} 
            alt="Background Image of Core values section"
            className='rounded-md lg:rounded-lg laptop:rounded-xl big:rounded-2xl h-[730px] otherPhones:h-[650px] object-cover w-full object-center' 
            />
            <div 
            className='absolute top-1/2 -translate-y-1/2 w-full flex flex-col items-center justify-center p-10 space-y-[10px] px-[4%] overflow-hidden'>
                {/* box 1 */}
                <motion.div 
                initial={{opacity:0, x:-50}}
                whileInView={{opacity:100, x:0}}
                transition={{duration:2, ease:easeInOut}}
                viewport={{once:true}}                    className="w-full"
                >
                    <div 
                    className='w-full border-white/50 border-[3px]  p-[0.5%] rounded-md '>
                        <div 
                        className='bg-[#FDCF17] h-[190px] otherPhones:h-[155px]   w-full flex flex-col relative rounded-md'>
                            <div 
                            className='flex items-end justify-end'>
                                <img 
                                src={cvOv} 
                                alt="Placeholder image for our vision" 
                                className='w-[50px]  opacity-50'
                                />
                            </div>
                            <div 
                            className='flex flex-col px-[4%]  top-[14%] absolute'>
                                <h1 
                                className=' text-[27px] leading-[25px] font-bold  font-halyard  '>
                                    Our <br />Vision
                                </h1>
                                <p 
                                className='text-[#3A3B40]  text-[12px] mt-[15px]  font-hind'>
                                    To become a top-tier engineering firm recognized for solving complex industrial challenges, trusted for reliable procurement, and respected for excellence in construction and service delivery
                                </p>
                            </div>

                        </div>
                    </div>
                </motion.div>

                
                {/* box 2 */}
                <motion.div 
                initial={{opacity:0, x:50}}
                whileInView={{opacity:100, x:0}}
                transition={{duration:2, ease:easeInOut}}
                viewport={{once:true}}                    className="w-full"
                >
                    <div 
                    className='w-full border-white/50 border-[3px] p-[0.5%] rounded-md'>
                        <div 
                        className='bg-white h-[290px] otherPhones:h-[250px]  w-full flex flex-col relative rounded-md lg:rounded-lg laptop:rounded-xl big:rounded-2xl'>
                            <div 
                            className='flex items-end justify-end'>
                                <img 
                                src={cvCv} 
                                alt="Placeholder image for our vision" 
                                className='w-[50px] lg:w-[70px] laptop:w-[90px] big:w-[140px]  opacity-50'
                                />
                            </div>
                            <div 
                            className='flex flex-col px-[4%]  top-[7%] absolute'>
                                <h1 
                                className='text-[32px] leading-[27px] font-bold font-halyard italic text-[#1F6D22]'>
                                    Core <br />Values
                                </h1>
                                <ul className='list-disc list-outside pl-[6%] otherPhones:pl-[4%]  text-[#3A3B40]  text-[12px] mt-[15px] font-hind'>
                                    <li>Expertise: We deliver superior technical solutions with professionalism and precision.</li>
                                    <li>Probity: We uphold integrity, honesty, and transparency in all business dealings</li>
                                    <li>Customer Focus: We place our clients’ success at the heart of every decision.</li>
                                    <li>Innovation: We embrace technology to drive progress and continuous improvement.</li>
                                    <li>Safety: We ensure safe operations that protect our people, clients, and environment</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </motion.div>

    
                {/* box 3 */}
                <motion.div 
                initial={{opacity:0, x:-50}}
                whileInView={{opacity:100, x:0}}
                transition={{duration:2, ease:easeInOut}}
                viewport={{once:true}}                    className="w-full"
                >
                    <div 
                    className='w-full border-white/50 border-[3px] p-[0.5%] rounded-md '>
                        <div 
                        className='bg-[#FDCF17] h-[180px] otherPhones:h-[155px]  w-full flex flex-col relative rounded-md '>
                            <div 
                            className='flex items-end justify-end'>
                                <img 
                                src={cvOm} 
                                alt="Placeholder image for our vision" 
                                className='w-[50px]  opacity-50'
                                />
                            </div>
                            <div 
                            className='flex flex-col px-[4%]  top-[14%]  absolute'>
                                <h1 
                                className='text-[27px] leading-[25px] font-bold  font-halyard  '>
                                    Our <br />Mission
                                </h1>
                                <p 
                                className='text-[#3A3B40]   text-[12px] mt-[15px]  font-hind  '>
                                    To exceed customer expectations across all performance indicators quality, reliability, efficiency, and value while fostering lasting partnerships through integrity and innovation.
                                </p>
                            </div>

                        </div>
                    </div>
                </motion.div>


            </div>
        </div>
  )
}

export default CoreValuesM