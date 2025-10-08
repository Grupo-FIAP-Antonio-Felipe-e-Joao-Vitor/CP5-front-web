import { MdFitnessCenter, MdElectricBolt, MdSupportAgent, MdDirectionsRun, MdMusicNote, MdSelfImprovement, MdPerson, MdBlock, MdDone } from "react-icons/md";
import HeroIMG from "../assets/hero.png";
import CardBeneficio from "../components/CardBeneficio";
import Titulo from "../components/Titulo";
import CardModalidade from "../components/CardModalidade";
import CardPlano from "../components/CardPlano";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [planosDestaque, setPlanosDestaque] = useState([]);

  const url = "http://localhost:5001/planos"

  async function pegarPlanos() {
    try {
      const response = await axios.get(`${url}/3`);
      if (response.status === 200) {
        setPlanosDestaque(response.data.planos);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    pegarPlanos()
  }, [])

  return (
    <section className="bg-black opacity-90">
      <section className="relative md:min-h-screen h-100 flex items-end md:items-center justify-end p-8">
        <img
          src={HeroIMG}
          alt="Imagem principal"
          className="absolute md:blur-[5px] inset-0 w-full md:h-170 h-full object-cover object-left"
        />

        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="relative z-10 text-white flex flex-col items-start md:items-end">
          <h1 className="text-white text-3xl md:text-5xl mb-2 uppercase font-extrabold text-left md:text-right">Transforme seu corpo hoje</h1>
          <h2 className="text-yellow-400 text-xl md:text-4xl max-w-xl font-bold text-left md:text-right">Treinos personalizados, ambiente moderno e profissionais dedicados.</h2>
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
        <section className="min-h-screen mb-10">

          {planosDestaque?.length > 0 ? (
            <section className="flex flex-col gap-8 items-center">
              <section className="flex flex-col md:flex-row gap-8 md:gap-4 mt-10 justify-center items-center">
                {planosDestaque.map((plano) => (
                  <CardPlano
                    key={plano.id}
                    nomePlano={plano.nome}
                    beneficios={plano.beneficios}
                    tempo={plano.tempo}
                    preco={plano.preco}
                  />
                ))}
              </section>
              <Link
                className='h-8 w-45 text-blue-950 font-bold flex items-center justify-center bg-yellow-400 rounded hover:bg-transparent hover:border-2 hover:border-yellow-400 hover:text-white transition-colors duration-300'
                to="/planos"
              >
                Ver todos os planos
              </Link>
            </section>


          ) : (
            <p className="text-2xl text-gray-400 uppercase font-bold">Nenhum plano existente</p>
          )}
        </section>
      </section>
    </section>
  );
};

export default Home;
