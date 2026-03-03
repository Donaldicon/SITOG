import Header from "../components/partners/Header"
import OurPartners from "../components/partners/OurPartners"
import ProjectNeeds from "../components/home/ProjectNeeds"

const Partners = () => {
  return (
    <div className="px-[4%] big:px-[15%] mt-[105px] laptop:mt-[130px] big:mt-[175px]">
      <Header />
      <OurPartners />
      <ProjectNeeds />
    </div>
  )
}

export default Partners