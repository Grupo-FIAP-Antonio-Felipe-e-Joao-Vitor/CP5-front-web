import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-blue-950 p-4 flex justify-around items-center'>
        <h1 className='flex flex-col text-2xl font-bold text-yellow-400 leading-5'>Smart <span className='text-white'>Gym</span></h1>
        <nav className='flex justify-center items-center'>
            <ul className='flex gap-4 text-white font-bold'>
                <li><Link to="/">Home</Link></li>
                <li><Link>Sobre</Link></li>
                <li><Link>Planos</Link></li>
                <li><Link>Treinos</Link></li>
            </ul>
        </nav>
        <Link className='h-8 w-20 text-blue-950 font-bold flex items-center justify-center bg-yellow-400 rounded-xl hover:bg-transparent hover:border-2 hover:border-yellow-400 hover:text-white transition-colors duration-300'>Login</Link>
    </header>
  )
}

export default Header