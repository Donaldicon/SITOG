import OurPartnersM from "./OurPartnersM"
import AuthorizedPartners from "./AuthorizedPartners"

const OurPartners = () => {
  return (
    <section>
        <section 
        className='hidden md:block bg-white py-7 laptop:py-10 big:py-14 px-[3%] rounded-md lg:rounded-lg laptop:rounded-xl big:rounded-2xl shadow-sm font-halyard my-4 lg:my-6 laptop:my-8 big:my-11 overflow-hidden'>
            <p 
            className='bg-[#F0F1F3] text-[#63646C] text-[9px] lg:text-[10px] laptop:text-[12px] big:text-[15px] rounded-md py-1 px-2 laptop:py-[6px] laptop:px-[8px] big:py-[8px] big:px-[12px] laptop:rounded-lg big:rounded-xl w-[63px] lg:w-[68px] laptop:w-[78px] big:w-[102px] mb-[3px] lg:mb-[5px] laptop:mb-[5px] big:mb-[8px]'>
                Our Partners
            </p>
            <div 
            className='flex items-start justify-between overflow-hidden'
            >
                <h1 
                className='w-[37%] md:text-[18px] lg:text-[24px] md:leading-[24px] lg:leading-[32px] laptop:leading-[40px] laptop:text-[32px] big:text-[38px] big:leading-[50px]  font-halyard text-[#3A3B40] font-semibold'>
                    Global Technology Partners. Proven Local Delivery.
                </h1>


                <p 
                className='w-[55%] md:text-[11px] lg:text-[12px] laptop:text-[16px] big:text-[22px] font-hind font-medium text-[#4C4E54] mt-[4px] lg:mt-[6px] laptop:mt-[7px] big:mt-[8px]'>
                    SITOG Global Links Limited works closely with globally recognized Original Equipment Manufacturers (OEMs) to deliver reliable, precision-engineered solutions for Nigeria’sindustrial sector. As an authorized representative in Nigeria, we provide direct access to world-class technologies, OEM-certified products, and expert technical support ensuring our clients benefit from proven innovation, quality, and performance.
                </p>
            </div>
            
            <AuthorizedPartners />

        </section>
        <OurPartnersM />
    </section>
  )
}

export default OurPartners