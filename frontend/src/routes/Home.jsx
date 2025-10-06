import { MdFitnessCenter, MdElectricBolt, MdSupportAgent } from "react-icons/md";
import HeroIMG from "../assets/hero.png";
import CardBeneficio from "../components/CardBeneficio";

const Home = () => {
    return (
        <>
            <section className="relative min-h-screen flex items-center justify-end p-8">
                <img
                    src={HeroIMG}
                    alt="Imagem principal"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black opacity-70"></div>

                <div className="relative z-10 text-white flex flex-col items-end">
                    <h1 className="text-white text-5xl mb-2 uppercase font-extrabold">Transforme seu corpo hoje</h1>
                    <h2 className="text-yellow-400 text-4xl max-w-xl font-bold text-right">Treinos personalizados, ambiente moderno e profissionais dedicados.</h2>
                </div>
            </section>
            <section className="min-h-screen flex flex-col justify-center items-center bg-black opacity-90">
                <h1 className="text-yellow-400 uppercase font-bold text-5xl">Benefícios</h1>
                <section className="flex justify-between max-w-4xl mt-10 gap-10">
                    <CardBeneficio
                        icone={<MdFitnessCenter />}
                        frase={
                            <>
                                Treinos feitos sob medida com{" "}
                                <span className="text-yellow-400">acompanhamento profissional</span>
                            </>
                        }
                    />

                    <CardBeneficio
                        icone={<MdElectricBolt />}
                        frase={
                            <>
                                Equipamentos de {" "}
                                <span className="text-yellow-400">última geração</span>
                            </>
                        }
                    />

                    <CardBeneficio
                        icone={<MdSupportAgent />}
                        frase={
                            <>
                                Suporte {" "}
                                <span className="text-yellow-400">Profissional</span>
                            </>
                        }
                    />
                </section>
            </section>
        </>
    );
};

export default Home;
