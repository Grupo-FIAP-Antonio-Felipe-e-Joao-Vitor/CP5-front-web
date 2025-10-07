import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import axios from "axios";
import RegistroIMG from "../assets/registroImage.png"

const Registro = () => {
    const { register, handleSubmit, reset } = useForm();

    const url = "http://localhost:5001/registro";

    async function registrarUsuario(data) {
        try {
            const response = await axios.post(url, data);
            if (response.status === 201) {
                Swal.fire({
                    title: "Matriculado com sucesso",
                    icon: "success",
                });
                reset()
            }
        } catch (error) {
            const status = error.response.status
            const result = error.response.data
            if (status === 400) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: result.message,
                });
                reset()
            }

            else {
                console.log(error);
            }
        }
    }

    return (
        <section className='flex justify-center items-center min-h-screen bg-black opacity-90'>
            <section className='md:w-1/2 p-8'>
                <h1 className="text-yellow-400 uppercase font-bold text-4xl md:text-5xl mt-10">Matricule-se já!</h1>
                <form
                    className='flex flex-col gap-5 mt-10'
                    onSubmit={handleSubmit(registrarUsuario)}
                >

                    <div className='flex flex-col gap-2'>
                        <label className='text-white text-2xl uppercase font-bold'>Email</label>
                        <input
                            className='border-2 border-white rounded h-10 text-gray-100 px-2'
                            placeholder='DIGITE SEU EMAIL'
                            type="email"
                            required
                            {...register("email")}
                        />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='text-white text-2xl uppercase font-bold'>CPF</label>
                        <input
                            className='border-2 border-white rounded h-10 text-gray-100 px-2'
                            placeholder='DIGITE SEU CPF'
                            type="cpf"
                            required
                            {...register("cpf")}
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
                        Matricular-se
                    </button>
                </form>
                <span className="text-white uppercase text-lg font-bold mt-10">Já possui uma matrícula? <Link className="text-blue-500 hover:underline transition-all duration-300" to="/login">Entre</Link></span>
            </section>
            <section className='hidden md:block w-1/2'>
                <img className="h-screen w-full object-cover" src={RegistroIMG} alt="" />
            </section>
        </section>
    )
}

export default Registro