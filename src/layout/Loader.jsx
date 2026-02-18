import loader from '../assets/loader/Loader.png'


const Loader = () => {
  return (
    <div 
    className='fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50'>
        <img 
        src={loader} 
        alt="Website Loader" 
        className='w-20 h-20 rounded-full animate-pulse-scale'
        />
    </div>
  )
}

export default Loader