import { NavLink } from "react-router-dom"
import { useState,useEffect } from "react";

import NavbarM from "./NavbarM";

import logo from '../assets/navbar/sitog-logo.png'

const Navbar = () => {

  const scrollToTop = () => {
    window.scrollTo(0,0);
  }

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  const navLinksClass = ({isActive}) => {
    return `inline-block transition-all duration-1000 ease-in-out hover:text-[#1F6D22] hover:font ${
      isActive ? 
      'text-[#1F6D22] -translate-y-[1px] font-semi-bold laptop:-translate-y-[2px] big:-translate-y-[4px]' : 
      'text-[#7E808A] translate-y-0'
    }`
  }

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const originalOffset = navbar?.offsetTop || 20;
    const handleScroll = () => {
      if (window.scrollY >= originalOffset) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="">
      <section className={`mt-[28px] laptop:mt-[35px] hidden md:block`} id="navbar">   
        <div 
        className={`
        ${isSticky ? 
        'w-full h-[125px] laptop:h-[165px] big:h-[200px] backdrop-blur-sm fixed  -top-4 z-[90]' 
        : 
        'h-0'} `}> </div>

        <div 
        className={`fixed z-[100] w-[92%] big:w-[70%] left-1/2 -translate-x-1/2  flex items-center justify-between text-[13px] laptop:text-[16px] big:text-[22px] py-2 px-[2%] laptop:py-3 big:py-4 bg-white transition-all border-transparent duration-500 top-[28px] laptop:top-[35px] rounded-xl ${
          isSticky ? 
          "  mt-0" :
          "  shadow-lg"
        }`}>
          <img 
          src={logo} 
          alt="Sitog Logo"
          className="w-[65px] laptop:w-[95px] big:w-[140px] "/>

          {/* Middle Links */}
          <div 
          className="font-hind space-x-4 laptop:space-x-7 big:space-x-14">
            <NavLink 
            to='/' 
            onClick={scrollToTop} className={navLinksClass}>
              Home
            </NavLink>
            
            <NavLink 
            to='/about' 
            onClick={scrollToTop} className={navLinksClass}>
              About Us
            </NavLink>
            
            <NavLink 
            to='/partners' 
            onClick={scrollToTop} className={navLinksClass}>
              Partners
            </NavLink>
              
            <NavLink 
            to='/contact' 
            onClick={scrollToTop} className={navLinksClass}>
              Contact Us
            </NavLink>
          </div>

          {/* Get a quote */}
          <button className="bg-[#FDCF17] text-[#3A3B40] hover:text-[#fdcd17] hover:bg-transparent transition-all duration-500 ease-in-out font-halyard font-medium py-[7px] laptop:py-[10px] px-[8px] laptop:px-[12px] big:py-[14px] big:px-[16px]  rounded-md">
            Get a Quote now
          </button>
        </div>
        
      </section>

      <NavbarM />
    </section>
  )
}

export default Navbar