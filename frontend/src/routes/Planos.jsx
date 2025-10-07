import axios from "axios";
import CardPlano from "../components/CardPlano";
import { useState, useEffect } from "react";
import { MdOutlineAdd } from "react-icons/md";
import { Link } from "react-router-dom";

const Planos = ({ usuario }) => {
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
        <section className="bg-black opacity-90 p-6">
            <section className="flex flex-wrap mt-20 md:mt-10 justify-center items-center gap-6 min-h-screen">
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
                { usuario && usuario.role === "Admin" ?
                    (
                        <Link 
                            to="/criarPlano"
                            className="bg-gray-900 border-4 border-dashed border-gray-700 rounded-3xl p-6 flex items-center justify-center w-[320px] h-[550px] cursor-pointer hover:border-gray-500 hover:text-gray-500 text-gray-700"
                        >
                            <MdOutlineAdd className="size-30"/>
                        </Link>
                    ) : (null)
                }
            </section>
        </section>

    );
};

export default Planos;
