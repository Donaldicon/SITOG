import { useState } from 'react'

import ot1 from '../../assets/about/our-team/OT1.png'
import ot2 from '../../assets/about/our-team/OT2.png'
import ot3 from '../../assets/about/our-team/OT3.png'
import ot4 from '../../assets/about/our-team/OT4.jpeg'
import ot5 from '../../assets/about/our-team/OT5.jpeg'
import ot6 from '../../assets/about/our-team/OT6.png'
import ot7 from '../../assets/about/our-team/OT7.jpeg'
import ot8 from '../../assets/about/our-team/OT8.jpeg'
import ot9 from '../../assets/about/our-team/OT9.jpeg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'

import { Link } from "react-router-dom"


const OurTeamCarousel = () => {
    const slides = [
        {
        image: ot1,
        position: "Executive Director",
        name: "Ajayi Grace",
        mal: 'info@sitogglobal.com',
        phone: '0803 236 0188',
        },

        {
        image: ot2,
        position: "HR/ Admin Manager",
        name: "Adesanwo Precious",
        mal: 'HR@sitogglobal.com ',
        phone: '0909 775 3381',
        },

        {
        image: ot3,
        position: "Team Lead (Engineering & Sales)",
        name: "Jeremiah Madibuke",
        mal: 'jeremiah.madibuke@sitogglobal.com',
        phone: '0812 505 3956',
        },
        
        {
        image: ot4,
        position: "Accounting Officer",
        name: "Samuel Ogbole",
        mal: 'samuel.ogbole@sitogglobal.com',
        phone: ' 0703 012 5547',
        },
        
        {
        image: ot5,
        position: "External Sales Engineer",
        name: "Andre Amanze",
        mal: 'andre.amanze@sitogglobal.com',
        phone: '0913 740 8480',
        },
        
        {
        image: ot6,
        position: "Internal Sales Engineer",
        name: "Pesilade Lucky",
        mal: 'pesilade.lucky@sitogglobal.com',
        phone: ' 0704 740 9321',
        },
        
        {
        image: ot7,
        position: "Internal Sales Engineer",
        name: "Oladipupo Iyiola",
        mal: ' oladipupo.iyiola@sitogglobal.com',
        phone: '0905 141 1840',
        },
        
        {
        image: ot8,
        position: "Technical Sales Engineer",
        name: "Esomeonu Everistus",
        mal: ' everistus.esomeonu@sitogglobal.com',
        phone: '09072777749',
        },
        
        {
        image: ot9,
        position: "Technical Sales Engineer",
        name: "Oluwaseun Ajayi",
        mal: 'oluwaseun.ajayi@sitogglobal.com',
        phone: '09034224789',
        },

    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < slides.length - 1) {
        setCurrentIndex(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
        }
    };

    const activeIndex = currentIndex === slides.length ? 0 : currentIndex;

  return (
    <div>
        <div className="overflow-hidden relative md:pb-9 laptop:pb-16 big:pb-20">
            <div
            className="w-full flex transition-transform duration-500 ease-in-out"
            style={{
                transform: `translateX(-${currentIndex * 100}%)`,
            }}
            >
            {slides.map((slide, index) => (
                <div
                key={index}
                className="w-full flex-shrink-0 flex  flex-col items-center overflow-hidden justify-center"
                >
                    <h3 className='text-[#1F6D22]  font-semibold font-halyard md:text-[18px] lg:text-[22px] laptop:text-[30px] big:text-[38px] mb-[10px] lg:mb-[10px] laptop:mb-[12px] big:mb-[16px]'>
                        {slide.position}
                    </h3>

                    <div className='border-[#FEE994] border-[5px] laptop:border-[7px] big:border-[9px] p-[5px] laptop:p-[8px]  rounded-md lg:rounded-lg laptop:rounded-xl big:rounded-2xl overflow-hidden'>
                        <img
                            src={slide.image}
                            alt={slide.name + slide.position}
                            className=" h-[350px] lg:h-[420px] laptop:h-[520px] big:h-[620px] w-[370px] lg:w-[400px] laptop:w-[480px] big:w-[560px] object-cover object-top rounded-md lg:rounded-lg laptop:rounded-xl big:rounded-2xl "
                        />
                    </div>

                    <h2 className="text-[#3A3B40]  font-semibold font-halyard md:text-[18px] lg:text-[22px] laptop:text-[30px] big:text-[38px] mt-[4px] px-[4%]">
                        {slide.name}
                    </h2>

                    <div className="md:text-[11px] lg:text-[12px] laptop:text-[16px] big:text-[22px] mt-[4px] lg:mt-[7px] laptop:mt-[10px] big:mt-[14px] text-[#63646C] break-all text-center flex items-center justify-center">
                        <Link to={`mailto:${slide.mal}`} target='_blank'>
                        <FontAwesomeIcon 
                        icon={faEnvelope}
                        className='text-[8px] laptop:text-[13px] big:text-[17px] mr-[2px] lg:mr-[3px] laptop:mr-[4px] big:mr-[6px]'
                        />
                        {slide.mal}
                        </Link>
                    </div>

                    <div className="md:text-[11px] lg:text-[12px] laptop:text-[16px] big:text-[22px] mt-[4px] lg:mt-[7px] laptop:mt-[10px] big:mt-[14px] text-[#63646C]">
                        <Link to={`tel:${slide.phone}`} target='blank'>
                        <FontAwesomeIcon 
                        icon={faPhone}
                        className='text-[8px] laptop:text-[13px] big:text-[17px] mr-[2px] lg:mr-[3px] laptop:mr-[4px] big:mr-[6px]'
                        />
                        {slide.phone}
                        </Link>
                    </div>
                </div>
            ))}
            </div>

            {/* Navigation */}
            <div className="absolute top-1/2 -translate-y-1/2 flex w-full items-center justify-between mt-3 px-[10%] lg:px-[12%] laptop:px-[17%] big:px-[20%]">
                <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`text-[8px] h-[14px] w-[14px] lg:text-[10px] lg:h-[17px] lg:w-[17px] laptop:h-[22px] laptop:w-[22px] laptop:text-[13px] big:text-[17px] big:h-[28px] big:w-[28px] rounded-full bg-black text-white ${
                    currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                }`}
                >
                <FontAwesomeIcon icon={faChevronLeft}/>
                </button>

                <button
                onClick={handleNext}
                disabled={currentIndex === slides.length - 1}
                className={`text-[8px] h-[14px] w-[14px] lg:text-[10px] lg:h-[17px] lg:w-[17px] laptop:h-[22px] laptop:w-[22px] laptop:text-[13px] big:text-[17px] big:h-[28px] big:w-[28px] rounded-full bg-black text-white ${
                    currentIndex === slides.length - 1
                    ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                }`}
                >
                    <FontAwesomeIcon icon={faChevronRight}/>
                </button>
            </div>

      <div 
      className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-[5px] laptop:space-x-[7px] big:space-x-[12px] bg-[#1F6D22] px-3 laptop:px-4 laptop:py-2 py-1 big:px-6 big:py-3 rounded-full">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={` rounded-full transition-all duration-300 ${
              activeIndex === i
                ? "bg-[#FDCF17] scale-110 h-2 laptop:h-3 big:h-5 w-4 laptop:w-7 big:w-10"
                : "bg-[#BAD2BA] h-2 w-2 laptop:h-3 laptop:w-3 big:h-5 big:w-5 "
            }`}
          />
        ))}
      </div>
            
        </div>
    </div>
  )
}

export default OurTeamCarousel