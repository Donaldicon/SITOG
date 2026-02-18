import { NavLink } from "react-router-dom"
import { useState,useEffect } from "react";

import logo from '../assets/navbar/sitog-logo.png'

const NavbarM = () => {

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
      'text-[#1F6D22] font-semi-bold ' : 
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

  //Navbar Open and close
  const [isOpen, setIsOpen] = useState("");

  const openBar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <section className={`mt-[20px] md:hidden`} id="navbar">   
      <div 
      className={`z-[90] transition-all duration-500 backdrop-blur-sm -top-4 ease-out w-full fixed
      ${isOpen ? 
      'h-[382px]' 
      : 'h-[122px]' } `}  > </div>
    
      <div 
      className={`fixed  z-[100] w-[93%] big:w-[72%] left-1/2 -translate-x-1/2 flex items-center justify-between text-[13px] py-3 px-[4%] bg-white transition-all border-transparent duration-500 top-[20px] ${
        isOpen ? 'rounded-t-2xl' : 'rounded-2xl'
      }
    ${
        isSticky ? 
        " mt-0" :
        "  shadow-lg"
      }`}>
        <img 
        src={logo} 
        alt="Sitog Logo"
        className="w-[65px] laptop:w-[95px] big:w-[140px] "/>

        <div 
        onClick={openBar}
        className={`flex flex-col items-center space-y-[4px] fixed right-[4%] cursor-pointer`}
        >
            <span 
            className={`h-[2px]  bg-black origin-center transition-all duration-500 ease-in-out ${
            isOpen ? 
            'w-[20px] rotate-45 translate-y-[5.2px]' 
            : 
            'w-[15px]'
            }`}/>

            <span 
            className={`h-[2px]  bg-black origin-center ${
            isOpen ? 
            'opacity-0' : 
            'w-[15px]'
            }`}/>

            <span 
            className={`h-[2px]  bg-black origin-center transition-all duration-700 ease-in-out ${
            isOpen ? 
            'w-[20px] -rotate-45 -translate-y-[6.5px]' 
            : 
            'w-[15px]'
            }`}/>
          </div>

        <div 
        onClick={openBar}
        className={`fixed top-[56.5px] left-0 bg-[#ffffff] transition-all duration-700 ease-in-out w-full overflow-hidden z-[50] shadow-2xl rounded-b-2xl ${
        isOpen ? 
        "h-[260px] opacity-100" 
        : 
        "h-0 opacity-0"}`}
        > 
            <div>
                <div 
                className={`flex items-center flex-col justify-center space-y-7 px-3 py-5 rounded-lg  font-hind text-[#848485] dark:text-[#545455] text-[12px] transition-opacity duration-500 ${
                isOpen ? 
                "opacity-100"
                :
                "opacity-0"
                }`}>
                    <NavLink 
                    to='/' 
                    onClick={scrollToTop} 
                    className={navLinksClass}>
                        Home
                    </NavLink>

                    <NavLink 
                    to='/about' 
                    onClick={scrollToTop} 
                    className={navLinksClass}>
                        About Us
                    </NavLink>

                    <NavLink 
                    to='/partners' 
                    onClick={scrollToTop} 
                    className={navLinksClass}>
                        Partners
                    </NavLink>

                    <NavLink 
                    to='/contact' 
                    onClick={scrollToTop} 
                    className={navLinksClass}>
                        Contact Us
                    </NavLink>


                    <button className="bg-[#FDCF17] text-[#3A3B40] hover:text-[#fdcd17] hover:bg-transparent transition-all duration-500 ease-in-out font-halyard font-medium py-[7px] laptop:py-[10px] px-[8px] laptop:px-[12px] big:py-[14px] big:px-[16px]  rounded-md">
                        Get a Quote now
                    </button>
                </div>     
            </div>
        </div>
      </div>
    </section>
  )
}

export default NavbarM



