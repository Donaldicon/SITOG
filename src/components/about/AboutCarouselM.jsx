import { useState } from "react";

import au1 from '../../assets/about/about-carousel/AU1.png'
import au2 from '../../assets/about/about-carousel/AU2.png'
import au3 from '../../assets/about/about-carousel/AU3.png'
import au4 from '../../assets/about/about-carousel/AU4.png'
import au5 from '../../assets/about/about-carousel/AU5.png'
import au7 from '../../assets/about/about-carousel/AU7.png'
import au8 from '../../assets/about/about-carousel/AU8.png'
import au9 from '../../assets/about/about-carousel/AU9.png'
import au10 from '../../assets/about/about-carousel/AU10.png'
import au11 from '../../assets/about/about-carousel/AU11.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";



const AboutCarouselM = () => {
  const images = [au1, au2, au3, au4, au7, au5, au8, au9, au10, au11 ];

  const visibleCount = 1;
  const [currentIndex, setCurrentIndex] = useState(0);

 
  const maxIndex = Math.max(images.length - visibleCount, 0);

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <div className="w-full">

      {/* Carousel Window */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0"
            >
              <img
                src={img}
                alt={`client-${index}`}
                className="w-full object-cover object-left-top h-[365px] otherPhones:h-[490px] rounded-md"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`text-[5px]  h-[10px] w-[10px]  rounded-full bg-black text-white ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          <FontAwesomeIcon icon={faChevronLeft}/>
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
          className={`text-[5px] h-[10px] w-[10px] rounded-full bg-black text-white ${
            currentIndex >= maxIndex ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
        >
            <FontAwesomeIcon icon={faChevronRight}/>
        </button>
      </div>
    </div>
  );
};

export default AboutCarouselM;