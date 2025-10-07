import Titulo from '../components/Titulo'
import SobreIMG from "../assets/sobreImage.png";

const Sobre = () => {
    return (
        <section className='flex flex-col min-h-screen mt-10 bg-black opacity-90 justify-center items-center'>
            
            <section className='flex items-center'>
                <section className='w-full md:w-1/2 flex flex-col gap-4 p-8'>
                    <h1 className="text-yellow-400 uppercase font-bold text-4xl text-center md:text-left md:text-5xl mt-10">Sobre a Smart Gym</h1>
                    <p className='text-2xl md:text-justify text-white'>
                        Na <span className='font-bold'>Smart Gym</span>, acreditamos que treinar é mais do que exercitar o corpo — é um estilo de vida. Nosso propósito é ajudar você a conquistar seus objetivos com saúde, foco e determinação, em um ambiente moderno e acolhedor.
                    </p>
                    <p className='text-2xl md:text-justify text-white'>
                        Com <span className='font-bold'>equipamentos de última geração, profissionais qualificados e planos personalizados</span>, oferecemos a estrutura ideal para quem busca resultados reais, seja na <span className='font-bold'>musculação, funcional, crossfit, pilates, dança ou com o acompanhamento de um personal trainer</span>.
                    </p>
                    <p className='text-2xl md:text-justify text-white'>
                        Aqui, cada treino é pensado para o <span className='font-bold'>seu ritmo e suas metas</span>. Nossa equipe está sempre pronta para <span className='font-bold'>orientar, motivar e acompanhar cada evolução de perto.</span>
                    </p>
                    <p className='text-2xl md:text-justify text-white'>
                        Na <span className='font-bold'>Smart Gym</span>, você encontra muito mais do que uma academia — encontra um <span className='font-bold'>espaço de superação, energia e bem-estar</span>.
                    </p>
                </section>
                <section className='hidden md:block md:w-1/2'>
                    <img className='h-screen w-full object-cover object-center' src={SobreIMG} alt="Imagem sobre" />
                </section>
            </section>
        </section>
    )
}

export default Sobre