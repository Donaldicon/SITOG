import Hero from "../components/home/Hero"
import HeroM from "../components/home/HeroM"
import WhoWeAre from "../components/home/WhoWeAre"
import OurClients from "../components/home/OurClients"
import OurServices from "../components/home/OurServices"
import ProjectOverview from "../components/home/ProjectOverview"
import ProjectNeeds from "../components/home/ProjectNeeds"

const Home = () => {
  return (
  <div className='px-[4%] big:px-[15%] mt-[105px] laptop:mt-[130px] big:mt-[175px]'> 
    <Hero />
    <HeroM />
    <WhoWeAre />
    <OurClients />
    <OurServices />
    <ProjectOverview />
    <ProjectNeeds />
  </div>
  )
}

export default Home