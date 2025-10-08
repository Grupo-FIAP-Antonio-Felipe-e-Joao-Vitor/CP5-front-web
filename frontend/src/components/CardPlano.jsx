import axios from "axios";
import Swal from "sweetalert2";
import { MdBlock, MdDone, MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const CardPlano = ({ id, isAdmin, nomePlano, beneficios, tempo, preco, token, setToken, setUsuario, pegaPlanos }) => {

  const navigate = useNavigate()
  const url = "http://localhost:5001/planos";

  async function removerPlano(id) {
    try {
      const result = await Swal.fire({
        title: "Excluir plano",
        text: "Tem certeza de que deseja excluir o plano?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim",
        cancelButtonText: "Não"
      })


      if (result.isConfirmed) {
        const response = await axios.delete(`${url}/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        })

        if (response.status === 200) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          pegaPlanos()
        }
      }


    } catch (error) {
      const status = error.response.status
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
    }
  }

  return (
    <div className="w-[320px] h-[550px] relative bg-gray-900 border border-gray-700 rounded-3xl p-6 flex flex-col items-center justify-between shadow-lg hover:shadow-2xl transition-shadow duration-300">

      {isAdmin ? (
        <div className="flex gap-2 absolute left-3 bottom-3">
          <span
            onClick={() => removerPlano(id)}
            className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300 text-2xl"
          >
            <MdOutlineDelete />
          </span>
          <span
            className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300 text-2xl"
          >
            <MdOutlineEdit />
          </span>
        </div>
      ) : (null)}

      <div className="text-yellow-400 font-extrabold uppercase px-4 py-1 rounded-full text-3xl mb-4">
        {nomePlano}
      </div>

      <div className="w-full border-t border-gray-700 mb-4"></div>

      {/* Lista de benefícios */}
      <ul className="w-full text-white flex flex-col gap-3 mb-6">
        {beneficios.map((beneficio) =>
          beneficio.ativo === true ? (
            (
              <li key={beneficio.nome} className="flex items-center gap-3" >
                <MdDone className="text-green-400 text-2xl" />
                <span className="text-green-500 font-semibold text-lg">{beneficio.nome}</span>
              </li>
            )
          ) : ((
            <li key={beneficio.nome} className="flex items-center gap-3" >
              <MdBlock className="text-red-500 text-2xl" />
              <span className="text-red-500 font-semibold text-lg">{beneficio.nome}</span>
            </li>
          ))
        )}
      </ul>

      {/* Divisor */}
      <div className="w-full border-t border-gray-700 my-4"></div>

      {/* Preço e duração */}
      <div className="flex flex-col items-center mb-4">
        {
          tempo > 1 ? (
            <span className="text-gray-300 uppercase text-sm">
              {tempo} Meses
            </span>
          ) : (
            <span className="text-gray-300 uppercase text-sm">
              {tempo} Mês
            </span>
          )
        }
        <span className="text-yellow-400 font-bold text-3xl mt-1">
          R${preco}
        </span>
      </div>

      {/* Botão de ação */}
      <button className="bg-yellow-400 text-gray-900 font-bold py-2 px-6 rounded-full uppercase cursor-pointer mt-2 hover:bg-yellow-500 transition-all duration-200 animate-bounce">
        Assinar Agora
      </button>
    </div >
  )
}

export default CardPlano