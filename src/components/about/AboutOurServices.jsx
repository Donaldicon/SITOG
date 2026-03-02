import aos1 from '../../assets/about/our-services/AOS1.png'
import aos2 from '../../assets/about/our-services/AOS2.png'
import aos3 from '../../assets/about/our-services/AOS3.png'

import { motion, easeInOut } from 'motion/react'
import AboutOurServicesM from './AboutOurServicesM'

const AboutOurServices = () => {
  return (
    <section>
        <div className='hidden md:flex flex-col items-center bg-white py-5 laptop:py-7 big:py-10 rounded-md lg:rounded-lg laptop:rounded-xl big:rounded-2xl'>
            <p 
            className='bg-[#F0F1F3] text-[#63646C] text-[9px] lg:text-[10px] laptop:text-[12px] big:text-[15px] rounded-md py-1 px-2 laptop:py-[6px] laptop:px-[8px] big:py-[8px] big:px-[12px] laptop:rounded-lg big:rounded-xl w-[68px] lg:w-[75px] laptop:w-[83px] big:w-[113px] mb-1 lg:mb-2 laptop:mb-3 big:mb-5'>
                Our Services
            </p>
            <h1
            className='text-center text-[#3A3B40] font-semibold md:text-[18px] lg:text-[24px] md:leading-[24px] lg:leading-[32px] laptop:leading-[40px] laptop:text-[32px] big:text-[38px] big:leading-[50px]'
            >
                We Support Industrial Projects with Expert <br /> Engineering, Reliable Procurement, and <br /> Efficient Execution.
            </h1>

            <div className='h-[340px] lg:h-[415px] laptop:h-[560px] big:h-[650px] flex items-start space-x-[8px] lg:space-x-[10px] laptop:space-x-[15px] big:space-x-[20px] mt-[10px] lg:mt-[13px] laptop:mt-[18px] big:mt-[24px]'>
                {/* left */}
                <motion.div 
                initial={{opacity:0, x:-50}}
                whileInView={{opacity:100, x:0}}
                transition={{duration:2, ease:easeInOut}}
                viewport={{once:true}}
                className='h-full'
                >
                    <div 
                    className='bg-[#1F6D22] h-full w-[280px] lg:w-[404px] laptop:w-[476px] big:w-[664px] rounded-md lg:rounded-lg laptop:rounded-xl big:rounded-2xl '>
                        <img 
                        src={aos1} 
                        alt="Engineering Services Image" 
                        className='w-full h-[170px] lg:h-[240px] laptop:h-[350px] object-cover object-right-top rounded-t-md lg:rounded-t-lg laptop:rounded-t-xl big:rounded-t-2xl z-[10]'
                        />
                        <div className='px-[4%] pt-[24px] lg:pt-[25px] laptop:pt-[35px] big:pt-[45px]'>
                            <h1 className='font-medium font-halyard md:text-[22px] lg:text-[27px] md:leading-[27px] lg:leading-[35px] laptop:leading-[45px] laptop:text-[38px] big:text-[45px] big:leading-[52px] text-white'>
                                Engineering Services
                            </h1>
                            <p className='text-[#BAD2BA] md:py-2 lg:py-3 laptop:py-4 big:py-6 md:text-[11px] lg:text-[12px] laptop:text-[16px] big:text-[22px]'>
                                We deliver mechanical and electrical engineering services, instrumentation and automation supply and commissioning, process system optimization, and on-site calibration of industrial instruments to international standards.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* right */}
                <div className=' h-[332px] lg:h-[405px] laptop:h-[545px] big:h-[630px] w-[270px] lg:w-[404px] laptop:w-[476px] big:w-[664px] space-y-[8px] lg:space-y-[10px] laptop:space-y-[15px] big:space-y-[20px]'>
                    {/* right top */}
                    <div 
                    className='h-1/2 flex items-center rounded-md lg:rounded-lg laptop:rounded-xl big:rounded-2xl'>
                        <motion.div 
                        initial={{opacity:0, x:30}}
                        whileInView={{opacity:100, x:0}}
                        transition={{duration:2, ease:easeInOut}}
                        viewport={{once:true}}
                        className='h-full bg-[#FFFAE8] flex items-center'
                        >
                            <img 
                            src={aos2} 
                            alt="Project Management Image" 
                            className='h-full w-[40%] object-cover rounded-l-md lg:rounded-l-lg laptop:rounded-l-xl big:rounded-l-2xl'/>
                            <div 
                            className='px-[4%]'>
                                <h1 
                                className='font-medium font-halyard md:text-[18px] lg:text-[22px] md:leading-[22px] lg:leading-[24px] laptop:leading-[35px] laptop:text-[30px] big:text-[38px] big:leading-[39px] text-[#3A3B40]'>
                                    Procurement <br /> Management
                                </h1>
                                <p 
                                className='md:text-[11px] lg:text-[12px] laptop:text-[16px] big:text-[22px] mt-[4px] lg:mt-[7px] laptop:mt-[10px] big:mt-[14px] text-[#63646C]'>
                                    Strategic sourcing, supply, and logistics support for engineering materials, spare parts, and equipment from our OEM partners.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* right bottom */}
                    <div 
                    className='h-1/2 bg-[#F3F4F5] flex items-center rounded-md lg:rounded-lg laptop:rounded-xl big:rounded-2xl'>
                        <motion.div 
                        initial={{opacity:0, x:50}}
                        whileInView={{opacity:100, x:0}}
                        transition={{duration:2, ease:easeInOut}}
                        viewport={{once:true}}
                        className='h-full bg-[#FFFAE8] flex items-center'
                        >
                            <img 
                            src={aos3} 
                            alt="Project Management Image" 
                            className='h-full w-[40%] object-cover object-left-top rounded-l-md lg:rounded-l-lg laptop:rounded-l-xl big:rounded-l-2xl'/>
                            <div 
                            className='px-[4%]'>
                                <h1 
                                className='font-medium font-halyard md:text-[18px] lg:text-[22px] md:leading-[22px] lg:leading-[24px] laptop:leading-[35px] laptop:text-[30px] big:text-[38px] big:leading-[39px] text-[#3A3B40]'>
                                    Project Execution <br /> & Support
                                </h1>
                                <p 
                                className='md:text-[11px] lg:text-[12px] laptop:text-[16px] big:text-[22px] mt-[4px] lg:mt-[7px] laptop:mt-[10px] big:mt-[14px] text-[#63646C]'>
                                    We provide complete project execution and technical support from EPC management and commissioning to maintenance and training.
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </div>
        <AboutOurServicesM />
    </section>
  )
}

export default AboutOurServices