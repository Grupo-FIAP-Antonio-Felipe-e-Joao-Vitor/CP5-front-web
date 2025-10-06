import { MdFitnessCenter, MdElectricBolt, MdSupportAgent, MdDirectionsRun, MdMusicNote, MdSelfImprovement, MdPerson, MdBlock, MdDone } from "react-icons/md";
import HeroIMG from "../assets/hero.png";
import CardBeneficio from "../components/CardBeneficio";
import Titulo from "../components/Titulo";
import CardModalidade from "../components/CardModalidade";

const Home = () => {
    return (
        <section className="bg-black opacity-90">
            <section className="relative min-h-screen flex items-center justify-end p-8">
                <img
                    src={HeroIMG}
                    alt="Imagem principal"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black opacity-70"></div>

                <div className="relative z-10 text-white flex flex-col items-end">
                    <h1 className="text-white text-5xl mb-2 uppercase font-extrabold text-center md:text-right">Transforme seu corpo hoje</h1>
                    <h2 className="text-yellow-400 text-2xl md:text-4xl max-w-xl font-bold text-center md:text-right">Treinos personalizados, ambiente moderno e profissionais dedicados.</h2>
                </div>
            </section>
            <section className="min-h-screen flex flex-col justify-center items-center bg-black opacity-90">
                <Titulo frase="Benefícios" />
                <section className="flex flex-col md:flex-row max-w-4xl mt-10 gap-10">
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
            <section className="min-h-screen flex flex-col items-center bg-black opacity-90">
                <Titulo frase="Modalidade e serviços" />
                <section className="grid grid-cols-1 md:grid-cols-3 m-10 gap-10">
                    <CardModalidade
                        modalidade="Musculação"
                        icone={<MdFitnessCenter />}
                        frase="Ganhe força e definição com treinos completos e modernos"
                    />

                    <CardModalidade
                        modalidade="Crossfit"
                        icone={<MdElectricBolt />}
                        frase="Desafie seus limites com treinos intensos e dinâmicos"
                    />

                    <CardModalidade
                        modalidade="Funcional"
                        icone={<MdDirectionsRun />}
                        frase="Melhore seu condicionamento com exercícios para o dia a dia"
                    />

                    <CardModalidade
                        modalidade="Dança"
                        icone={<MdMusicNote />}
                        frase="Mova-se ao ritmo da música e divirta-se enquanto treina"
                    />

                    <CardModalidade
                        modalidade="Pilates"
                        icone={<MdSelfImprovement />}
                        frase="Equilibre corpo e mente com controle, força e flexibilidade"
                    />

                    <CardModalidade
                        modalidade="Personal Trainer"
                        icone={<MdPerson />}
                        frase="Acompanhamento exclusivo para alcançar seus objetivos"
                    />
                </section>
            </section>
            <section className="min-h-screen flex flex-col items-center bg-black opacity-90">
                <Titulo frase="Planos" />
                <section className="flex flex-col md:flex-row gap-4 mt-10">
                    <div className=" w-[300px] h-[300px] flex flex-col items-center justify-around border-2 border-white p-2 rounded-2xl">
                        <span className='text-yellow-400 font-bold uppercase text-2xl'>Plano Black</span>
                        <ul className="text-white text-4xl">
                            <li className="flex items-center gap-2">
                                <MdDone className="size-5 text-green-400"/>
                                <span className="text-green-500 text-xl font-bold">Pilates</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MdDone className="size-5 text-green-400"/>
                                <span className="text-green-500 text-xl font-bold">Dança</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MdDone className="size-5 text-green-400"/>
                                <span className="text-green-500 text-xl font-bold">Crossfit</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MdDone className="size-5 text-green-400"/>
                                <span className="text-green-500 text-xl font-bold">Funcional</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MdDone className="size-5 text-green-400"/>
                                <span className="text-green-500 text-xl font-bold">Personal Trainer</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MdDone className="size-5 text-green-400"/>
                                <span className="text-green-500 text-xl font-bold">Musculação</span>
                            </li>
                        </ul>
                        <p>
                            <span className="text-xl text-white text-center uppercase">3 Messes - </span>
                            <span className="text-2xl text-yellow-400 text-center font-bold uppercase">R$120,99</span>
                        </p>
                    </div>

                    <div className=" w-[300px] h-[300px] flex flex-col items-center justify-around border-2 border-white p-2 rounded-2xl">
                        <span className='text-yellow-400 font-bold uppercase text-2xl'>Plano Fit</span>
                        <ul className="text-white text-4xl">
                            <li className="flex items-center gap-2">
                                <MdDone className="size-5 text-green-400"/>
                                <span className="text-green-500 text-xl font-bold">Pilates</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MdDone className="size-5 text-green-400"/>
                                <span className="text-green-500 text-xl font-bold">Dança</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MdDone className="size-5 text-green-400"/>
                                <span className="text-green-500 text-xl font-bold">Crossfit</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MdDone className="size-5 text-green-400"/>
                                <span className="text-green-500 text-xl font-bold">Funcional</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MdBlock className="size-5 text-red-500"/>
                                <span className="text-red-500 text-xl font-bold">Personal Trainer</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MdBlock className="size-5 text-red-500"/>
                                <span className="text-red-500 text-xl font-bold">Musculação</span>
                            </li>
                        </ul>
                        <p>
                            <span className="text-xl text-white text-center uppercase">3 Messes - </span>
                            <span className="text-2xl text-yellow-400 text-center font-bold uppercase">R$99,99</span>
                        </p>
                    </div>

                    <div className=" w-[300px] h-[300px] flex flex-col items-center justify-around border-2 border-white p-2 rounded-2xl">
                        <span className='text-yellow-400 font-bold uppercase text-2xl'>Plano Smart</span>
                        <ul className="text-white text-4xl">
                            <li className="flex items-center gap-2">
                                <MdDone className="size-5 text-green-400"/>
                                <span className="text-green-500 text-xl font-bold">Pilates</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MdDone className="size-5 text-green-400"/>
                                <span className="text-green-500 text-xl font-bold">Dança</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MdBlock className="size-5 text-red-500"/>
                                <span className="text-red-500 text-xl font-bold">Crossfit</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MdBlock className="size-5 text-red-500"/>
                                <span className="text-red-500 text-xl font-bold">Funcional</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MdBlock className="size-5 text-red-500"/>
                                <span className="text-red-500 text-xl font-bold">Personal Trainer</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MdBlock className="size-5 text-red-500"/>
                                <span className="text-red-500 text-xl font-bold">Musculação</span>
                            </li>
                        </ul>
                        <p>
                            <span className="text-xl text-white text-center uppercase">3 Messes - </span>
                            <span className="text-2xl text-yellow-400 text-center font-bold uppercase">R$49,99</span>
                        </p>
                    </div>
                </section>
            </section>
        </section>
    );
};

export default Home;
