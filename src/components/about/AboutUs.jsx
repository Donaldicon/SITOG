import AboutCarousel from "./AboutCarousel"
import AboutUsM from "./AboutUsM"

import { motion, easeInOut } from "motion/react" 

const AboutUs = () => {
  return (
    <section>
        <section 
        className='hidden md:block bg-white py-7 laptop:py-10 big:py-14 px-[3%] rounded-md lg:rounded-lg laptop:rounded-xl big:rounded-2xl shadow-sm font-halyard mt-4 lg:mt-6 laptop:mt-8 big:mt-11 overflow-hidden'>
            <p 
            className='bg-[#F0F1F3] text-[#63646C] text-[9px] lg:text-[10px] laptop:text-[12px] big:text-[15px] rounded-md py-1 px-2 laptop:py-[6px] laptop:px-[8px] big:py-[8px] big:px-[12px] laptop:rounded-lg big:rounded-xl w-[50px] lg:w-[54px] laptop:w-[62px] big:w-[82px] mb-[3px] lg:mb-[5px] laptop:mb-[5px] big:mb-[8px]'>
                About Us
            </p>
            <div 
            className='flex items-start justify-between overflow-hidden'
            >
                <h1 
                className='w-[37%] md:text-[18px] lg:text-[24px] md:leading-[24px] lg:leading-[32px] laptop:leading-[40px] laptop:text-[32px] big:text-[38px] big:leading-[50px]  font-halyard text-[#3A3B40] font-semibold'>
                    Engineering Excellence That Powers Industrial Progress
                </h1>


                <p 
                className='w-[55%] md:text-[11px] lg:text-[12px] laptop:text-[16px] big:text-[22px] font-hind font-medium text-[#4C4E54] mt-[4px] lg:mt-[6px] laptop:mt-[7px] big:mt-[8px]'>
                    Our commitment to quality, transparency, and customer satisfaction drives every project we undertake whether it’s engineering design, procurement, installation, or commissioning. At SITOG, we combine global standards with local expertise to help clients achieve operational excellence and efficiency.
                </p>
            </div>
            {/* Carousel */}
            <div>
                <AboutCarousel />
            </div>
        </section>
        <AboutUsM />
    </section>
  )
}

export default AboutUs