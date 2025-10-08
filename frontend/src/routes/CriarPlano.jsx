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
        { "nome": "musculacao", "ativo": data.musculacao },
        { "nome": "crossfit", "ativo": data.crossfit },
        { "nome": "funcional", "ativo": data.funcional },
        { "nome": "danca", "ativo": data.danca },
        { "nome": "pilates", "ativo": data.pilates },
        { "nome": "personal", "ativo": data.personal }
      ],
      "tempo": data.tempo,
      "preco": data.preco
    }

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
  })

  return (
    <section className="bg-black min-h-screen flex justify-center items-center p-4">
      <form
        onSubmit={handleSubmit(criar)}
        className="w-full mt-10 max-w-5xl flex flex-col md:flex-row justify-center items-center gap-10"
      >
        {/* Coluna da esquerda */}
        <section className="w-full md:w-1/2 flex flex-col gap-6 mt-6">
          <h1 className="text-yellow-400 uppercase font-bold text-3xl md:text-5xl text-center md:text-left">
            Criar Plano
          </h1>

          <div className="flex flex-col gap-2">
            <label className="text-white text-lg md:text-2xl uppercase font-bold">
              Nome
            </label>
            <input
              className="border-2 border-white rounded h-10 text-gray-100 px-2 bg-transparent focus:outline-none focus:border-yellow-400"
              placeholder="Digite o nome do plano"
              type="text"
              required
              {...register("nome")}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-white text-lg md:text-2xl uppercase font-bold">
              Preço
            </label>
            <input
              className="border-2 border-white rounded h-10 text-gray-100 px-2 bg-transparent focus:outline-none focus:border-yellow-400"
              placeholder="Digite o valor do plano"
              type="text"
              required
              {...register("preco")}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-white text-lg md:text-2xl uppercase font-bold">
              Tempo (em meses)
            </label>
            <input
              className="border-2 border-white rounded h-10 text-gray-100 px-2 bg-transparent focus:outline-none focus:border-yellow-400"
              placeholder="Digite o tempo (em meses)"
              type="text"
              required
              {...register("tempo")}
            />
          </div>

          <button
            className="hidden md:block text-xl md:text-2xl w-full uppercase text-black font-bold cursor-pointer hover:bg-transparent hover:text-white hover:border-2 hover:border-yellow-400 transition-all duration-300 bg-yellow-400 rounded py-2"
            type="submit"
          >
            Criar
          </button>
        </section>

        {/* Coluna da direita */}
        <section className="w-full md:w-1/2 flex flex-col gap-4 mt-6">
          <h2 className="text-yellow-400 uppercase font-bold text-2xl md:text-4xl text-center md:text-left">
            Benefícios
          </h2>

          {[
            "Musculacao",
            "Crossfit",
            "Funcional",
            "Danca",
            "Pilates",
            "Personal",
          ].map((beneficio, index) => (
            <div key={index} className="flex items-center justify-between">
              <label className="text-white text-lg md:text-2xl uppercase font-bold">
                {beneficio} incluso?
              </label>
              <input
                className="size-5 cursor-pointer"
                type="checkbox"
                {...register(beneficio.toLowerCase().replace(" ", ""))}
              />
            </div>
          ))}
        </section>
        <button
          className="md:hidden text-xl md:text-2xl w-full uppercase text-black font-bold cursor-pointer hover:bg-transparent hover:text-white hover:border-2 hover:border-yellow-400 transition-all duration-300 bg-yellow-400 rounded py-2"
          type="submit"
        >
          Criar
        </button>
      </form>
    </section>

  )
}

export default CriarPlano