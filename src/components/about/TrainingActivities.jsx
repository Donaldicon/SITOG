
import ta1 from '../../assets/about/training-activities/TA1.png'
import ta2 from '../../assets/about/training-activities/TA2.png'
import ta3 from '../../assets/about/training-activities/TA3.png'
import ta4 from '../../assets/about/training-activities/TA4.png'
import ta5 from '../../assets/about/training-activities/TA5.png'
import ta6 from '../../assets/about/training-activities/TA6.png'
import ta7 from '../../assets/about/training-activities/TA7.png'
import ta8 from '../../assets/about/training-activities/TA8.png'
import ta9 from '../../assets/about/training-activities/TA9.png'
import ta10 from '../../assets/about/training-activities/TA10.png'


import { useEffect, useRef } from "react";

const TrainingActivities = () => {
  const containerRef = useRef(null);

  const images = [
    { src: ta1 },{src:ta2},{ src: ta3 },{ src: ta4 },{ src: ta5 },{ src: ta6 },{ src: ta7 },{ src: ta8 },{ src: ta9 },{ src: ta10 },
    { src: ta1 },{src:ta2},{ src: ta3 },{ src: ta4 },{ src: ta5 },{ src: ta6 },{ src: ta7 },{ src: ta8 },{ src: ta9 },{ src: ta10 },
    { src: ta1 },{src:ta2},{ src: ta3 },{ src: ta4 },{ src: ta5 },{ src: ta6 },{ src: ta7 },{ src: ta8 },{ src: ta9 },{ src: ta10 },
    { src: ta1 },{src:ta2},{ src: ta3 },{ src: ta4 },{ src: ta5 },{ src: ta6 },{ src: ta7 },{ src: ta8 },{ src: ta9 },{ src: ta10 },
    { src: ta1 },{src:ta2},{ src: ta3 },{ src: ta4 },{ src: ta5 },{ src: ta6 },{ src: ta7 },{ src: ta8 },{ src: ta9 },{ src: ta10 },
    { src: ta1 },{src:ta2},{ src: ta3 },{ src: ta4 },{ src: ta5 },{ src: ta6 },{ src: ta7 },{ src: ta8 },{ src: ta9 },{ src: ta10 },
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
    className="py-7 font-halyard">
        <h1 
        className="text-[#1C631F] text-center font-bold text-[25px] md:text-[22px] lg:text-[27px] laptop:text-[38px] big:text-[45px] -mb-[5px]  laptop:-mb-[7px] font-halyard">
          Training Activities
        </h1>

      <div
      ref={containerRef}
      className="overflow-hidden whitespace-nowrap py-5"
      >
        <div 
        className="flex gap-[7px] laptop:gap-[14px] big:gap-6">
          {slides.map((item, i) => (
            <div
              key={i}
              className={`flex-shrink-0  rounded-md shadow-sm  transition-all duration-300 ease-in-out `}
            >
              <img
                src={item.src}
                alt={`client-${i}`}
                className={`w-[120px] h-[130px] otherPhones:w-[140px] otherPhones:h-[160px] md:h-[250px] md:w-[200px] lg:w-[230px] lg:h-[300px] laptop:w-[340px] laptop:h-[350px] big:w-[420px] big:h-[450px]  object-cover object-top hover:scale-[1.02] laptop:hover:scale-105 transition-all ease-in-out duration-500 rounded-md lg:rounded-lg laptop:rounded-xl big:rounded-2xl`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingActivities;
