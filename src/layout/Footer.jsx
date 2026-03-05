import logo from '../assets/home/navbar/sitog-logo.png'
import { NavLink,Link } from 'react-router-dom'

import FooterM from './FooterM'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons/faAddressCard'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons/faCopyright'


const Footer = () => {
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
    <section>
      <section 
      className='bg-[#1F6D22] mx-[4%] big:mx-[15%] px-[3%] my-4 lg:my-6 laptop:my-8 big:my-11 rounded-md lg:rounded-lg laptop:rounded-xl big:rounded-2xl font-hind py-3 lg:py-4 laptop:py-6 big:py-9 hidden md:block'>
        <div 
        className='flex items-start justify-between'>
          {/* Left Section */}
          <div 
          className='w-[30%]'>
            <div 
            className='w-[75px] laptop:w-[110px] big:w-[160px] bg-white rounded-full flex items-center justify-center'>
              <Link 
              to='/'
              onClick={scrollToTop}
              >
                <img 
                src={logo} 
                alt="SITOG logo" 
                className='w-[65px] laptop:w-[95px] big:w-[140px]'
                />
              </Link>
            </div>
            <p 
            className='text-[9px] laptop:text-[12px] big:text-[15px] text-[#E9F0E9]  font-halyard leading-[15px] laptop:leading-[20px] big:leading-[27px] w-[75%] mt-[4px] lg:mt-[6px] laptop:mt-[9px] big:mt-[14px]'>
              SITOG Global Links Limited provides end-to-end engineering, procurement, and technical solutions across the industrial project lifecycle
            </p>
          </div>

          {/* Right Section */}
          <div 
          className='text-[9px] laptop:text-[12px] big:text-[15px] text-[#E9F0E9] w-[75%] flex items-start -mt-1'>
            {/* 1 */}
            <div 
            className='w-[34%] flex flex-col items-end '>
              <h1 
              className='md:text-[16px] lg:text-[18px] laptop:text-[22px] big:text-[28px] text-white  font-halyard mb-[6px] laptop:mb-[12px] big:mb-[16px] '>
                Quick links
              </h1>
              <div 
              className='space-y-[6px] laptop:space-y-[15px] big:space-y-4 flex flex-col items-end'>
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
            className='w-[34%] flex flex-col items-end'>
              <h1 
              className='md:text-[16px] lg:text-[18px] laptop:text-[22px] big:text-[28px] text-white  font-halyard mb-[6px] laptop:mb-[12px] big:mb-[16px] '>
                Contact Info
              </h1>
              
              <div 
              className='space-y-2 laptop:space-y-[15px] big:space-y-4 flex flex-col items-end'>
                <Link 
                to='mailto:sales@sitogglobal.com' target='_blank'>
                  <div 
                  className='flex items-center space-x-[4px] laptop:space-x-[6px] big:space-x-[8px]'>
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
                    <p className='font-hind'>
                      sitogglobal@gmail.com
                    </p>
                </Link>



                <div 
                className='flex items-start space-x-[4px] laptop:space-x-[6px] big:space-x-[8px]'>
                  <div 
                  className='w-[14px] h-[14px] laptop:w-[23px] laptop:h-[23px] big:w-[30px] big:h-[30px] bg-white flex items-center justify-center rounded-full -mt-[1px]'>
                    <FontAwesomeIcon 
                    icon={faAddressCard} 
                    className='text-[8px] text-[#1F6D22] laptop:text-[13px] big:text-[17px]'/>
                  </div>
                  <p className='font-hind  text-end '>35Isale Ariya Street, Opposite<br /> 
                  Ori Ade Hotel, Dalemo, Sango<br /> 
                  Ota, Ogun State, Nigeria.</p>
                </div>

                <div 
                className='flex flex-col items-end space-y-[3px] laptop:space-y-[5px] big:space-y-[8px]'>
                  <Link 
                  to='tel:+234-903-422-4789'
                  target='_blank'>
                    <div 
                    className='flex items-center  space-x-[4px] laptop:space-x-[6px] big:space-x-[8px]'>
                      <div 
                      className='w-[14px] h-[14px] laptop:w-[23px] laptop:h-[23px] big:w-[30px] big:h-[30px] bg-white flex items-center justify-center rounded-full -mt-[1px]'>
                        <FontAwesomeIcon 
                        icon={faPhone} 
                        className='text-[8px] text-[#1F6D22] laptop:text-[13px] big:text-[17px]'/>
                      </div>
                      <p className='font-hind '>       +234-903-422-4789
                      </p>
                    </div>
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

            {/* 3 */}
            <div 
            className='w-[34%] flex flex-col items-end '>
              <h1 
              className='md:text-[16px] lg:text-[18px] laptop:text-[22px] big:text-[28px] text-white  font-halyard mb-[6px] laptop:mb-[12px] big:mb-[16px] '>
                Follow Us
              </h1>
              <div 
              className='space-y-[6px] laptop:space-y-[15px] big:space-y-4 flex flex-col items-end'>
                  <Link to='https://www.linkedin.com/company/sitog-global-links-limited/' target='_blank'>
                  <div 
                  className='flex items-center space-x-[4px] laptop:space-x-[6px] big:space-x-[8px]'>
                    <p>LinkedIn</p>
                    <div 
                    className='w-[14px] h-[14px] laptop:w-[23px] laptop:h-[23px] big:w-[30px] big:h-[30px] bg-white flex items-center justify-center rounded-full -mt-[2px]'>
                      <FontAwesomeIcon 
                      icon={faLinkedin} 
                      className='text-[8px] text-[#1F6D22] laptop:text-[13px] big:text-[17px]'/>
                    </div>
                  </div>
                  </Link>
            
                <Link to='https://web.facebook.com/sitog.links' target='_blank'>
                  <div 
                  className='flex items-center space-x-[4px] laptop:space-x-[6px] big:space-x-[8px]'>
                    <p>Facebook</p>
                    <div 
                    className='w-[14px] h-[14px] laptop:w-[23px] laptop:h-[23px] big:w-[30px] big:h-[30px] bg-white flex items-center justify-center rounded-full -mt-[2px]'>
                      <FontAwesomeIcon 
                      icon={faFacebookF} 
                      className='text-[8px] text-[#1F6D22] laptop:text-[13px] big:text-[17px]'/>
                    </div>
                  </div>
                </Link>

                {/* <Link>
                  <div 
                  className='flex items-center space-x-[4px] laptop:space-x-[6px] big:space-x-[8px]'>
                    <p>X</p>
                    <div 
                    className='w-[14px] h-[14px] laptop:w-[23px] laptop:h-[23px] big:w-[30px] big:h-[30px] bg-white flex items-center justify-center rounded-full -mt-[2px]'>
                      <FontAwesomeIcon 
                      icon={faXTwitter} 
                      className='text-[8px] text-[#1F6D22] laptop:text-[13px] big:text-[17px]'/>
                    </div>
                  </div>
                </Link> */}


                <button 
                onClick={scrollToTop}
                className="bg-[#FDCF17] text-[#3A3B40] hover:bg-[#af8a04] transition-all duration-500 ease-in-out font-halyard w-[60px] h-[22px] lg:w-[75px] lg:h-[27px] laptop:w-[100px] laptop:h-[33px] big:w-[150px] big:h-[48px] space-x-[4px] laptop:space-x-[5px] big:space-x-[7px] rounded-[4px] laptop:rounded-[6px] md:text-[8px] lg:text-[10px] laptop:text-[13px] flex items-center justify-center big:text-[20px] font-bold">
                    <span>Back to Top</span>
                    <div 
                    className=" text-[#FDCF17] bg-black  h-[10px] w-[10px] lg:w-[13px] lg:h-[13px] laptop:w-[16px] laptop:h-[16px] big:h-[20px] big:w-[20px] rounded-full flex items-center justify-center md:text-[5px] lg:text-[6px] laptop:text-[7px] big:text-[10px] mt-[1px] laptop:mt-[2px] big:mt-[3px]">
                        <FontAwesomeIcon icon={faArrowUp}/>
                    </div>
                </button>            


              </div>
            </div>
          </div>
        </div>

        <div 
        className='flex items-center justify-between text-[9px] laptop:text-[12px] big:text-[15px] font-hind mt-[12px] lg:mt-[13px] laptop:mt-[17px] big:mt-[22px]'>
          <div 
          className='flex items-center space-x-[4px] laptop:space-x-[6px] big:space-x-[8px]'>
            <div 
            className='w-[14px] h-[14px] laptop:w-[23px] laptop:h-[23px] big:w-[30px] big:h-[30px] bg-white flex items-center justify-center rounded-full'>
              <FontAwesomeIcon 
              icon={faCopyright} 
              className='text-[8px] text-[#1F6D22] laptop:text-[13px] big:text-[17px]'/>
            </div>
            <p 
            className=' text-[#E9F0E9] font-halyard '>
              SITOG Global Links Ltd {'\u2009'}
              <span>{year}</span>
            </p>
          </div>

          <p 
          className='text-[#E9F0E9]  font-bold'>
            Work Time:  {'\u2009'}
            <span className='text-[#FDCF17]'>
              Monday - Friday 8am-5pm</span>
          </p>
          
          <p 
          className='text-[#98BC99] underline'>
            General Terms and Conditions
          </p>
        </div>

      </section>
      <FooterM />
    </section>
  )
}

export default Footer