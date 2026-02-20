import Hero from "../components/Hero"
import HeroM from "../components/HeroM"
import WhoWeAre from "../components/WhoWeAre"
import OurClients from "../components/OurClients"
import OurServices from "../components/OurServices"

const Home = () => {
  return (
  <div className='px-[4%] big:px-[15%] mt-[105px] laptop:mt-[130px] big:mt-[175px]'> 
    <Hero />
    <HeroM />
    <WhoWeAre />
    <OurClients />
    <OurServices />
  </div>
  )
}

export default Home