import OurTeamCarousel from "./OurTeamCarousel"
import OurTeamM from "./OurTeamM"

const OurTeam = () => {
  return (
    <section>
        <div className='hidden md:flex flex-col items-center bg-white py-5 laptop:py-7 big:py-10 rounded-md lg:rounded-lg laptop:rounded-xl big:rounded-2xl mb-4 lg:mb-5 laptop:mb-7 big:mb-11'>
            <p 
            className='bg-[#F0F1F3] text-[#63646C] text-[9px] lg:text-[10px] laptop:text-[12px] big:text-[15px] rounded-md py-1 px-2 laptop:py-[6px] laptop:px-[8px] big:py-[8px] big:px-[12px] laptop:rounded-lg big:rounded-xl w-[55px] lg:w-[59px] laptop:w-[68px] big:w-[88px] mb-1 lg:mb-2 laptop:mb-3 big:mb-5'>
                Our Team
            </p>
            <h1
            className='text-center text-[#3A3B40] font-bold md:text-[18px] lg:text-[24px] md:leading-[19px] lg:leading-[27px] laptop:leading-[30px] laptop:text-[32px] big:text-[38px] big:leading-[45px] mb-[13px] lg:mb-[15px] laptop:mb-[22px] big:mb-[27px]'
            >
                Experienced Professionals<br /> Leading Every Project<br />
            </h1>
            
            <OurTeamCarousel />

        </div>
        <OurTeamM />
    </section>
  )
}

export default OurTeam