import { useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight'

import OS1 from '../assets/ourservices/OS1.png'
import OS2 from '../assets/ourservices/OS2.png'
import OS3 from '../assets/ourservices/OS3.png'

import { motion, easeInOut } from 'motion/react'

const images = [
  {
    img: OS1,
    text:(
    <>
        Engineering <br/> Service
    </>
    )  
  },
  {
    img: OS2,
    text:(
    <>
        Procurement <br /> Management
    </>
    )  
  },
  {
    img: OS3,
        text:(
    <>
        Project Execution <br /> & Support
    </>
    )  
      
  },
];
const slides = [...images, images[0]];

const OurServicesM = () => {
      const [index, setIndex] = useState(0);
      const [transition, setTransition] = useState(true);
    
      const activeIndex = index === images.length ? 0 : index;
    
      useEffect(() => {
        const interval = setInterval(() => {
          setIndex((prev) => prev + 1);
        }, 3000);
    
        return () => clearInterval(interval);
      }, []);
    
      useEffect(() => {
        if (index === slides.length - 1) {
          const timeout = setTimeout(() => {
            setTransition(false);
            setIndex(0);
    
            setTimeout(() => {
              setTransition(true);
            }, 50);
          }, 1000);
    
          return () => clearTimeout(timeout);
        }
      }, [index]);
  return (
    <div 
    className='md:hidden bg-white px-[4%] py-3 overflow-hidden'>
        <p 
        className="bg-[#F0F1F3] text-[#63646C] text-[10px] rounded-lg py-2 px-3 w-fit">
            Our Services
        </p>
        <motion.div 
        initial={{opacity:0, x:30}}
        whileInView={{opacity:100, x:0}}
        transition={{duration:2, ease:easeInOut}}
        viewport={{once:true}}
        >
            <h1 
            className="text-[#3A3B40] font-bold mt-2 text-[21px] leading-[28px] phone:text-[25px]  phone:leading-[30px]">
                Comprehensive Engineering <br />& Industrial Solutions
            </h1>
        </motion.div>

        <motion.div 
        initial={{opacity:0, x:-30}}
        whileInView={{opacity:100, x:0}}
        transition={{duration:2, ease:easeInOut}}
        viewport={{once:true}}
        >
            <p 
            className='my-4 text-[12px] text-[#4C4E54]'>At SITOG, quality, transparency, and customer satisfaction drive everything we do. We are committed to building long-term partnerships through integrity, technical excellence, innovation, and safety, ensuring every project meets international standards and delivers measurable value.
            </p>
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

        <div 
        className="overflow-hidden md:hidden w-full rounded-xl h-[400px] otherPhones:h-[500px] relative mt-4">
              
              <div
                className={`flex ${
                  transition ? "transition-transform duration-1000 ease-in-out" : ""
                }`}
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {slides.map((slide, i) => (
                  <div
                    key={i}
                    className="w-full h-[400px] otherPhones:h-[500px] flex-shrink-0 relative"
                  >
                    <img
                      src={slide.img}
                      alt="slide"
                      className="w-full h-[400px] otherPhones:h-[500px] object-cover rounded-xl"
                    />
        
                    <div 
                    className=" absolute bottom-3  px-[3%] text-white">
                      <h1 
                      className="font-bold text-[26px] leading-[28px] font-halyard">
                        {slide.text}
                      </h1>
                    </div>
                  </div>
                ))}
              </div>
        
            </div>
    </div>
  )
}

export default OurServicesM