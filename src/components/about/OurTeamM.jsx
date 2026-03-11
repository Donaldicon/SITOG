import { useState } from "react";

import ot1 from "../../assets/about/our-team/OT1.png";
import ot2 from "../../assets/about/our-team/OT2.png";
import ot3 from "../../assets/about/our-team/OT3.png";
import ot4 from "../../assets/about/our-team/OT4.jpeg";
import ot5 from "../../assets/about/our-team/OT5.jpeg";
import ot6 from "../../assets/about/our-team/OT6.png";
import ot7 from "../../assets/about/our-team/OT7.jpeg";
import ot8 from "../../assets/about/our-team/OT8.jpeg";
import ot9 from "../../assets/about/our-team/OT9.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";

import { Link } from "react-router-dom";

const OurTeamM = () => {

  const slides = [
    {
      image: ot1,
      position: "Executive Director",
      name: "Ajayi Grace",
      mal: "info@sitogglobal.com",
      phone: "0803 236 0188",
    },
    {
      image: ot2,
      position: "HR/ Admin Manager",
      name: "Adesanwo Precious",
      mal: "HR@sitogglobal.com",
      phone: "0909 775 3381",
    },
    {
      image: ot3,
      position: "Team Lead (Engineering & Sales)",
      name: "Jeremiah Madibuke",
      mal: "jeremiah.madibuke@sitogglobal.com",
      phone: "0812 505 3956",
    },
    {
      image: ot4,
      position: "Accounting Officer",
      name: "Samuel Ogbole",
      mal: "samuel.ogbole@sitogglobal.com",
      phone: "0703 012 5547",
    },
    {
      image: ot5,
      position: "External Sales Engineer",
      name: "Andre Amanze",
      mal: "andre.amanze@sitogglobal.com",
      phone: "0913 740 8480",
    },
    {
      image: ot6,
      position: "Internal Sales Engineer",
      name: "Pesilade Lucky",
      mal: "pesilade.lucky@sitogglobal.com",
      phone: "0704 740 9321",
    },
    {
      image: ot7,
      position: "Internal Sales Engineer",
      name: "Oladipupo Iyiola",
      mal: "oladipupo.iyiola@sitogglobal.com",
      phone: "0905 141 1840",
    },
    {
      image: ot8,
      position: "Technical Sales Engineer",
      name: "Esomeonu Everistus",
      mal: ' everistus.esomeonu@sitogglobal.com',
      phone: '0907 277 7749',
    },
    {
      image: ot9,
      position: "Technical Sales Engineer",
      name: "Oluwaseun Ajayi",
      mal: 'oluwaseun.ajayi@sitogglobal.com',
      phone: '0903 422 4789',
    },
  ];

  const [visibleCount, setVisibleCount] = useState(3);

  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + 2, slides.length));
  };

  const handleSeeLess = () => {
    setVisibleCount((prev) => Math.max(prev - 2, 3));
  };

  return (
    <div className="w-full md:hidden  font-hind flex items-center flex-col rounded-md bg-white py-5 mb-4">
        <p 
        className="bg-[#F0F1F3] text-[#63646C] text-[10px] rounded-lg py-2 px-3 w-fit  text-center">
            Our Team
        </p>

        <h1 
        className="text-[#3A3B40] font-bold mt-1 mb-3 text-[21px] leading-[22px] phone:text-[25px] text-center  phone:leading-[26px]">
            Experienced Professionals  <br />Leading Every Project
        </h1>

      {/* Team Grid */}
      <div className="grid grid-cols-1 gap-5">

        {slides.slice(0, visibleCount).map((slide, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <h3 className="text-[#1F6D22] text-[17px] font-semibold mb-2 font-halyard">
              {slide.position}
            </h3>

            <div className="border-[#FEE994] border-[5px] p-[7px] rounded-xl overflow-hidden">
              <img
                src={slide.image}
                alt={slide.name}
                className="h-[350px] lg:h-[420px] laptop:h-[520px] w-[300px] otherPhones:w-[340px] object-cover object-top rounded-xl"
              />
            </div>


            <h2 className="text-[#3A3B40] font-semibold text-[19px] mt-[4px] font-halyard">
              {slide.name}
            </h2>

            <div className="text-[#63646C] text-[12px] flex items-center mt-1 gap-1 break-all">
              <Link to={`mailto:${slide.mal}`}  target='_blank'>
              <FontAwesomeIcon icon={faEnvelope} />
              {slide.mal}
              </Link>
            </div>

            <div className="text-[#63646C] text-[12px] flex items-center gap-1 mt-1">
              <Link to={`tel:${slide.phone}`}  target='blank'>
              <FontAwesomeIcon icon={faPhone} />
              {slide.phone}
              </Link>
            </div>

          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-5">

        {visibleCount < slides.length && (
          <button
            onClick={handleViewMore}
            className="bg-[#1F6D22] text-white px-6 py-2 rounded-md hover:opacity-90"
          >
            View More
          </button>
        )}

        {visibleCount > 3 && (
          <button
            onClick={handleSeeLess}
            className="border border-[#1F6D22] text-[#1F6D22] px-6 py-2 rounded-md"
          >
            See Less
          </button>
        )}

      </div>

    </div>
  );
};

export default OurTeamM;