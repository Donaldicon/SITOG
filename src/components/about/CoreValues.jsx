import cvBg from '../../assets/about/core-values/CV-BG.png'
import cvOv from '../../assets/about/core-values/CV-OV.png'
import cvCv from '../../assets/about/core-values/CV-CV.png'
import cvOm from '../../assets/about/core-values/CV-OM.png'

import CoreValuesM from './CoreValuesM'

const CoreValues = () => {
  return (
    <section>
        <div 
        className='relative mt-4 lg:mt-6 laptop:mt-8 big:mt-11 hidden md:block'>
            <img 
            src={cvBg} 
            alt="Background Image of Core values section"
            className='rounded-md lg:rounded-lg laptop:rounded-xl big:rounded-2xl h-[530px] lg:h-[530px] laptop:h-[680px] big:h-[920px] object-cover w-full object-right-top' 
            />
            <div 
            className='absolute top-1/2 -translate-y-1/2 w-full flex items-center justify-center p-10 space-x-[15px] lg:space-x-[18px] laptop:space-x-[25px] big:space-x-[32px]'>
                {/* box 1 */}
                <div 
                className='w-[27%] transition-all duration-500 ease-in-out hover:scale-110 border-white/50 border-[3px] lg:border-[5px] laptop:border-[7px] big:border-[9px] p-[0.5%] rounded-md lg:rounded-lg laptop:rounded-xl big:rounded-2xl cursor-pointer'>
                    <div 
                    className='bg-[#FDCF17] h-[240px] lg:h-[255px] laptop:h-[330px] big:h-[450px]  w-full flex flex-col relative rounded-md lg:rounded-lg laptop:rounded-xl big:rounded-2xl'>
                        <div 
                        className='flex items-end justify-end'>
                            <img 
                            src={cvOv} 
                            alt="Placeholder image for our vision" 
                            className='w-[50px] lg:w-[70px] laptop:w-[90px] big:w-[140px]  opacity-50'
                            />
                        </div>
                        <div 
                        className='flex flex-col px-[4%]  top-[14%] lg:top-[20%] laptop:top-[18%] big:top-[20%] absolute'>
                            <h1 
                            className='md:text-[22px] lg:text-[27px] md:leading-[25px] lg:leading-[28px] laptop:leading-[38px] laptop:text-[38px] big:text-[45px] big:leading-[48px] font-halyard  '>
                                Our <br />Vision
                            </h1>
                            <p 
                            className='text-[#3A3B40]  md:text-[11px] lg:text-[12px] laptop:text-[16px] big:text-[22px] mt-[5px] lg:mt-[8px] laptop:mt-[12px] big:mt-[15px] font-hind'>
                                To become a top-tier engineering firm recognized for solving complex industrial challenges, trusted for reliable procurement, and respected for excellence in construction and service delivery
                            </p>
                        </div>

                    </div>
                </div>

                
                {/* box 2 */}
                <div 
                className='w-[27%] transition-all duration-500 ease-in-out hover:scale-110 border-white/50 border-[3px] lg:border-[5px] laptop:border-[7px] big:border-[9px] p-[0.5%] rounded-md lg:rounded-lg laptop:rounded-xl big:rounded-2xl cursor-pointer'>
                    <div 
                    className='bg-white h-[430px] lg:h-[440px] laptop:h-[540px] big:h-[770px]  w-full flex flex-col relative rounded-md lg:rounded-lg laptop:rounded-xl big:rounded-2xl'>
                        <div 
                        className='flex items-end justify-end'>
                            <img 
                            src={cvCv} 
                            alt="Placeholder image for our vision" 
                            className='w-[50px] lg:w-[70px] laptop:w-[90px] big:w-[140px]  opacity-50'
                            />
                        </div>
                        <div 
                        className='flex flex-col px-[4%]  top-[8%] lg:top-[10%] laptop:top-[10%] big:top-[13%] absolute'>
                            <h1 
                            className='md:text-[25px] lg:text-[31px] md:leading-[23px] lg:leading-[28px] laptop:leading-[38px] laptop:text-[45px] big:text-[55px] big:leading-[48px] font-halyard italic text-[#1F6D22]'>
                                Core <br />Values
                            </h1>
                            <ul className='list-disc list-outside pl-[12%] lg:pl-[10%]  text-[#3A3B40]  md:text-[11px] lg:text-[12px] laptop:text-[16px] big:text-[22px] mt-[10px] lg:mt-[13px] laptop:mt-[17px] big:mt-[26px] font-hind'>
                                <li>Expertise: We deliver superior technical solutions with professionalism and precision.</li>
                                <li>Probity: We uphold integrity, honesty, and transparency in all business dealings</li>
                                <li>Customer Focus: We place our clients’ success at the heart of every decision.</li>
                                <li>Innovation: We embrace technology to drive progress and continuous improvement.</li>
                                <li>Safety: We ensure safe operations that protect our people, clients, and environment</li>
                            </ul>
                        </div>

                    </div>
                </div>

    
                {/* box 3 */}
                <div 
                className='w-[27%] transition-all duration-500 ease-in-out hover:scale-110 border-white/50 border-[3px] lg:border-[5px] laptop:border-[7px] big:border-[9px] p-[0.5%] rounded-md lg:rounded-lg laptop:rounded-xl big:rounded-2xl cursor-pointer'>
                    <div 
                    className='bg-[#FDCF17] h-[240px] lg:h-[255px] laptop:h-[330px] big:h-[450px]  w-full flex flex-col relative rounded-md lg:rounded-lg laptop:rounded-xl big:rounded-2xl'>
                        <div 
                        className='flex items-end justify-end'>
                            <img 
                            src={cvOm} 
                            alt="Placeholder image for our vision" 
                            className='w-[50px] lg:w-[70px] laptop:w-[90px] big:w-[140px]  opacity-50'
                            />
                        </div>
                        <div 
                        className='flex flex-col px-[4%]  top-[14%] lg:top-[20%] laptop:top-[18%] big:top-[20%] absolute'>
                            <h1 
                            className='md:text-[22px] lg:text-[27px] md:leading-[25px] lg:leading-[28px] laptop:leading-[38px] laptop:text-[38px] big:text-[45px] big:leading-[48px] font-halyard  '>
                                Our <br />Mission
                            </h1>
                            <p 
                            className='text-[#3A3B40]  md:text-[11px] lg:text-[12px] laptop:text-[16px] big:text-[22px] mt-[5px] lg:mt-[8px] laptop:mt-[12px] big:mt-[15px] font-hind  '>
                                To exceed customer expectations across all performance indicators quality, reliability, efficiency, and value while fostering lasting partnerships through integrity and innovation.
                            </p>
                        </div>

                    </div>
                </div>


            </div>
        </div>
        <CoreValuesM />
    </section>
  )
}

export default CoreValues








// import cvBg from '../../assets/about/core-values/CV-BG.png'
// import cvOv from '../../assets/about/core-values/CV-OV.png'
// import cvCv from '../../assets/about/core-values/CV-CV.png'
// import cvOm from '../../assets/about/core-values/CV-OM.png'

// import CoreValuesM from './CoreValuesM'

// const CoreValues = () => {
//   return (
//     <section>
//         <div 
//         className='relative mt-4 lg:mt-6 laptop:mt-8 big:mt-11 hidden md:block'>
//             <img 
//             src={cvBg} 
//             alt="Background Image of Core values section"
//             className='rounded-md lg:rounded-lg laptop:rounded-xl big:rounded-2xl h-[620px] lg:h-[650px] laptop:h-[700px] big:h-[980px] object-cover w-full object-right-top' 
//             />
//             <div 
//             className='absolute top-1/2 -translate-y-1/2 w-full flex items-center justify-center p-10 space-x-[12px] lg:space-x-[15px] laptop:space-x-[20px] big:space-x-[27px]'>
//                 {/* box 1 */}
//                 <div 
//                 className='w-[27%] border-white/50 border-[3px] lg:border-[5px] laptop:border-[7px] big:border-[9px] p-[0.5%] rounded-md lg:rounded-lg laptop:rounded-xl big:rounded-2xl group  transition-all duration-500 ease-in-out hover:scale-105  cursor-pointer'>
//                     <div 
//                     className='bg-[#FDCF17] h-[240px] lg:h-[255px] laptop:h-[330px] big:h-[450px]  w-full flex flex-col relative rounded-md lg:rounded-lg laptop:rounded-xl big:rounded-2xl  transition-all duration-500 ease-in-out group-hover:h-[300px] lg:group-hover:h-[310px] laptop:group-hover:h-[380px]  big:group-hover:h-[500px]'>
//                         <div 
//                         className='flex items-end justify-end'>
//                             <img 
//                             src={cvOv} 
//                             alt="Placeholder image for our vision" 
//                             className='w-[50px] lg:w-[70px] laptop:w-[90px] big:w-[140px]  opacity-50'
//                             />
//                         </div>
//                         <div 
//                         className='flex flex-col px-[4%]  top-[14%] lg:top-[20%] laptop:top-[18%] big:top-[20%] absolute'>
//                             <h1 
//                             className='md:text-[22px] lg:text-[27px] md:leading-[25px] lg:leading-[28px] laptop:leading-[38px] laptop:text-[38px] big:text-[45px] big:leading-[48px] font-halyard  group-hover:text-[25px] group-hover:lg:text-[30px] group-hover:laptop:text-[42px] group-hover:big:text-[52px] transition-all duration-500 ease-in-out'>
//                                 Our <br />Vision
//                             </h1>
//                             <p 
//                             className='text-[#3A3B40]  md:text-[11px] lg:text-[12px] laptop:text-[16px] big:text-[22px] mt-[5px] lg:mt-[8px] laptop:mt-[12px] big:mt-[15px] font-hind transition-all duration-500 ease-in-out  group-hover:text-[13px] group-hover:lg:text-[14px] group-hover:laptop:text-[18px] group-hover:big:text-[25px]'>
//                                 To become a top-tier engineering firm recognized for solving complex industrial challenges, trusted for reliable procurement, and respected for excellence in construction and service delivery
//                             </p>
//                         </div>

//                     </div>
//                 </div>

                
//                 {/* box 2 */}
//                 <div 
//                 className='w-[170px]  border-white/50 border-[3px] lg:border-[5px] laptop:border-[7px] big:border-[9px] p-[0.5%] rounded-md lg:rounded-lg laptop:rounded-xl big:rounded-2xl group  transition-all duration-500 ease-in-out hover:scale-105  cursor-pointer '>
//                     <div 
//                     className='bg-white h-[430px] lg:h-[420px] laptop:h-[540px] big:h-[770px]  w-full flex flex-col relative rounded-md lg:rounded-lg laptop:rounded-xl big:rounded-2xl transition-all duration-500 ease-in-out group-hover:h-[550px] lg:group-hover:h-[520px] laptop:group-hover:h-[600px]  big:group-hover:h-[850px]'>
//                         <div 
//                         className='flex items-end justify-end'>
//                             <img 
//                             src={cvCv} 
//                             alt="Placeholder image for our vision" 
//                             className='w-[50px] lg:w-[70px] laptop:w-[90px] big:w-[140px]  opacity-50'
//                             />
//                         </div>
//                         <div 
//                         className='flex flex-col px-[4%]  top-[8%] lg:top-[9%] laptop:top-[10%] big:top-[10%] absolute'>
//                             <h1 
//                             className='md:text-[25px] lg:text-[31px] md:leading-[23px] lg:leading-[28px] laptop:leading-[38px] laptop:text-[45px] big:text-[55px] big:leading-[48px] font-halyard italic text-[#1F6D22] group-hover:text-[28px] group-hover:lg:text-[34px] group-hover:laptop:text-[49px] group-hover:big:text-[60px] transition-all duration-500 ease-in-out'>
//                                 Core <br />Values
//                             </h1>
//                             <ul className='list-disc list-outside pl-[12%] lg:pl-[10%]  text-[#3A3B40]  md:text-[11px] lg:text-[12px] laptop:text-[16px] big:text-[22px] mt-[10px] lg:mt-[13px] laptop:mt-[17px] big:mt-[26px] font-hind  group-hover:text-[13px] group-hover:lg:text-[14px] group-hover:laptop:text-[18px] group-hover:big:text-[25px]'>
//                                 <li>Expertise: We deliver superior technical solutions with professionalism and precision.</li>
//                                 <li>Probity: We uphold integrity, honesty, and transparency in all business dealings</li>
//                                 <li>Customer Focus: We place our clients’ success at the heart of every decision.</li>
//                                 <li>Innovation: We embrace technology to drive progress and continuous improvement.</li>
//                                 <li>Safety: We ensure safe operations that protect our people, clients, and environment</li>
//                             </ul>
//                         </div>

//                     </div>
//                 </div>

    
//                 {/* box 3 */}
//                 <div 
//                 className='w-[27%] border-white/50 border-[3px] lg:border-[5px] laptop:border-[7px] big:border-[9px] p-[0.5%] rounded-md lg:rounded-lg laptop:rounded-xl big:rounded-2xl group  transition-all duration-500 ease-in-out hover:scale-105  cursor-pointer'>
//                     <div 
//                     className='bg-[#FDCF17] h-[240px] lg:h-[255px] laptop:h-[330px] big:h-[450px]  w-full flex flex-col relative rounded-md lg:rounded-lg laptop:rounded-xl big:rounded-2xl transition-all duration-500 ease-in-out group-hover:h-[300px] lg:group-hover:h-[310px] laptop:group-hover:h-[380px]  big:group-hover:h-[500px]'>
//                         <div 
//                         className='flex items-end justify-end'>
//                             <img 
//                             src={cvOm} 
//                             alt="Placeholder image for our vision" 
//                             className='w-[50px] lg:w-[70px] laptop:w-[90px] big:w-[140px]  opacity-50'
//                             />
//                         </div>
//                         <div 
//                         className='flex flex-col px-[4%]  top-[14%] lg:top-[20%] laptop:top-[18%] big:top-[20%] absolute'>
//                             <h1 
//                             className='md:text-[22px] lg:text-[27px] md:leading-[25px] lg:leading-[28px] laptop:leading-[38px] laptop:text-[38px] big:text-[45px] big:leading-[48px] font-halyard  group-hover:text-[25px] group-hover:lg:text-[30px] group-hover:laptop:text-[42px] group-hover:big:text-[52px] transition-all duration-500 ease-in-ou'>
//                                 Our <br />Mission
//                             </h1>
//                             <p 
//                             className='text-[#3A3B40]  md:text-[11px] lg:text-[12px] laptop:text-[16px] big:text-[22px] mt-[5px] lg:mt-[8px] laptop:mt-[12px] big:mt-[15px] font-hind transition-all duration-500 ease-in-out  group-hover:text-[13px] group-hover:lg:text-[14px] group-hover:laptop:text-[18px] group-hover:big:text-[25px] '>
//                                 To exceed customer expectations across all performance indicators quality, reliability, efficiency, and value while fostering lasting partnerships through integrity and innovation.
//                             </p>
//                         </div>

//                     </div>
//                 </div>


//             </div>
//         </div>
//         <CoreValuesM />
//     </section>
//   )
// }

// export default CoreValues