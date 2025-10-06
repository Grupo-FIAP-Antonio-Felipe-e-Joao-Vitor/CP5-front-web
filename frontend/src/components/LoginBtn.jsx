import { Link } from "react-router-dom"

const LoginBtn = () => {
  return (
    <Link className='h-8 w-20 text-blue-950 font-bold flex items-center justify-center bg-yellow-400 rounded-xl hover:bg-transparent hover:border-2 hover:border-yellow-400 hover:text-white transition-colors duration-300'>Login</Link>
  )
}

export default LoginBtn