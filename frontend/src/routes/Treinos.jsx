import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Titulo from "../components/Titulo";
import { MdOutlineAdd } from "react-icons/md";
import CardTreino from "../components/CardTreino";

const Treinos = ({ usuario, token, setToken, setUsuario }) => {
  const [listaTreinos, setListaTreinos] = useState([]);
  const navigate = useNavigate()

  const url = "http://localhost:5001/treinos";

  async function pegaTreinos() {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const treinos = response.data.treinos;
      setListaTreinos(treinos);
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

  function verificaUsuario() {
    if (!usuario) {
      navigate("/registro");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Você não está matriculado",
      });
    }
  }

  useEffect(() => {
    verificaUsuario();
    pegaTreinos();
  });

  const semTreinos = !listaTreinos || listaTreinos.length === 0;

  return (
    <section className="bg-black gap-5 opacity-90 min-h-screen flex flex-col items-center justify-center mt-15">
      {semTreinos ? (
        (
          <h1 className="uppercase font-extrabold text-4xl text-yellow-400 text-center">
            Nenhum treino disponível
          </h1>
        )
      ) : (
        <section className="flex flex-col gap-2 w-full p-8">
          <Titulo frase="Seus exercícios" />
          <section className="flex flex-col gap-2 mt-5">
            { listaTreinos.map((t) => (
              <CardTreino
                key={t.id} 
                id={t.id}
                treino={t.treino}
                repeticoes={t.repeticoes}
                serie={t.serie}
                dia={t.dia}
                feito={t.feito}
                token={token}
                pegaTreinos={pegaTreinos()}
              />
            )) }
          </section>
          
        </section>
      )}

      <Link
        className='h-8 w-40 text-blue-950 font-bold flex items-center justify-center gap-1 bg-yellow-400 rounded-xl hover:bg-transparent hover:border-2 hover:border-yellow-400 hover:text-white transition-colors uppercase duration-300'
        to="/criarTreino">
        <span>
          <MdOutlineAdd className="text-2xl" />
        </span>
        <span>
          Criar treino
        </span>
      </Link>
    </section>
  )
};

export default Treinos;
