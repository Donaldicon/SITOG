import OurClientsM from './OurClientsM'

import cOne from '../assets/ourclients/C1.png'
import cTwo from '../assets/ourclients/C2.png'
import cThree from '../assets/ourclients/C3.png'
import cFour from '../assets/ourclients/C4.png'
import cFive from '../assets/ourclients/C5.png'
import cSix from '../assets/ourclients/C6.png'
import cSeven from '../assets/ourclients/C7.png'

import { motion, easeInOut } from 'motion/react'

const OurClients = () => {
  return (
    <section>
        <div 
        className='hidden md:flex flex-col items-center justify-center py-10 laptop:py-[55px] big:py-20 font-halyard overflow-hidden'>
            <p 
            className='bg-[#F0F1F3] text-[#63646C] text-[9px] lg:text-[10px] laptop:text-[12px] big:text-[15px] rounded-md py-1 px-2 laptop:py-[6px] laptop:px-[8px] big:py-[8px] big:px-[12px] laptop:rounded-lg big:rounded-xl'>
                Our Clients
            </p>
            <motion.div 
            initial={{opacity:0, x:0}}
            whileInView={{opacity:100, x:0}}
            transition={{duration:2, ease:easeInOut}}
            viewport={{once:true}}
            >
                <h1 
                className='text-[#1C631F] text-center font-bold mt-2 big:mt-4 md:text-[22px] lg:text-[27px] md:leading-[27px] lg:leading-[35px] laptop:leading-[45px] laptop:text-[38px] big:text-[45px] big:leading-[52px]'>
                    Trusted by Leading Industrial<br />Companies in Nigeria
                </h1>
            </motion.div>
            <motion.div 
            initial={{opacity:0, x:-50}}
            whileInView={{opacity:100, x:0}}
            transition={{duration:2, ease:easeInOut}}
            viewport={{once:true}}
            >
                <div 
                className='flex items-center justify-center my-[14px] lg:my-[18px] laptop:my-[25px] big:my-[32px] space-x-[20px] lg:space-x-[27px] laptop:space-x-[35px] big:space-x-[42px]'>
                    <div 
                    className='w-[80px] bg-white px-[12px] py-[11px] lg:w-[90px] lg:py-[16px] laptop:w-[130px] laptop:px-[15px] big:px-[20px] laptop:py-[19px] big:w-[160px] rounded-lg shadow-md cursor-pointer transition-all duration-300 ease-out hover:scale-110'>
                        <img src={cOne} 
                        alt="Seplat Energy" />
                    </div> 

                    <div 
                    className='w-[80px] bg-white px-[12px] lg:w-[88px]  lg:py-[4px] laptop:w-[130px] laptop:px-[18px] big:px-[20px] laptop:py-[1px] big:w-[150px] big:py-0 rounded-lg shadow-md cursor-pointer transition-all duration-300 ease-out hover:scale-110'>
                        <img 
                        src={cTwo} 
                        alt="Lafarge" />
                    </div> 

                    <div 
                    className='w-[80px] bg-white px-[12px] lg:w-[88px] lg:py-[4px] laptop:w-[130px] laptop:px-[18px] big:px-[20px] laptop:py-[1px] big:w-[150px] big:py-0 rounded-lg shadow-md cursor-pointer transition-all duration-300 ease-out hover:scale-110'>
                        <img 
                        src={cThree} 
                        alt="Dangote" />
                    </div> 

                    <div 
                    className='w-[80px] bg-white px-[12px] py-[7px] lg:w-[88px]  lg:py-[12px] laptop:w-[130px] laptop:px-[17px] big:px-[20px] laptop:py-[12px] big:w-[152px] rounded-lg shadow-md cursor-pointer transition-all duration-300 ease-out hover:scale-110'>
                        <img 
                        src={cFour} 
                        alt="FMN" />
                    </div> 

                    <div className='w-[80px] bg-white px-[12px] py-[14px] lg:w-[89px]  lg:py-[20px] laptop:w-[130px] laptop:px-[15px] big:px-[20px] laptop:py-[23px] big:w-[163px] rounded-lg shadow-md cursor-pointer transition-all duration-300 ease-out hover:scale-110'>
                        <img 
                        src={cFive} 
                        alt="Olom Agri" 
                        className='rounded-[5px]'/>
                    </div> 
                </div>
            </motion.div>

            <motion.div 
            initial={{opacity:0, x:50}}
            whileInView={{opacity:100, x:0}}
            transition={{duration:2, ease:easeInOut}}
            viewport={{once:true}}
            >
                <div 
                className='flex items-center justify-center space-x-[20px] lg:space-x-[27px] laptop:space-x-[35px] big:space-x-[42px]'>
                    <div 
                    className='w-[80px] bg-white px-[20px] py-[6px] lg:w-[90px] lg:py-[8px] laptop:w-[130px] laptop:px-[25px] big:px-[30px] laptop:py-[9px] big:w-[160px] rounded-lg shadow-md cursor-pointer transition-all duration-300 ease-out hover:scale-110'>
                        <img 
                        src={cSix} 
                        alt="Bua Group" />
                    </div> 

                    <div 
                    className='w-[80px] bg-white px-[5px] py-[14px] lg:w-[88px]  lg:py-[19px] laptop:w-[130px] laptop:px-[0px] big:px-[20px] laptop:py-[27px] big:w-[150px] big:py-[38px] rounded-lg shadow-md cursor-pointer transition-all duration-300 ease-out hover:scale-110'>
                        <img 
                        src={cSeven} 
                        alt="Indorama" />
                    </div>
                </div> 
            </motion.div>
        </div>

        <OurClientsM />
    </section>
  )
}

export default OurClients