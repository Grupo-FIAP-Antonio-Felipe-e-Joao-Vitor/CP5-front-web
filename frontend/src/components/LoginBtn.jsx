import { Link } from "react-router-dom"

const LoginBtn = () => {
  return (
    <Link to="/registro" className='h-8 w-30 text-blue-950 font-bold flex items-center justify-center bg-yellow-400 rounded-xl hover:bg-transparent hover:border-2 hover:border-yellow-400 hover:text-white transition-colors duration-300'>Matricule-se</Link>
  )
}

export default LoginBtn