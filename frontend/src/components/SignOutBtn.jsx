import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2';

const SignOutBtn = ({ setUsuario }) => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => {
                Swal.fire({
                    title: "Sair",
                    text: "Tem certeza de que deseja sair?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Sim",
                    cancelButtonText: "Não"
                }).then((result) => {
                    if (result.isConfirmed) {
                        setUsuario(null)
                        localStorage.removeItem("token")
                        localStorage.removeItem("usuario")
                        navigate("/")
                    }
                });

            }}
            className='h-8 w-30 text-blue-950 font-bold flex items-center justify-center bg-yellow-400 cursor-pointer rounded-xl hover:bg-transparent hover:border-2 hover:border-yellow-400 hover:text-white transition-colors duration-300'
        >
            Sair
        </button>
    )
}

export default SignOutBtn