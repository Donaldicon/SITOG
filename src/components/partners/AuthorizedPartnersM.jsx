import vega from '../../assets/partners/vega.png'
import rotex from '../../assets/partners/rotex.png'
import pyrotech from '../../assets/partners/pyrotech.png'
import flexco from '../../assets/partners/flexco.png'
import tempsens from '../../assets/partners/tempsens.png'

import { motion, easeInOut } from 'motion/react'

import { Link } from 'react-router-dom'

const AuthorizedPartnersM = () => {
  return (
    <div className='overflow-hidden'>
        <h1 
        className='text-[#1C631F] text-center font-bold my-2 phone:my-3 mb-5 text-[25px] leading-[28px]'>
            Authorized OEM Partnerships
        </h1>
        {/* Row 1 */}
        <div className='flex flex-col items-center justify-between w-full font-halyard space-y-[12px]'>

            <Link to='https://www.vega.com/en-za' target='_blank' className='w-full'>
                    <motion.div 
        initial={{opacity:0, x:50}}
        whileInView={{opacity:100, x:0}}
        transition={{duration:2, ease:easeInOut}}
        viewport={{once:true}}
        className='w-full'
        >
            <div className='border-[#CACBD0] bg-white hover:border-[#1f6d22] hover:bg-[#e9f0e9] transition-all duration-500 ease-in-out border-[1px] w-full h-[130px] px-[3%] flex flex-col justify-center rounded-md '>
                 
                    <img 
                    src={vega}
                    alt="Vega Logo" 
                    className='w-[130px]'/>
                    
                    <p className='text-[#63646C] text-[15px] leading-[20px]'>Specializes in advanced level, pressure, and flow measurement technologies</p>
                
            </div>
            </motion.div>
            </Link>
 
            <Link to='https://tempsens.com/' target='_blank' className='w-full'>
        <motion.div 
        initial={{opacity:0, x:-50}}
        whileInView={{opacity:100, x:0}}
        transition={{duration:2, ease:easeInOut}}
        viewport={{once:true}}
        className='w-full'
        > 
            <div className='border-[#CACBD0] bg-white hover:border-[#1f6d22] hover:bg-[#e9f0e9] transition-all duration-500 ease-in-out border-[1px] w-full h-[130px] lg:h-[155px] px-[3%] flex flex-col justify-center rounded-md '>

                    <img 
                    src={tempsens}
                    alt="tempsens Logo" 
                    className='w-[130px]'/>
                    
                    <p className='text-[#63646C] text-[15px] leading-[20px]'>Temperature sensors, furnaces, and calibration equipment</p>
                
            </div>
        </motion.div>
            </Link>
  
        </div>

        
        {/* Row 2 */}
        <div className='flex flex-col items-center justify-center w-full mt-[12px] space-y-[12px]'>
            <Link to='https://flexco.com/' target='_blank' className='w-full'>
        <motion.div 
        initial={{opacity:0, x:50}}
        whileInView={{opacity:100, x:0}}
        transition={{duration:2, ease:easeInOut}}
        viewport={{once:true}}
        className='w-full'
        > 
            <div className='border-[#CACBD0] bg-white hover:border-[#1f6d22] hover:bg-[#e9f0e9] transition-all duration-500 ease-in-out border-[1px] w-full h-[130px] px-[3%] flex flex-col justify-center rounded-md '>
                    <img 
                    src={flexco}
                    alt="Flexco Logo" 
                    className='w-[130px]'/>
                    
                    <p className='text-[#63646C] text-[15px] leading-[17px] '>Conveyor belt solutions and maintenance systems</p>
            </div>
        </motion.div>
            </Link>
            
             <Link to='https://www.pyrotechlighting.com/' target='_blank' className='w-full'>
        <motion.div 
        initial={{opacity:0, x:-50}}
        whileInView={{opacity:100, x:0}}
        transition={{duration:2, ease:easeInOut}}
        viewport={{once:true}}
        className='w-full'
        > 
            <div className='border-[#CACBD0] bg-white hover:border-[#1f6d22] hover:bg-[#e9f0e9] transition-all duration-500 ease-in-out border-[1px] w-full h-[130px] px-[3%] flex flex-col justify-center rounded-md lg:rounded-lg laptop:rounded-xl big:rounded-2xl'>
                    <img 
                    src={pyrotech}
                    alt="pyrotech Logo" 
                    className='w-[130px]'/>
                    
                    <p className='text-[#63646C] md:text-[15px] md:leading-[17px] lg:text-[18px] lg:leading-[21px] laptop:text-[21px] laptop:leading-[25px] big:text-[30px] big:leading-[33px]'>Temperature sensors, furnaces, and calibration equipment</p>
            </div>
        </motion.div>
            </Link>

            <Link to='https://rotexautomation.com/' target='_blank' className='w-full'>
        <motion.div 
        initial={{opacity:0, x:50}}
        whileInView={{opacity:100, x:0}}
        transition={{duration:2, ease:easeInOut}}
        viewport={{once:true}}
        className='w-full'
        > 
            <div className='border-[#CACBD0] bg-white hover:border-[#1f6d22] hover:bg-[#e9f0e9] transition-all duration-500 ease-in-out border-[1px] w-full h-[130px] px-[3%] flex flex-col justify-center rounded-md lg:rounded-lg laptop:rounded-xl big:rounded-2xl'>
                 
                    <img 
                    src={rotex}
                    alt="rotex Logo" 
                    className='w-[130px]'/>
                    
                    <p className='text-[#63646C] md:text-[15px] md:leading-[17px] lg:text-[18px] lg:leading-[21px] laptop:text-[21px] laptop:leading-[25px] big:text-[30px] big:leading-[33px]'>Experts in valve automation, actuation, and control systems</p>
            </div>
        </motion.div>
            </Link>


        </div>
    </div>
  )
}

export default AuthorizedPartnersM