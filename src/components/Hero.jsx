import { useEffect, useState } from "react";
import imageOne from "../assets/hero/img0.png";
import imageTwo from "../assets/hero/img1.png";
import imageThree from "../assets/hero/img2.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";

const images = [
  {
    img: imageOne,
    header:
      "Trusted Engineering & Industrial Solutions That Power Performance",
    text:
      "SITOG Global Links Limited delivers world-class Engineering, Procurement, and Construction (EPC) services, combining global technologies with local expertise across Oil & Gas, Power, Manufacturing, Water, and Process Industries.",
    button: "Learn More",
  },
  {
    img: imageTwo,
    header:
      "Global Engineering Standards, Local Industrial Expertise",
    text:
      "We partner with globally trusted OEMs to provide precision-engineered solutions, reliable procurement, and end-to-end proect execution for Nigeria's leading industrial operators.",
    button: "Our OEM Partners",
  },
  {
    img: imageThree,
    header:
      "Engineering Reliable Solutions for Critical Industries",
    text:
      "From instrumentation and automation to full EPC proect delivery, SITOG Global Links Limited helps industries optimize operations, improve efficiency, and achieve sustainable growth",
    button: "Request a Consultation",
  },
];

const slides = [...images, images[0]];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [transition, setTransition] = useState(true);

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
    <div className="overflow-hidden hidden md:block w-full md:h-[350px] laptop:h-[450px]  big:h-[600px] relative">
      <div
        className={`flex ${
          transition ? "transition-transform duration-1000 ease-in-out" : ""
        }`}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="w-full md:h-[350px] laptop:h-[450px] big:h-[600px] flex-shrink-0  relative"
          >
            <img
              src={slide.img}
              alt="slide"
              className="w-full md:h-[350px] laptop:h-[450px] big:h-[600px]  object-cover rounded-3xl"
            />

            <div className="w-[43%] absolute top-1/2 left-[5%] -translate-y-1/2 bg-[#dddfe0]/90 px-[3%] py-[4%] rounded-lg shadow-lg">
              <h1 className=" font-bold mb-4 md:text-[20px] lg:text-[26px] md:leading-[25px] laptop:leading-[40px] laptop:text-[33px] big:text-[40px] big:leading-[50px] text-[#3A3B40] font-halyard">
                {slide.header}
              </h1>
              <p className="mb-4 md:text-[10px] lg:text-[12px] laptop:text-[15px] big:text-[20px] text-[#4C4E54] font-hind font-medium text-left">
                {slide.text}
              </p>
            <button className="bg-[#FDCF17] text-[#3A3B40] hover:bg-[#af8a04] hover:bg-transparent transition-all duration-500 ease-in-out font-halyard font-medium space-x-[3px] laptop:space-x-[5px] py-[5px] laptop:py-[8px] px-[8px] laptop:px-[10px] big:py-[12px] big:px-[13px] rounded-md md:text-[8px] lg:text-[10px] laptop:text-[13px] flex items-center justify-start big:text-[20px]">
                <span>{slide.button}</span>
                <div className=" text-[#FDCF17] bg-black  h-[10px] w-[10px] lg:w-[13px] lg:h-[13px] laptop:w-[16px] laptop:h-[16px] big:h-[20px] big:w-[20px] rounded-full flex items-center justify-center md:text-[5px] lg:text-[6px] laptop:text-[7px] big:text-[10px] mt-[2px] laptop:mt-[1px] big:mt-[3px]">
                    <FontAwesomeIcon icon={faChevronRight}/>
                </div>
            </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
