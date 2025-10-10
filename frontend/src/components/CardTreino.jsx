import axios from "axios";
import { MdOutlineDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CardTreino = ({ id, treino, repeticoes, serie, dia, feito, onToggle, token, setToken, setUsuario, pegaTreinos }) => {
    const navigate = useNavigate();

    function formatData(data) {
        const [ano, mes, diaNum] = data.split("-");
        return `${diaNum}/${mes}/${ano}`;
    }

    const url = "http://localhost:5001/treino"

    async function deletar() {
        try {
            const result = await Swal.fire({
                title: "Excluir treino",
                text: "Tem certeza de que deseja excluir o treino?",
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
                        title: "Treino deletado com sucesso.",
                        icon: "success"
                    })
                    pegaTreinos()
                }
            }
            await axios.put(`${url}/${id}`, { feito: !feito }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
        } catch (error) {
            const status = error.response.status
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

    async function finalizarTreino() {
        try {
            await axios.put(`${url}/${id}`, { feito: !feito }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
        } catch (error) {
            const status = error.response.status
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
        <div
            className={`transition-all duration-300 p-4 relative rounded-2xl w-full shadow-lg border
        ${feito ? "bg-green-700/40 border-green-500" : "bg-gray-900 border-gray-700"}
      `}
        >
            <MdOutlineDelete
                className="absolute text-gray-400 hover:text-white text-2xl right-3 top-3 cursor-pointer"
                onClick={() => deletar()}
            />

            <div
                className={`flex flex-col gap-2 text-white ${feito ? "opacity-60 line-through" : ""
                    }`}
            >
                <p className="text-xl font-bold uppercase">
                    Treino: <span className="font-normal">{treino}</span>
                </p>
                <p className="text-xl font-bold uppercase">
                    Repetições: <span className="font-normal">{repeticoes}</span>
                </p>
                <p className="text-xl font-bold uppercase">
                    Séries: <span className="font-normal">{serie}</span>
                </p>
                <p className="text-xl font-bold uppercase">
                    Dia: <span className="font-normal">{formatData(dia)}</span>
                </p>
            </div>

            <div className="flex items-center justify-between mt-4 text-white">
                <label className="flex items-center gap-3 text-xl font-bold cursor-pointer select-none">
                    <span>Feito?</span>
                    <input
                        type="checkbox"
                        checked={feito}
                        onChange={onToggle}
                        onClick={() => finalizarTreino()}
                        className="size-5 accent-green-500 cursor-pointer"
                    />
                </label>
            </div>
        </div>
    );
};

export default CardTreino;
