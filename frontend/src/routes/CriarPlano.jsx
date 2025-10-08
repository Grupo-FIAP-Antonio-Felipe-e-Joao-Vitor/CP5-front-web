import axios from "axios";
import { useEffect } from "react"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2';


const CriarPlano = ({ usuario, setUsuario, token, setToken }) => {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    const url = "http://localhost:5001/planos"

    function verificaUsuario() {
        if (!usuario) {
            navigate("/registro");
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Você não está matriculado",
            });
        }
        if (usuario) {
            if (usuario.role !== "Admin") {
                navigate("/")
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Você não possui permissão para acessar esta área.",
                });
            }
        }
    }

    async function criar(data) {
        const novoPlano = {
            "nome": data.nome,
            "beneficios": [
                { "nome": "Musculação", "ativo": data.musculacao },
                { "nome": "Crossfit", "ativo": data.crossfit },
                { "nome": "Funcional", "ativo": data.funcional },
                { "nome": "Dança", "ativo": data.danca },
                { "nome": "Pilates", "ativo": data.pilates },
                { "nome": "Personal Trainer", "ativo": data.personal }
            ],
            "tempo": data.tempo,
            "preco": data.preco
        }

        console.log("Token atual: ", token);
        

        try {
            const response = await axios.post(url, novoPlano, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.status === 201) {
                Swal.fire({
                    icon: "sucess",
                    title: "Plano criado com sucesso."
                })
                reset()
                navigate("/planos")
            }
        } catch (error) {
            const status = error.response.status
            const result = error.response.data
            if (status === 403) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "O seu acesso expirou",
                })
                console.log(error);
                localStorage.removeItem("token")
                localStorage.removeItem("usuario")
                setToken(null)
                setUsuario(null)
                navigate("/")
            }

            if (status === 401) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Você não tem permissão para acessar esta área",
                })
                navigate("/")
            }

            if (status === 400) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: result.message,
                })
                reset()
            }
        }
    }

    useEffect(() => {
        verificaUsuario()
    }, [])

    return (
        <section className='bg-black opacity-90 min-h-screen flex justify-center items-center'>
            <form
                onSubmit={handleSubmit(criar)}
                className="p-8 w-full flex flex-col justify-center items-center gap-8"
            >
                <section className="flex w-full justify-center items-center gap-8">
                    <section
                        className="w-1/2 flex flex-col gap-5 mt-10"
                    >
                        <h1 className="text-yellow-400 uppercase font-bold text-4xl md:text-5xl mt-10">Criar Plano</h1>

                        <div className='flex flex-col gap-2'>
                            <label className='text-white text-2xl uppercase font-bold'>Nome</label>
                            <input
                                className='border-2 border-white rounded h-10 text-gray-100 px-2'
                                placeholder='DIGITE O NOME DO PLANO'
                                type="text"
                                required
                                {...register("nome")}
                            />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label className='text-white text-2xl uppercase font-bold'>Preço</label>
                            <input
                                className='border-2 border-white rounded h-10 text-gray-100 px-2'
                                placeholder='DIGITE O VALOR DO PLANO'
                                type="text"
                                required
                                {...register("preco")}
                            />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label className='text-white text-2xl uppercase font-bold'>Tempo</label>
                            <input
                                className='border-2 border-white rounded h-10 text-gray-100 px-2'
                                placeholder='DIGITE O TEMPO DO PLANO (EM MESSES)'
                                type="text"
                                required
                                {...register("tempo")}
                            />
                        </div>

                        <button
                            className='text-2xl w-full uppercase text-black font-bold cursor-pointer hover:bg-transparent hover:text-white hover:border-2 hover:border-yellow-400 transition-colors duration-300 bg-yellow-400 rounded'
                            type='submit'
                        >
                            Criar
                        </button>
                    </section>
                    <section
                        className="flex flex-col gap-5 mt-10"
                    >
                        <h2 className="text-yellow-400 uppercase font-bold text-3xl md:text-4xl mt-10">Beneficios</h2>

                        <div className='flex items-center gap-2'>
                            <label className='text-white text-2xl uppercase font-bold'>Musculação incluso?</label>
                            <input
                                className="size-5 cursor-pointer"
                                type="checkbox"
                                {...register("musculacao")}
                            />
                        </div>

                        <div className='flex items-center gap-2'>
                            <label className='text-white text-2xl uppercase font-bold'>Crossfit incluso?</label>
                            <input
                                className="size-5 cursor-pointer"
                                type="checkbox"
                                {...register("crossfit")}
                            />
                        </div>

                        <div className='flex items-center gap-2'>
                            <label className='text-white text-2xl uppercase font-bold'>Funcional incluso?</label>
                            <input
                                className="size-5 cursor-pointer"
                                type="checkbox"
                                {...register("funcional")}
                            />
                        </div>

                        <div className='flex items-center gap-2'>
                            <label className='text-white text-2xl uppercase font-bold'>Dança incluso?</label>
                            <input
                                className="size-5 cursor-pointer"
                                type="checkbox"
                                {...register("danca")}
                            />
                        </div>

                        <div className='flex items-center gap-2'>
                            <label className='text-white text-2xl uppercase font-bold'>Pilates incluso?</label>
                            <input
                                className="size-5 cursor-pointer"
                                type="checkbox"
                                {...register("pilates")}
                            />
                        </div>

                        <div className='flex items-center gap-2'>
                            <label className='text-white text-2xl uppercase font-bold'>Personal incluso?</label>
                            <input
                                className="size-5 cursor-pointer"
                                type="checkbox"
                                {...register("personal")}
                            />
                        </div>
                    </section>
                </section>

            </form>

        </section>
    )
}

export default CriarPlano