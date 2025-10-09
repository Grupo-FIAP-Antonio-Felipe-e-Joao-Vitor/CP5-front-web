import { MdStar } from "react-icons/md";

const CardDepoimento = ({ imagem, nome, email, depoimento }) => {
    return (
        <div className="flex flex-col justify-between items-center p-6  w-[300px] h-[550px] bg-gray-900 border border-gray-700  rounded-2xl">
            <div className="flex flex-col gap-2 items-center justify-center">
                <div className="w-[70px] h-[70px] ">
                    <img
                        className="rounded-full border-2 border-white w-full h-full object-cover object-center"
                        src={imagem}
                        alt="Imagem de usuario"
                    />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <span
                        className="text-3xl uppercase font-extrabold text-yellow-400"
                    >
                        {nome}
                    </span>
                    <span
                        className="text-2xl font-bold text-white"
                    >
                        {email}
                    </span>
                </div>
            </div>
            <div>
                <p className="text-xl text-white">
                    {depoimento}
                </p>
            </div>
            <div className="flex flex-row gap-2">
                <span
                    className="text-2xl text-yellow-400"
                >
                    <MdStar />
                </span>
                <span
                    className="text-2xl text-yellow-400"
                >
                    <MdStar />
                </span>
                <span
                    className="text-2xl text-yellow-400"
                >
                    <MdStar />
                </span>
                <span
                    className="text-2xl text-yellow-400"
                >
                    <MdStar />
                </span>
                <span
                    className="text-2xl text-yellow-400"
                >
                    <MdStar />
                </span>
            </div>
        </div>
    )
}

export default CardDepoimento