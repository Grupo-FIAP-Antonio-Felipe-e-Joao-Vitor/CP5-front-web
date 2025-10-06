import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import Logo from './Logo'
import LoginBtn from './LoginBtn';

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className='bg-blue-950 p-4'>

      <nav className='hidden md:flex justify-around w-full items-center'>
        <Logo />
        <ul className='flex gap-4 text-white font-bold'>
          <li><Link to="/" className='hover:text-yellow-400 transition-all duration-200'>Home</Link></li>
          <li><Link to="/sobre" className='hover:text-yellow-400 transition-all duration-200'>Sobre</Link></li>
          <li><Link to="/planos" className='hover:text-yellow-400 transition-all duration-200'>Planos</Link></li>
          <li><Link to="/treinos" className='hover:text-yellow-400 transition-all duration-200'>Treinos</Link></li>
        </ul>
        <LoginBtn />
      </nav>

      <nav className='md:hidden flex justify-between items-center'>
        <Logo />
        <div className='flex items-center gap-4'>
          <LoginBtn />

          <div className='text-yellow-400'>
            {
              menuAberto ? (
                <MdOutlineClose
                  onClick={() => setMenuAberto(false)}
                  className='size-10'
                />
              ) : (
                <MdOutlineMenu
                  onClick={() => setMenuAberto(true)}
                  className='size-10' />
              )
            }
          </div>
        </div>
      </nav>
      {
        menuAberto ? (
          <>
            <ul className='md:hidden flex flex-col justify-center items-center gap-2 mt-4 p-2 uppercase text-white font-bold bg-blue-900 rounded-2xl'>
              <li><Link to="/" className='hover:text-yellow-400 transition-all  duration-200'>Home</Link></li>
              <li><Link to="/sobre" className='hover:text-yellow-400 transition-all duration-200'>Sobre</Link></li>
              <li><Link to="/planos" className='hover:text-yellow-400 transition-all duration-200'>Planos</Link></li>
              <li><Link to="/treinos" className='hover:text-yellow-400 transition-all duration-200'>Treinos</Link></li>
            </ul>
          </>
        ) : (
          null
        )
      }
    </header>
  )
}

export default Header