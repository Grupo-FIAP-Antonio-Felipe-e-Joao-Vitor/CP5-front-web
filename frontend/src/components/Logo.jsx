import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/"><h1 className='flex flex-col text-2xl font-bold text-yellow-400 leading-5'>Smart <span className='text-white'>Gym</span></h1></Link>
  )
}

export default Logo