import React from 'react'

const CardModalidade = ({ modalidade, icone, frase }) => {
    return (
        <div className="bg-gray-900 border border-gray-700 w-[300px] h-[300px] flex flex-col items-center justify-around p-2 rounded-2xl">
            <span className='text-yellow-400 font-bold uppercase text-2xl'>{modalidade}</span>
            <span className="text-white text-8xl">
                {icone}
            </span>
            <p className="text-xl text-white text-center font-bold uppercase">{frase}</p>
        </div>
    )
}

export default CardModalidade