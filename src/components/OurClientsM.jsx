
import cOne from '../assets/ourclients/C1.png'
import cTwo from '../assets/ourclients/C2.png'
import cThree from '../assets/ourclients/C3.png'
import cThree2 from '../assets/ourclients/C32.png'
import cFour from '../assets/ourclients/C4.png'
import cFive from '../assets/ourclients/C5.png'
import cSix from '../assets/ourclients/C6.png'
import cSeven from '../assets/ourclients/C7.png'

import { motion, easeInOut } from 'motion/react'

import { useEffect, useRef } from "react";

const OurClientsM = () => {
  const containerRef = useRef(null);

  const images = [
    { src: cOne },{src:cThree2}, { src: cTwo }, { src: cFour }, { src: cFive }, { src: cSix },{ src: cSeven },
    { src: cOne },{src:cThree2}, { src: cTwo }, { src: cFour }, { src: cFive }, { src: cSix },{ src: cSeven },
    { src: cOne },{src:cThree2}, { src: cTwo }, { src: cFour }, { src: cFive }, { src: cSix },{ src: cSeven },
    { src: cOne },{src:cThree2}, { src: cTwo }, { src: cFour }, { src: cFive }, { src: cSix },{ src: cSeven },
    { src: cOne },{src:cThree2}, { src: cTwo }, { src: cFour }, { src: cFive }, { src: cSix },{ src: cSeven },
    { src: cOne },{src:cThree2}, { src: cTwo }, { src: cFour }, { src: cFive }, { src: cSix },{ src: cSeven },
    { src: cOne },{src:cThree2}, { src: cTwo }, { src: cFour }, { src: cFive }, { src: cSix },{ src: cSeven },
    { src: cOne },{src:cThree2}, { src: cTwo }, { src: cFour }, { src: cFive }, { src: cSix },{ src: cSeven },
    { src: cOne },{src:cThree2}, { src: cTwo }, { src: cFour }, { src: cFive }, { src: cSix },{ src: cSeven },
    { src: cOne },{src:cThree2}, { src: cTwo }, { src: cFour }, { src: cFive }, { src: cSix },{ src: cSeven },
    { src: cOne },{src:cThree2}, { src: cTwo }, { src: cFour }, { src: cFive }, { src: cSix },{ src: cSeven },
    { src: cOne },{src:cThree2}, { src: cTwo }, { src: cFour }, { src: cFive }, { src: cSix },{ src: cSeven },
    { src: cOne },{src:cThree2}, { src: cTwo }, { src: cFour }, { src: cFive }, { src: cSix },{ src: cSeven },
    { src: cOne },{src:cThree2}, { src: cTwo }, { src: cFour }, { src: cFive }, { src: cSix },{ src: cSeven },
    { src: cOne },{src:cThree2}, { src: cTwo }, { src: cFour }, { src: cFive }, { src: cSix },{ src: cSeven },
    { src: cOne },{src:cThree2}, { src: cTwo }, { src: cFour }, { src: cFive }, { src: cSix },{ src: cSeven },
  ];

  const slides = [...images, ...images];

  useEffect(() => {
    const container = containerRef.current;
    let animationFrame;
    let scrollAmount = 0;

    const scroll = () => {
      scrollAmount += 0.5;

      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
      }

      container.scrollLeft = scrollAmount;
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div 
    className="md:hidden py-14 font-halyard">
      <p 
      className="bg-[#F0F1F3] text-[#63646C] text-[10px] rounded-lg py-2 px-3 w-fit mx-auto">
        Our Clients
      </p>
      <motion.div 
      initial={{opacity:0, x:0}}
      whileInView={{opacity:100, x:0}}
      transition={{duration:2, ease:easeInOut}}
      viewport={{once:true}}
      >
        <h1 
        className="text-[#1C631F] text-center font-bold mt-2 text-[25px] leading-[30px]">
          Trusted by Leading Industrial
          <br />
          Companies in Nigeria
        </h1>
      </motion.div>

      <div
      ref={containerRef}
      className="overflow-hidden whitespace-nowrap mt-8 pb-4"
      >
        <div 
        className="flex gap-6">
          {slides.map((item, i) => (
            <div
              key={i}
              className={`w-[150px] h-[100px] flex-shrink-0 bg-white py-5 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 ease-in-out `}
            >
              <img
                src={item.src}
                alt={`client-${i}`}
                className={`w-full h-full object-contain transition-all ease-in-out duration-500 px-2`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClientsM;
