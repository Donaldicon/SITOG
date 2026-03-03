import AuthorizedPartnersM from "./AuthorizedPartnersM"

const OurPartnersM = () => {
  return (
    <section 
    className='md:hidden block bg-white py-3 px-[4%] rounded-md shadow-sm font-halyard mt-4 mb-4'>
        <p 
        className='bg-[#F0F1F3] text-[#63646C] text-[10px] rounded-lg py-2 px-3 w-fit'>
            Our Partners
        </p>
        <div 
        className='flex flex-col items-start justify-between mt-[4px]'
        >
            <h1 
            className='w-[90%] text-[24px] leading-[30px] font-halyard text-[#3A3B40] font-semibold'>
                Global Technology Partners. Proven LocalDelivery 
            </h1>
            <p 
            className='w-[95%] md:text-[11px] font-hind font-medium text-[#4C4E54] my-[12px] '>
                SITOG Global Links Limited works closely with globally recognized Original Equipment Manufacturers (OEMs) to deliver reliable, precision-engineered solutions for Nigeria’sindustrial sector. As an authorized representative in Nigeria, we provide direct access to world-class technologies, OEM-certified products, and expert technical support ensuring our clients benefit from proven innovation, quality, and performance.
            </p>
        </div>
        
        <AuthorizedPartnersM />
    </section>
  )
}

export default OurPartnersM