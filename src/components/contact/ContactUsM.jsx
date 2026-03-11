import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter'

import GetInTouchM from "./GetInTouchM"

const ContactUsM = () => {
  return (
    <section>
        <section 
        className='md:hidden flex flex-col bg-white py-7 laptop:py-10 big:py-14 px-[3%] rounded-md lg:rounded-lg laptop:rounded-xl big:rounded-2xl shadow-sm font-halyard my-4 lg:my-6 laptop:my-8 big:my-11 overflow-hidden items-start justify-between'>
            <div className='w-full'>
                <p 
                className='bg-[#F0F1F3] text-[#63646C]  text-[10px] rounded-lg py-2 px-3 w-fit mb-[3px] '>
                    Contact Us
                </p>

                <h1
                className='text-[#1F6D22] font-bold my-[5px] text-[25px] leading-[32px] big:leading-[60px] font-halyard pr-[30%]'
                >
                    Let’s Discuss Your Engineering & Project Requirements
                </h1>

                <p className='text-[12px] font-hind font-medium text-[#63646C] mt-[4px] '>
                    From engineering expertise to OEM-certified equipment and project execution, SITOG Global Links Limited is ready to support your operations.
                </p>

                {/* Contact Details and Our Location */}
                <div className='rounded-md text-[12px] font-hind font-medium text-[#63646C] flex flex-col space-y-[10px] mt-[10px] w-full'>
                    {/* Contact Details */}
                    <div className='flex flex-col space-y-[5px] lg:space-y-[6px] laptop:space-y-[8px] big:space-y-[10px] w-full'>
                        <p className='rounded-md text-[12px] font-hind font-medium text-[#63646C] mt-[4px] bg-[#FEE994] px-[4px] py-[3px] w-fit '>
                            Contact Details
                        </p>

                        <Link 
                        to='tel:+234-903-422-4789'
                        target='_blank'
                        className="block">
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
                    <div className="flex flex-col space-y-[5px] w-full">
                        <p className='rounded-md text-[12px] font-hind font-medium text-[#63646C] mt-[4px] lg:mt-[6px] laptop:mt-[7px] big:mt-[8px] bg-[#FEE994] px-[4px] py-[3px]  w-fit'>
                            Our Location
                        </p> 
                        <p>
                            35 Isale Ariya Street, Opposite <br /> Ori Ade Hotel, Dalemo, Sango<br /> Ota, Ogun State, Nigeria.
                        </p>                      
                    </div>
                </div>

                
                {/* Email and Social handles */}
                <div className='rounded-md text-[12px] font-hind font-medium text-[#63646C] flex flex-col mt-[10px] space-y-[10px]'>
                    {/* Email */}
                    <div className='flex flex-col space-y-[5px] w-full'>
                        <p className='rounded-md text-[12px]  font-hind font-medium text-[#63646C] mt-[4px] bg-[#FEE994] px-[4px] py-[3px] w-fit'>
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
                    <div className="flex flex-col  space-y-[7px]">
                        <p className='rounded-md  font-hind font-medium text-[#63646C] mt-[4px]  bg-[#FEE994] px-[4px] py-[3px] w-fit'>
                            Social handles
                        </p> 
                        {/* Socials */}
                        <div className="flex items-center space-x-[5px]">
                            <Link to='https://www.linkedin.com/company/sitog-global-links-limited/' target='_blank'>
                            <div className="bg-[#1F6D22] hover:bg-[#e9f0e9] transition-all duration-500 ease-in-out w-[14px] h-[14px]  flex items-center justify-center rounded-full">
                                <FontAwesomeIcon 
                                icon={faLinkedin}
                                className="text-[#E9F0E9] hover:text-[#1F6D22]  transition-all duration-500 ease-in-out text-[10px]"/>
                            </div>
                            </Link>

                            <Link to='https://web.facebook.com/sitog.links' target='_blank'>
                            <div className="bg-[#1F6D22] hover:bg-[#e9f0e9] transition-all duration-500 ease-in-out w-[14px] h-[14px]  flex items-center justify-center rounded-full">
                                <FontAwesomeIcon 
                                icon={faFacebookF}
                                className="text-[#E9F0E9] hover:text-[#1F6D22]  transition-all duration-500 ease-in-out text-[10px]"/>
                            </div>
                            </Link>

                            {/* <div className="bg-[#1F6D22] hover:bg-[#e9f0e9] transition-all duration-500 ease-in-out w-[14px] h-[14px] flex items-center justify-center rounded-full">
                                <FontAwesomeIcon 
                                icon={faXTwitter}
                                className="text-[#E9F0E9] hover:text-[#1F6D22]  transition-all duration-500 ease-in-out text-[7px] "/>
                            </div> */}

                        </div>                      
                    </div>
                </div>


            </div>

            <GetInTouchM />


        </section>
    </section>
  )
}

export default ContactUsM