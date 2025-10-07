import axios from "axios";
import LoginIMG from "../assets/loginImage.png"
import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"

const Login = () => {
    const { register, handleSubmit, reset } = useForm();

    const url = "http://localhost:5001/login";

    async function verificaUsuario(data) {
        try {
            const response = await axios.post(url, data)
            if (response.status === 200) {
                Swal.fire({
                    title: "Matriculado com sucesso",
                    icon: "success",
                });
                reset();
            }
        } catch (error) {
            const status = error.response.status;
            const result = error.response.data;
            if (status === 400 ) { 
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: result.message,
                });
                reset();
            };

            if (status === 404) { 
                Swal.fire({
                    icon: "warning",
                    title: "Oops...",
                    text: result.message,
                });
                reset();
            }

            else {
                console.log(error);
            }
        }
    }

    return (
        <section className="flex flex-row justify-center items-center bg-black opacity-90 min-h-screen">
            <section className='hidden md:block w-1/2'>
                <img className="h-screen w-full object-cover object-top" src={LoginIMG} alt="" />
            </section>
            <section className="md:w-1/2 p-8">
                <h1 className="text-yellow-400 uppercase font-bold text-4xl md:text-5xl mt-10">Entre já!</h1>
                <form
                    onSubmit={handleSubmit(verificaUsuario)}
                    className="flex flex-col gap-5 mt-10"
                >

                    <div className='flex flex-col gap-2'>
                        <label className='text-white text-2xl uppercase font-bold'>Email ou CPF</label>
                        <input
                            className='border-2 border-white rounded h-10 text-gray-100 px-2'
                            placeholder='DIGITE SEU EMAIL OU CPF'
                            type="text"
                            required
                            {...register("usuario")}
                        />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='text-white text-2xl uppercase font-bold'>Senha</label>
                        <input
                            className='border-2 border-white rounded h-10 text-gray-100 px-2'
                            placeholder='DIGITE SUA SENHA'
                            type="password"
                            required
                            {...register("senha")}
                        />
                    </div>

                    <button
                        className='text-2xl uppercase text-black font-bold cursor-pointer hover:bg-transparent hover:text-white hover:border-2 hover:border-yellow-400 transition-colors duration-300 bg-yellow-400 rounded'
                        type='submit'
                    >
                        Entrar
                    </button>
                </form>
                <span className="text-white uppercase text-lg font-bold mt-10">Não possui uma matrícula? <Link className="text-blue-500 hover:underline transition-all duration-300" to="/registro">Matricule-se</Link></span>
            </section>
        </section>
    )
}

export default Login