import logo from '../assets/logo.png'

const Start = () => {
    return (
        <>
            <div className="flex flex-col items-center">
                <div className="text-center">
                    <img src={logo} className="p-6 w-60 sm:w-72" alt="Logo" />
                </div>
                <p className="text-justify sm:max-w-2xl font-semibold text-gray-700 mt-10">
                    Descubra o seu cuidado de pele personalizado!
                    Nosso app faz perguntas sobre seu tipo de pele
                    para criar um plano de cuidados personalizado.
                    Tenha uma pele radiante e jovem com apenas alguns cliques!
                </p>
                <div className='mt-10'>
                    <button className="bg-gradient-to-r from-[#78995C] to-[#ADBD8E] p-4 rounded-md shadow-md font-semibold text-white hover:bg-gradient-to-r hover:from-[#68A534] hover:to-[#9BBC5B] transition-all duration-300">
                        Crie sua Rotina de Skin Care Personalizada!
                    </button>
                </div>
            </div>

        </>
    )
}

export default Start 