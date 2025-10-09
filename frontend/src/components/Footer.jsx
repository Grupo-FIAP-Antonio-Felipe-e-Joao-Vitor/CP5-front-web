import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Logo from './Logo'

const Footer = () => {
    return (
        <footer className="bg-blue-950 md:h-50 h-full p-8 flex flex-col gap-2">
            <div className="flex flex-col md:flex-row gap-5 md:gap-20 h-full border-yellow-400 items-center">
                <div className='flex md:w-1/2 justify-center'>
                    <Logo />
                </div>

                <div className='md:h-full max-md:w-full border-2 border-yellow-400'></div>

                <div className='flex flex-col md:w-1/2 h-full justify-center items-center'>
                    <span
                        className='mb-2 text-2xl text-yellow-400 font-bold uppercase'
                    >
                        Contato
                    </span>
                    <div className='flex justify-center items-center text-xl text-white gap-4'>
                        <FaInstagram className="cursor-pointer" />
                        <FaFacebook className="cursor-pointer" />
                        <FaTwitter className="cursor-pointer" />
                        <FaWhatsapp className="cursor-pointer" />
                    </div>
                </div>
            </div>

            <div className="flex justify-center text-lg text-center md:text-2xl text-white font-bold">
                <span>
                    &copy; 2025 - Todos os direitos reservados.
                </span>
            </div>


        </footer>
    )
}

export default Footer