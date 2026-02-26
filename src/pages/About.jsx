import Header from "../components/about/Header"
import AboutUs from "../components/about/AboutUs"
import CoreValues from "../components/about/CoreValues"
import OurClients from '../components/home/OurClients.jsx'

const About = () => {
  return (
    <section 
    className='px-[4%] big:px-[15%] mt-[105px] laptop:mt-[130px] big:mt-[175px] '>
      <Header />
      <AboutUs />
      <CoreValues />
      <div className="-my-9 md:-my-4 big:-my-7">
      <OurClients />
      </div>
    </section>
  )
}

export default About