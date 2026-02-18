import Hero from "../components/Hero"
import HeroM from "../components/HeroM"

const Home = () => {
  return (
  <div className='px-[4%] big:px-[15%] mt-[105px] laptop:mt-[130px] big:mt-[175px]'> 
    <Hero />
    <HeroM />
  </div>
  )
}

export default Home