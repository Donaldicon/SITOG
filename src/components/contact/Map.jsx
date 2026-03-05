import nav from '../../assets/contact/nav.png'
import { Link } from 'react-router-dom'

const Map = () => {
  return (
    <div className='my-4 lg:my-6 laptop:my-8 big:my-11 '>
        <Link to='https://maps.app.goo.gl/x94KVAF7cBGbVeNa7?g_st=iw' target='_blank'
        className='w-full'>
        <img src={nav} alt="map" className='rounded-md lg:rounded-lg laptop:rounded-xl big:rounded-2xl object-cover object-center w-full h-[480px] md:h-[450px] lg:h-[480px] laptop:h-[610px] big:h-[780px] '/>
        </Link>
    </div>
  )
}

export default Map