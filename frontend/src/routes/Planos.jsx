import axios from "axios";
import CardPlano from "../components/CardPlano";
import { useState, useEffect } from "react";

const Planos = () => {
  const [listaPlanos, setListaPlanos] = useState([]);

  const url = "http://localhost:5001/planos";

  async function pegaPlanos() {
    try {
      const response = await axios.get(url);
      const planos = response.data.planos;
      setListaPlanos(planos);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    pegaPlanos();
  }, []);

  return (
    <section className="flex flex-wrap justify-center items-center gap-6 min-h-screen bg-black opacity-90 p-6">
      {listaPlanos && listaPlanos.length > 0 ? (
        listaPlanos.map((plano) => (
          <CardPlano
            key={plano.id}
            nomePlano={plano.nome}
            beneficios={plano.beneficios}
            tempo={plano.tempo}
            preco={plano.preco}
          />
        ))
      ) : (
        <h1 className="uppercase font-extrabold text-4xl text-yellow-400">
          Nenhum plano disponível
        </h1>
      )}
    </section>
  );
};

export default Planos;
