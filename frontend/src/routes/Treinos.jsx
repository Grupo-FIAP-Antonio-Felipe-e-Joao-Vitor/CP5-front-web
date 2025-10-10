import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Titulo from "../components/Titulo";

const Treinos = ({ usuario, token, setToken, setUsuario }) => {
  const [listaTreinos, setListaTreinos] = useState([]);

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
      const result = error.response.data;
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
        pegaTreinos();
        verificaUsuario();
    }, []);

    const semTreinos = !listaTreinos || listaTreinos.length === 0;

  return (
  <section className="bg-black opacity-90 min-h-screen flex flex-col mt-15">
    <Titulo
        frase="Seus exercícios"
    />

    {semTreinos ? (
        null
    ) : (
        
    )}

  </section>
)
};

export default Treinos;
