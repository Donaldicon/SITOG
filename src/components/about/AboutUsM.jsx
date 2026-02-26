import AboutCarouselM from "./AboutCarouselM"

const AboutUsM = () => {
  return (
    <section 
    className='md:hidden block bg-white py-3 px-[4%] rounded-md shadow-sm font-halyard mt-4'>
        <p 
        className='bg-[#F0F1F3] text-[#63646C] text-[10px] rounded-lg py-2 px-3 w-fit'>
            About Us
        </p>
        <div 
        className='flex flex-col items-start justify-between mt-[4px]'
        >
            <h1 
            className='w-[90%] text-[24px] leading-[30px] font-halyard text-[#3A3B40] font-semibold'>
                Engineering Excellence That Powers Industrial Progress
            </h1>
            <p 
            className='w-[95%] md:text-[11px] font-hind font-medium text-[#4C4E54] my-[12px] '>
                Our commitment to quality, transparency, and customer satisfaction drives every project we undertake whether it’s engineering design, procurement, installation, or commissioning. At SITOG, we combine global standards with local expertise to help clients achieve operational excellence and efficiency.
            </p>
        </div>
        {/* Carousel */}
        <div>
            <AboutCarouselM />
        </div>
    </section>
  )
}

export default AboutUsM