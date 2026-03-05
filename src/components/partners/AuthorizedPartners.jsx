import vega from '../../assets/partners/vega.png'
import rotex from '../../assets/partners/rotex.png'
import pyrotech from '../../assets/partners/pyrotech.png'
import flexco from '../../assets/partners/flexco.png'
import tempsens from '../../assets/partners/tempsens.png'

import { motion, easeInOut } from 'motion/react'

import { Link } from 'react-router-dom'

const AuthorizedPartners = () => {
  return (
    <div className='overflow-hidden'>
        <h1 className='text-[#1C631F] text-center font-bold mt-[16px] mb-[13px] laptop:mt-[22px] laptop:mb-[15px]  big:mt-[30px] big:mb-[17px] md:text-[22px] lg:text-[27px] laptop:text-[38px] big:text-[45px] font-halyard'>
            Authorized OEM Partnerships
        </h1>
        {/* Row 1 */}
        <motion.div 
        initial={{opacity:0, y:50}}
        whileInView={{opacity:100, y:0}}
        transition={{duration:2, ease:easeInOut}}
        viewport={{once:true}}
        >
        <div className='flex items-center justify-between w-full font-halyard'>
            <Link to='https://www.vega.com/en-za' target='_blank' className='w-[52%]'>
            <div className='border-[#CACBD0] bg-white hover:border-[#1f6d22] hover:bg-[#e9f0e9] transition-all duration-500 ease-in-out border-[1px] w-full h-[140px] lg:h-[155px] laptop:h-[185px] big:h-[225px] px-[2%] flex flex-col justify-center rounded-md lg:rounded-lg laptop:rounded-xl big:rounded-2xl'>
                    <img 
                    src={vega}
                    alt="Vega Logo" 
                    className='w-[150px] laptop:w-[200px] big:w-[230px]'/>
                    
                    <p className='text-[#63646C] md:text-[15px] md:leading-[17px] lg:text-[18px] lg:leading-[21px] laptop:text-[21px] laptop:leading-[25px] big:text-[30px] big:leading-[33px]'>Specializes in advanced level, pressure, and flow measurement technologies</p>
            </div>
            </Link>
            
            <Link to='https://tempsens.com/' target='_blank' className=' w-[46%] '>
            <div className='border-[#CACBD0] bg-white hover:border-[#1f6d22] hover:bg-[#e9f0e9] transition-all duration-500 ease-in-out border-[1px] w-full h-[140px] lg:h-[155px] laptop:h-[185px] big:h-[225px] px-[2%] flex flex-col justify-center rounded-md lg:rounded-lg laptop:rounded-xl big:rounded-2xl'>

                    <img 
                    src={tempsens}
                    alt="tempsens Logo" 
                    className='w-[150px] laptop:w-[200px] big:w-[230px]'/>
                    
                    <p className='text-[#63646C] md:text-[15px] md:leading-[17px] lg:text-[18px] lg:leading-[21px] laptop:text-[21px] laptop:leading-[25px] big:text-[30px] big:leading-[33px]'>Temperature sensors, furnaces, and calibration equipment</p>
                
            </div>
            </Link>
        </div>

        
        {/* Row 2 */}
        <div className='flex items-center justify-between w-full mt-[14px] lg:mt-[16px] laptop:mt-[20px] big:mt-[23px] font-halyard'>
            <Link to='https://flexco.com/' target='_blank' className='w-[32%]'>
            <div className='border-[#CACBD0] bg-white hover:border-[#1f6d22] hover:bg-[#e9f0e9] transition-all duration-500 ease-in-out border-[1px] w-full h-[140px] lg:h-[155px] laptop:h-[185px] big:h-[225px] px-[2%] flex flex-col justify-center rounded-md lg:rounded-lg laptop:rounded-xl big:rounded-2xl'>

                    <img 
                    src={flexco}
                    alt="Flexco Logo" 
                    className='w-[150px] laptop:w-[200px] big:w-[230px]'/>
                    
                    <p className='text-[#63646C] md:text-[15px] md:leading-[17px] lg:text-[18px] lg:leading-[21px] laptop:text-[21px] laptop:leading-[25px] big:text-[30px] big:leading-[33px]'>Conveyor belt solutions and maintenance systems</p>
            </div>
            </Link>
            
            <Link to='https://www.pyrotechlighting.com/' target='_blank' className='w-[32%]'>            
            <div className='border-[#CACBD0] bg-white hover:border-[#1f6d22] hover:bg-[#e9f0e9] transition-all duration-500 ease-in-out border-[1px] w-full h-[140px] lg:h-[155px] laptop:h-[185px] big:h-[225px] px-[2%] flex flex-col justify-center rounded-md lg:rounded-lg laptop:rounded-xl big:rounded-2xl'>

                    <img 
                    src={pyrotech}
                    alt="pyrotech Logo" 
                    className='w-[150px] laptop:w-[200px] big:w-[230px]'/>
                    
                    <p className='text-[#63646C] md:text-[15px] md:leading-[17px] lg:text-[18px] lg:leading-[21px] laptop:text-[21px] laptop:leading-[25px] big:text-[30px] big:leading-[33px]'>Temperature sensors, furnaces, and calibration equipment</p>
            </div>
            </Link>

             <Link to='https://rotexautomation.com/' target='_blank' className='w-[32%]'>
            <div className='border-[#CACBD0] bg-white hover:border-[#1f6d22] hover:bg-[#e9f0e9] transition-all duration-500 ease-in-out border-[1px] w-full h-[140px] lg:h-[155px] laptop:h-[185px] big:h-[225px] px-[2%] flex flex-col justify-center rounded-md lg:rounded-lg laptop:rounded-xl big:rounded-2xl'>

                    <img 
                    src={rotex}
                    alt="rotex Logo" 
                    className='w-[150px] laptop:w-[200px] big:w-[230px]'/>
                    
                    <p className='text-[#63646C] md:text-[15px] md:leading-[17px] lg:text-[18px] lg:leading-[21px] laptop:text-[21px] laptop:leading-[25px] big:text-[30px] big:leading-[33px]'>Experts in valve automation, actuation, and control systems</p>
                
            </div>
            </Link>


        </div>
        </motion.div>


    </div>
  )
}

export default AuthorizedPartners