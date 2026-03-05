import Header from "../components/contact/Header"
import ContactUs from "../components/contact/ContactUs"
import Map from "../components/contact/Map"

const Contact = () => {
  return (
    <div className="px-[4%] big:px-[15%] mt-[105px] laptop:mt-[130px] big:mt-[175px]">
      <Header />
      <ContactUs />
      <Map />
    </div>
  )
}

export default Contact