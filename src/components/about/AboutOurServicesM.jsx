import aos1 from '../../assets/about/our-services/AOS1.png'
import aos2 from '../../assets/about/our-services/AOS2.png'
import aos3 from '../../assets/about/our-services/AOS3.png'

import { useState } from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight'

const AboutOurServicesM = () => {
    const slides = [
        {
        image: aos1,
        title: "Engineering Services",
        description:
            "We deliver mechanical and electrical engineering services, instrumentation and automation supply and commissioning, process system optimization, and on-site calibration of industrial instruments to international standards.",
        },
        {
        image: aos2,
        title: "Procurement Management",
        description:
            "Strategic sourcing, supply, and logistics support for engineering materials, spare parts, and equipment from our OEM partners.",
        },
        {
        image: aos3,
        title: "Project Execution & Support",
        description:
            "We provide complete project execution and technical support from EPC management and commissioning to maintenance and training.",
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
  return (
    <section>
        <div className='flex md:hidden flex-col items-center bg-white py-5 laptop:py-7 big:py-10 rounded-md lg:rounded-lg laptop:rounded-xl big:rounded-2xl'>
            <p 
            className='bg-[#F0F1F3] text-[#63646C] text-[10px] rounded-lg py-2 px-3 '>
                Our Services
            </p>
            <h1
            className='text-center text-[#3A3B40] font-bold mt-1 text-[18px] leading-[25px] phone:text-[22px] phone:leading-[28px] px-[2%] mb-[15px]'
            >
                We Support Industrial Projects with Expert  Engineering, Reliable Procurement, and  Efficient Execution.
            </h1>


            <div className="w-full  mx-[3%] bg-[#1F6D22] rounded-md pb-2">

            {/* Slide Window */}
            <div className="overflow-hidden relative">
                <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
                >
                {slides.map((slide, index) => (
                    <div
                    key={index}
                    className="w-full flex-shrink-0 "
                    >
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-[190px] phone:h-[220px] otherPhones:h-[300px] object-right-top object-cover rounded-t-md mb-6"
                    />

                    <h2 className="text-white text-[25px] font-medium mb-[2px] px-[4%]">
                        {slide.title}
                    </h2>

                    <p className="text-[#BAD2BA] text-[12px] px-[4%]">
                        {slide.description}
                    </p>
                    </div>
                ))}
                </div>
            </div>

            </div>

            
            {/* Navigation */}
            <div className="flex w-full justify-between mt-3 ">
                <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`text-[10px] w-[18px] h-[18px]   rounded-full bg-black text-white ${
                    currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                }`}
                >
                <FontAwesomeIcon icon={faChevronLeft}/>
                </button>

                <button
                onClick={handleNext}
                disabled={currentIndex === slides.length - 1}
                className={`text-[10px] w-[18px] h-[18px]  rounded-full bg-black text-white ${
                    currentIndex === slides.length - 1
                    ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                }`}
                >
                    <FontAwesomeIcon icon={faChevronRight}/>
                </button>
            </div>




        </div>
    </section>
  )
}

export default AboutOurServicesM