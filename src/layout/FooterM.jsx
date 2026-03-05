import logo from '../assets/home/navbar/sitog-logo.png'
import { NavLink, Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons/faAddressCard'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons/faCopyright'


const FooterM = () => {
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
  }

    const navLinksClass = ({isActive}) => {
    return `inline-block transition-all duration-1000 ease-in-out hover:text-[#1F6D22] hover:font ${
      isActive ? 
      'text-[#FDCF17] font-semi-bold ' : 
      'text-[#E9F0E9]'
    }`
  }

  const year = new Date().getFullYear()
  return (
    <section 
    className='bg-[#1F6D22] mx-[4%] px-[3%] my-4 rounded-md font-hind py-3 md:hidden'>
      <div 
      className='flex flex-col items-start'>
        {/* Left Section */}
        <div 
        className='w-[80%]'>
          <div 
          className='w-[75px] bg-white rounded-full flex items-center justify-center'>
            <Link 
            to='/'
            onClick={scrollToTop}
            >
              <img 
              src={logo} 
              alt="SITOG logo" 
              className='w-[65px]'
              />
            </Link>
          </div>
          <p 
          className='text-[12px] text-[#E9F0E9]  font-halyard leading-[16px] font-medium  mt-[4px]'>
            SITOG Global Links Limited provides end-to-end engineering, procurement, and technical solutions across the industrial project lifecycle
          </p>
        </div>

        {/* Right Section */}
        <div 
        className='text-[12px] text-[#E9F0E9] w-[75%]  mt-[12px]'>
          {/* 1 */}
          <div 
          className='flex flex-col items-start'>
            <h1 
            className='text-[16px] text-white  font-halyard mb-[6px] '>
              Quick links
            </h1>
            <div 
            className='space-y-[3px] flex flex-col '>
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
            </div>
          </div>

          {/* 2 */}
          <div 
          className=' flex flex-col mt-[12px]'>
            <h1 
            className='text-[16px] text-white  font-halyard mb-[6px] '>
              Contact Info
            </h1>
            
            <div 
            className='space-y-[7px]  flex flex-col'>
              <div>
              <Link 
              to='mailto:sales@sitogglobal.com' target='_blank'>
                <div 
                className='flex items-center space-x-[4px]'>
                  <div 
                  className='w-[14px] h-[14px] laptop:w-[23px] laptop:h-[23px] big:w-[30px] big:h-[30px] bg-white flex items-center justify-center rounded-full'>
                    <FontAwesomeIcon 
                    icon={faEnvelope} className='text-[8px] text-[#1F6D22] laptop:text-[13px] big:text-[17px]'/>
                  </div>
                  <p className='font-hind '>
                    sales@sitogglobal.com
                  </p>
                </div>
              </Link>

              
              <Link 
              to='mailto:sitogglobal@gmail.com' target='_blank'>
                  <p className='font-hind  pl-[18px]'>
                    sitogglobal@gmail.com
                  </p>
              </Link>
              </div>



              <div 
              className='flex  space-x-[4px] laptop:space-x-[6px] big:space-x-[8px]'>
                <div 
                className='w-[14px] h-[14px] laptop:w-[23px] laptop:h-[23px] big:w-[30px] big:h-[30px] bg-white flex items-center justify-center rounded-full'>
                  <FontAwesomeIcon 
                  icon={faAddressCard} 
                  className='text-[8px] text-[#1F6D22] laptop:text-[13px] big:text-[17px]'/>
                </div>
                <p className=''>35Isale Ariya Street, Opposite<br /> 
                Ori Ade Hotel, Dalemo, Sango<br /> 
                Ota, Ogun State, Nigeria.</p>
              </div>

              <div 
              className='flex flex-col  space-y-[3px] '>
                <div className='flex space-x-[3px]  items-top'>
                    <div 
                    className='flex'>
                        <div 
                        className='w-[14px] h-[14px] laptop:w-[23px] laptop:h-[23px] big:w-[30px] big:h-[30px] bg-white flex items-center justify-center rounded-full mt-[1px]'>
                        <FontAwesomeIcon 
                        icon={faPhone} 
                        className='text-[8px] text-[#1F6D22] laptop:text-[13px] big:text-[17px]'/>
                        </div>
                    </div>

                    
                    <div 
                    className='flex flex-col'>
                        <Link 
                        to='tel:+234-903-422-4789'
                        target='_blank'>
                            +234-903-422-4789
                        </Link>

                        <Link 
                        to='tel:+234-812-505-3956' 
                        target='_blank'>
                        +234-812-505-3956
                        </Link>

                        <Link 
                        to='tel:+234-913-740-8480'
                        target='_blank'>
                        +234-913-740-8480
                        </Link>

                        <Link 
                        to='tel:+234-704-740-9321' 
                        target='_blank'>
                        +234-704-740-9321
                        </Link>
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div 
          className='flex flex-col mt-[12px]'>
            <h1 
            className='text-[16px] text-white  font-halyard mb-[6px]  '>
              Follow Us
            </h1>
            <div 
            className='space-y-[3px] flex flex-col '>
              <Link to='https://www.linkedin.com/company/sitog-global-links-limited/' target='_blank'>
                <div 
                className='flex items-center space-x-[4px]'>
                  <p>LinkedIn</p>
                  <div 
                  className='w-[14px] h-[14px]  bg-white flex items-center justify-center rounded-full -mt-[2px]'>
                    <FontAwesomeIcon 
                    icon={faLinkedin} 
                    className='text-[8px] text-[#1F6D22] '/>
                  </div>
                </div>
              </Link>
          
              <Link to='https://web.facebook.com/sitog.links' target='_blank'>
                <div 
                className='flex items-center space-x-[4px] '>
                  <p>Facebook</p>
                  <div 
                  className='w-[14px] h-[14px]   bg-white flex items-center justify-center rounded-full -mt-[2px]'>
                    <FontAwesomeIcon 
                    icon={faFacebookF} 
                    className='text-[8px] text-[#1F6D22] '/>
                  </div>
                </div>
              </Link>

              {/* <Link>
                <div 
                className='flex items-center space-x-[4px]'>
                  <p>X</p>
                  <div 
                  className='w-[14px] h-[14px]  bg-white flex items-center justify-center rounded-full -mt-[2px]'>
                    <FontAwesomeIcon 
                    icon={faXTwitter} 
                    className='text-[8px] text-[#1F6D22] '/>
                  </div>
                </div>
              </Link> */}

            


            </div>
          </div>
        </div>
      </div>

        
      <button 
      onClick={scrollToTop}
      className="mt-[12px] bg-[#FDCF17] text-[#3A3B40] hover:bg-[#af8a04] transition-all duration-500 ease-in-out font-halyard w-full h-[30px] font-medium space-x-[4px] rounded-[4px] text-[11px] flex items-center justify-center">
        <span>Back to Top</span>
        <div 
        className=" text-[#FDCF17] bg-black  h-[10px] w-[10px]  rounded-full flex items-center justify-center text-[5px] mt-[1px] laptop:mt-[2px] big:mt-[3px]">
            <FontAwesomeIcon icon={faArrowUp}/>
        </div>
      </button>

        <p 
        className='text-[#E9F0E9] text-[12px] font-bold text-center mt-[12px]'>
          Work Time: {'\u2009'}
          <span className='text-[#FDCF17]'>
            Monday - Friday 8am-5pm</span>
        </p>


      <div 
      className='flex items-center justify-between text-[11px]  font-hind mt-[12px]'>
        <div 
        className='flex items-center space-x-[4px] '>
          <div 
          className='w-[14px] h-[14px] bg-white flex items-center justify-center rounded-full'>
            <FontAwesomeIcon 
            icon={faCopyright} 
            className='text-[8px] text-[#1F6D22]'/>
          </div>
          <p 
          className=' text-[#E9F0E9] font-halyard '>
            SITOG Global Links Ltd {'\u2009'}
            <span>{year}</span>
          </p>
        </div>
        
        <p 
        className='text-[#98BC99] underline'>
          General Terms and Conditions
        </p>
      </div>

    </section>
  )
}

export default FooterM