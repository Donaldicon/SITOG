import { useEffect, useState } from "react";
import imageOne from "../assets/hero/img0M.png";
import imageTwo from "../assets/hero/img1M.png";
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

const HeroM = () => {
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
    className="overflow-hidden md:hidden w-full rounded-3xl h-[500px] relative">
      
      <div
        className={`flex ${
          transition ? "transition-transform duration-1000 ease-in-out" : ""
        }`}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="w-full h-[500px] flex-shrink-0 relative"
          >
            <img
              src={slide.img}
              alt="slide"
              className="w-full h-[500px] object-cover rounded-3xl"
            />

            <div 
            className="w-[95%] absolute top-1/2 left-[2.5%]  -translate-y-1/2 bg-[#dddfe0]/90 px-[3%] py-[8%] rounded-lg shadow-lg">
              <h1 
              className="font-bold mb-4 text-[25px] leading-[35px] text-[#3A3B40] font-halyard">
                {slide.header}
              </h1>

              <p 
              className="mb-4 text-[12px] text-[#4C4E54] font-hind font-medium text-left">
                {slide.text}
              </p>

              <button 
              className="bg-[#FDCF17] text-[#3A3B40] hover:bg-[#af8a04] transition-all duration-500 ease-in-out font-halyard font-medium space-x-[4px] py-[5px]  px-[8px]  rounded-md text-[11px] flex items-center ">
                <span>
                    {slide.button}
                </span>
                <div 
                className="text-[#FDCF17] bg-black h-[12px] w-[12px]  rounded-full flex items-center justify-center text-[7px] mt-[2px]">
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div 
      className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-[8px]">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              activeIndex === i
                ? "bg-[#FDCF17] scale-110 w-6"
                : "bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>

    </div>
  );
};

export default HeroM;
