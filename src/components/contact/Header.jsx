import titleImg from '../../assets/about/header/title-img.png'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div 
    className='relative h-[75px] md:h-[55px] lg:h-[65px] laptop:h-[80px] big:h-[105px] w-full'>
        <img 
        src={titleImg} 
        alt="About Us title Image" 
        className='w-full object-cover object-center rounded-md lg:rounded-lg laptop:rounded-xl big:rounded-2xl h-full'
        />
        <div 
        className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center'>
          <h1 
          className='text-[28px] leading-[40px] md:text-[18px] lg:text-[24px] md:leading-[24px] lg:leading-[32px] laptop:leading-[40px] laptop:text-[32px] big:text-[38px] big:leading-[50px] text-white font-halyard'>
            Contact Us
          </h1>
          <p 
          className='text-[#F3F4F5] text-[9px] md:text-[8px] lg:text-[10px] laptop:text-[12px] big:text-[15px] font-hind'>
            <Link to='/'>
            Home{'\u2009'} </Link>/{'\u2009'}
            <span className='text-[#FDCF17]'>
              Contact Us
            </span>
          </p>
        </div>
      </div>
  )
}

export default Header