import Titulo from "../components/Titulo"
import TreinoIMG from "../assets/treinoImage.png"
import { useForm } from "react-hook-form"
import Swal from "sweetalert2"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const CriarTreino = ({ usuario, setUsuario, token, setToken }) => {

    const { register, handleSubmit, reset } = useForm()
    const navigate = useNavigate()

    const url = "http://localhost:5001/treinos"
    async function criar(data) {
        try {
            const response = await axios.post(url, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })

            if (response.status === 201) {
                Swal.fire({
                    icon: "sucess",
                    title: "Treino criado com sucesso."
                })
                reset()
                navigate("/treinos")
            }
        } catch (error) {
            const status = error.response.status;
            if (status === 403) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "O seu acesso expirou",
                });
                localStorage.removeItem("token");
                localStorage.removeItem("usuario");
                setToken(null);
                setUsuario(null);
                navigate("/");
            }

            if (status === 401) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Você não tem permissão para acessar esta área",
                });
                navigate("/");
            }
        }
    }

    return (
        <section className="flex gap-2 justify-center min-h-screen bg-black opacity-90">

            <form
                onSubmit={handleSubmit(criar)}
                className="flex flex-col md:w-1/2 p-8 gap-5 justify-center"
            >
                <h1 className="text-yellow-400 uppercase font-bold text-4xl md:text-5xl mt-10">Criar treino</h1>
                <div className="flex flex-col gap-2">
                    <label className="text-white text-lg md:text-2xl uppercase font-bold">
                        Treino
                    </label>
                    <input
                        className="border-2 border-white rounded h-10 text-gray-100 px-2 bg-transparent focus:outline-none focus:border-yellow-400"
                        placeholder="Digite o treino"
                        type="text"
                        required
                        {...register("treino")}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-white text-lg md:text-2xl uppercase font-bold">
                        Repetições
                    </label>
                    <input
                        className="border-2 border-white rounded h-10 text-gray-100 px-2 bg-transparent focus:outline-none focus:border-yellow-400"
                        placeholder="Digite quantas repetições"
                        type="number"
                        required
                        {...register("repeticoes")}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-white text-lg md:text-2xl uppercase font-bold">
                        Series
                    </label>
                    <input
                        className="border-2 border-white rounded h-10 text-gray-100 px-2 bg-transparent focus:outline-none focus:border-yellow-400"
                        placeholder="Digite quantas series"
                        type="number"
                        required
                        {...register("serie")}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-white text-lg md:text-2xl uppercase font-bold">
                        Dia em que realizará o treino
                    </label>
                    <input
                        className="border-2 border-white rounded h-10 text-gray-100 px-2 bg-transparent focus:outline-none focus:border-yellow-400"
                        placeholder="Digite o dia que você realizará o treino"
                        type="date"
                        required
                        {...register("dia")}
                    />
                </div>

                <button
                    className="text-xl md:text-2xl w-full uppercase text-black font-bold cursor-pointer hover:bg-transparent hover:text-white hover:border-2 hover:border-yellow-400 transition-all duration-300 bg-yellow-400 rounded py-2"
                    type="submit"
                >
                    Criar
                </button>


            </form>

            <img src={TreinoIMG} alt="Imagem de treino" className="hidden object-cover object-left md:block md:w-1/2" />
        </section>
    )
}

export default CriarTreino