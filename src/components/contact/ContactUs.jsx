import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter'

import GetInTouch from "./GetInTouch"

import ContactUsM from "./ContactUsM"

const ContactUs = () => {
  return (
    <section>
        <section 
        className='hidden md:flex bg-white py-7 laptop:py-10 big:py-14 px-[3%] rounded-md lg:rounded-lg laptop:rounded-xl big:rounded-2xl shadow-sm font-halyard my-4 lg:my-6 laptop:my-8 big:my-11 overflow-hidden items-start justify-between'>
            <div className='w-[41%]'>
                <p 
                className='bg-[#F0F1F3] text-[#63646C] text-[9px] lg:text-[10px] laptop:text-[12px] big:text-[15px] rounded-md py-1 px-2 laptop:py-[6px] laptop:px-[8px] big:py-[8px] big:px-[12px] laptop:rounded-lg big:rounded-xl w-[63px] lg:w-[68px] laptop:w-[78px] big:w-[102px] mb-[3px] lg:mb-[5px] laptop:mb-[5px] big:mb-[8px]'>
                    Contact Us
                </p>

                <h1
                className='text-[#1F6D22] font-bold mt-[5px] mb-[10px] laptop:mt-[15px] laptop:mb-[15px]  big:mt-[20px] big:mb-[17px] md:text-[25px] leading-[29px] lg:text-[30px] lg:leading-[33px] laptop:text-[43px] laptop:leading-[47px] big:text-[57px] big:leading-[60px] font-halyard'
                >
                    Let’s Discuss Your Engineering & Project Requirements
                </h1>

                <p className='md:text-[11px] lg:text-[12px] laptop:text-[16px] big:text-[22px] font-hind font-medium text-[#63646C] mt-[4px] lg:mt-[6px] laptop:mt-[7px] big:mt-[8px]'>
                    From engineering expertise to OEM-certified equipment and project execution, SITOG Global Links Limited is ready to support your operations.
                </p>

                {/* Contact Details and Our Location */}
                <div className='rounded-sm lg:rounded-md  md:text-[11px] lg:text-[12px] laptop:text-[16px] big:text-[22px] font-hind font-medium text-[#63646C] flex justify-between mt-[6px] lg:mt-[8px] laptop:mt-[10px] big:mt-[14px] w-full'>
                    {/* Contact Details */}
                    <div className='flex flex-col space-y-[5px] lg:space-y-[6px] laptop:space-y-[8px] big:space-y-[10px] w-[50%]'>
                        <p className='rounded-sm lg:rounded-md  md:text-[11px] lg:text-[12px] laptop:text-[16px] big:text-[22px] font-hind font-medium text-[#63646C] mt-[4px] lg:mt-[6px] laptop:mt-[7px] big:mt-[8px] bg-[#FEE994] px-[4px] py-[3px] laptop:px-[8px] laptop:py-[6px] big:px-[9px] w-[82px] lg:w-[89px] laptop:w-[125px] big:w-[165px]'>
                            Contact Details
                        </p>

                        <Link 
                        to='tel:+234-903-422-4789'
                        target='_blank'>
                            0903-422-4789
                        </Link>
                        <Link 
                        to='tel:+234-812-505-3956'
                        target='_blank'>
                            0812-505-3956
                        </Link>
                        <Link 
                        to='tel:+234-913-740-8480'
                        target='_blank'>
                            0913-740-8480
                        </Link>
                        <Link 
                        to='tel:+234-704-740-9321'
                        target='_blank'>
                            0704-740-9321
                        </Link>

                    </div>

                    {/* Our Location */}
                    <div className="flex flex-col space-y-[4.5px] lg:space-y-[5.5px] laptop:space-y-[8px] big:space-y-[9px] w-[50%]">
                        <p className='rounded-sm lg:rounded-md  md:text-[11px] lg:text-[12px] laptop:text-[16px] big:text-[22px] font-hind font-medium text-[#63646C] mt-[4px] lg:mt-[6px] laptop:mt-[7px] big:mt-[8px] bg-[#FEE994] px-[4px] py-[3px] laptop:px-[8px] laptop:py-[6px] big:px-[9px] w-[70px] lg:w-[76px] laptop:w-[106px] big:w-[142px]'>
                            Our Location
                        </p> 
                        <p>
                            35 Isale Ariya Street, Opposite <br /> Ori Ade Hotel, Dalemo, Sango<br /> Ota, Ogun State, Nigeria.
                        </p>                      
                    </div>
                </div>

                
                {/* Email and Social handles */}
                <div className='rounded-sm lg:rounded-md  md:text-[11px] lg:text-[12px] laptop:text-[16px] big:text-[22px] font-hind font-medium text-[#63646C] flex justify-between mt-[6px] lg:mt-[8px] laptop:mt-[10px] big:mt-[14px]'>
                    {/* Email */}
                    <div className='flex flex-col space-y-[5px] lg:space-y-[6px] laptop:space-y-[8px] big:space-y-[10px] w-[50%]'>
                        <p className='rounded-sm lg:rounded-md  md:text-[11px] lg:text-[12px] laptop:text-[16px] big:text-[22px] font-hind font-medium text-[#63646C] mt-[4px] lg:mt-[6px] laptop:mt-[7px] big:mt-[8px] bg-[#FEE994] px-[4px] py-[3px] laptop:px-[8px] laptop:py-[6px] big:px-[9px] w-[35px] lg:w-[37px] laptop:w-[53px] big:w-[69px]'>
                            Email
                        </p>

                        <Link 
                        to='mailto:sales@sitogglobal.com'
                        target='_blank'>
                            sales@sitogglobal.com
                        </Link>
                        <Link 
                        to='mailto:sitogglobal@gmail.com'
                        target='_blank'>
                            sitogglobal@gmail.com
                        </Link>
                    </div>

                    {/* Social Handles */}
                    <div className="flex flex-col  space-y-[4.5px] lg:space-y-[5.5px] laptop:space-y-[8px] big:space-y-[9px] w-[50%]">
                        <p className='rounded-sm lg:rounded-md  md:text-[11px] lg:text-[12px] laptop:text-[16px] big:text-[22px] font-hind font-medium text-[#63646C] mt-[4px] lg:mt-[6px] laptop:mt-[7px] big:mt-[8px] bg-[#FEE994] px-[4px] py-[3px] laptop:px-[8px] laptop:py-[6px] big:px-[9px] w-[76px] lg:w-[82px] laptop:w-[115px] big:w-[154px]'>
                            Social handles
                        </p> 
                        {/* Socials */}
                        <div className="flex items-center space-x-[4px] laptop:space-x-[7px] big:space-x-[10px]">
                            <Link to='https://www.linkedin.com/company/sitog-global-links-limited/' target='_blank'>
                            <div className="bg-[#1F6D22] hover:bg-[#e9f0e9] transition-all duration-500 ease-in-out h-[12px] w-[12px] lg:w-[14px] lg:h-[14px] laptop:w-[20px] laptop:h-[20px] big:h-[30px] big:w-[30px] flex items-center justify-center rounded-full">
                                <FontAwesomeIcon 
                                icon={faLinkedin}
                                className="text-[#E9F0E9] hover:text-[#1F6D22] text-[6px] transition-all duration-500 ease-in-out lg:text-[7px] laptop:text-[10px]  big:text-[15px]"/>
                            </div>
                            </Link>
                            
                            <Link to='https://web.facebook.com/sitog.links' target='_blank'>
                            <div className="bg-[#1F6D22] hover:bg-[#e9f0e9] transition-all duration-500 ease-in-out h-[12px] w-[12px] lg:w-[14px] lg:h-[14px] laptop:w-[20px] laptop:h-[20px] big:h-[30px] big:w-[30px] flex items-center justify-center rounded-full">
                                <FontAwesomeIcon 
                                icon={faFacebookF}
                                className="text-[#E9F0E9] hover:text-[#1F6D22] text-[6px] transition-all duration-500 ease-in-out lg:text-[7px] laptop:text-[10px]  big:text-[15px]"/>
                            </div>
                            </Link>

                            {/* <div className="bg-[#1F6D22] hover:bg-[#e9f0e9] transition-all duration-500 ease-in-out h-[12px] w-[12px] lg:w-[14px] lg:h-[14px] laptop:w-[20px] laptop:h-[20px] big:h-[30px] big:w-[30px] flex items-center justify-center rounded-full">
                                <FontAwesomeIcon 
                                icon={faXTwitter}
                                className="text-[#E9F0E9] hover:text-[#1F6D22] text-[6px] transition-all duration-500 ease-in-out lg:text-[7px] laptop:text-[10px]  big:text-[15px]"/>
                            </div> */}

                        </div>                      
                    </div>
                </div>


            </div>

            <GetInTouch />


        </section>
        <ContactUsM />
    </section>
  )
}

export default ContactUs