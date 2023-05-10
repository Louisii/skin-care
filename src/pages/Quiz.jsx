import logo from '../assets/logo.png'

const Quiz = () => {
    return (
        <>
            <div className="flex flex-col items-center">
                <div className="text-center">
                    <img src={logo} className="p-6 w-60 sm:w-72" alt="Logo" />
                </div>
                <p className="text-justify sm:max-w-2xl font-semibold text-gray-700 mt-10">
                    Qual opção melhor define sua pele?
                </p>
                <div className="flex flex-col items-center mt-10"> {/* Classe 'flex-col' adicionada */}
                    <button className=" bg-gradient-to-r from-[#78995C] to-[#ADBD8E] p-2 w-64 rounded-md shadow-md font-semibold text-white hover:bg-gradient-to-r hover:from-[#68A534] hover:to-[#9BBC5B] transition-all duration-300 mb-2">
                        Seca
                    </button>
                    <button className="bg-gradient-to-r from-[#78995C] to-[#ADBD8E] p-2 w-64 rounded-md shadow-md font-semibold text-white hover:bg-gradient-to-r hover:from-[#68A534] hover:to-[#9BBC5B] transition-all duration-300 mb-2">
                        Mista
                    </button>
                    <button className="bg-gradient-to-r from-[#78995C] to-[#ADBD8E] p-2 w-64 rounded-md shadow-md font-semibold text-white hover:bg-gradient-to-r hover:from-[#68A534] hover:to-[#9BBC5B] transition-all duration-300 mb-2">
                        Oleosa
                    </button>
                </div>

            </div>
            <div className='text-right'>
                <button className='text-gray-300 bg-gray-100 hover:bg-white hover:text-gray-600 p-1 px-2 rounded-lg text-right mt-4 mr-4'>Proximo </button>
            </div>

        </>

    )
}

export default Quiz