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

    const semPlanos = !listaPlanos || listaPlanos.length === 0;
    const isAdmin = usuario && usuario.role === "Admin";

    return (
        <section className="bg-black opacity-90 p-6">
            <section className="flex flex-col items-center gap-8 mt-20 min-h-screen">

                {!semPlanos ? (
                    <section className="flex flex-wrap justify-center items-center gap-6">
                        {listaPlanos.map((plano) => (
                            <CardPlano
                                key={plano.id}
                                id={plano.id}
                                isAdmin={isAdmin}
                                nomePlano={plano.nome}
                                beneficios={plano.beneficios}
                                tempo={plano.tempo}
                                preco={plano.preco}
                            />
                        ))}

                        {isAdmin && (
                            <Link
                                to="/criarPlano"
                                className="bg-gray-900 border-4 border-dashed border-gray-700 rounded-3xl p-6 flex items-center justify-center w-[320px] h-[550px] cursor-pointer hover:border-gray-500 hover:text-gray-500 text-gray-700"
                            >
                                <MdOutlineAdd className="size-30" />
                            </Link>
                        )}
                    </section>
                ) : (
                    <section className="flex flex-col items-center gap-6">
                        <h1 className="uppercase font-extrabold text-4xl text-yellow-400 text-center">
                            Nenhum plano disponível
                        </h1>

                        {isAdmin && (
                            <Link
                                to="/criarPlano"
                                className="bg-gray-900 border-4 border-dashed border-gray-700 rounded-3xl p-6 flex items-center justify-center w-[320px] h-[550px] cursor-pointer hover:border-gray-500 hover:text-gray-500 text-gray-700"
                            >
                                <MdOutlineAdd className="size-30" />
                            </Link>
                        )}
                    </section>
                )}
            </section>
        </section>
    );
};

export default Planos;