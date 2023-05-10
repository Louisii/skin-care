import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = [
    "Qual é o seu tipo de pele?",
    "Qual é a sua preocupação principal em relação à pele?",
    "Qual é o seu nível de exposição ao sol?",
    "Você usa maquiagem regularmente?",
    "Como você descreveria a sensibilidade da sua pele?",
    "Qual é a sua idade aproximada?",
  ];

  const alternatives = [
    [
      "Seca",
      "Mista",
      "Oleosa"
    ],
    [
      "Acne",
      "Envelhecimento precoce",
      "Manchas",
      "Sensibilidade"
    ],
    [
      "Exposição diária",
      "Exposição ocasional",
      "Exposição mínima"
    ],
    [
      "Sim, todos os dias",
      "Ocasionalmente, em ocasiões especiais",
      "Raramente ou nunca"
    ],
    [
      "Sensível (irrita-se facilmente)",
      "Normal (sem grandes sensibilidades)",
      "Resistente (tolera bem produtos e tratamentos)"
    ],
    [
      "Abaixo de 20 anos",
      "20-30 anos",
      "30-40 anos",
      "Acima de 40 anos"
    ],
  ];

  const answers = [
    [
      "Recomenda-se o uso de hidratantes ricos em ingredientes emolientes e umectantes para ajudar a hidratar a pele seca.",
      "Indica-se o uso de produtos que controlem a oleosidade na zona T, enquanto mantêm a hidratação nas áreas secas do rosto.",
      "Recomenda-se o uso de produtos não comedogênicos e livres de óleo para controlar a produção excessiva de sebo na pele."
    ],
    [
      "Indica-se o uso de produtos com ingredientes como ácido salicílico e peróxido de benzoíla para ajudar a tratar a acne.",
      "Recomenda-se o uso de produtos com ingredientes antioxidantes, como vitamina C e retinol, para ajudar a combater os sinais de envelhecimento.",
      "Indica-se o uso de produtos com ingredientes clareadores, como ácido kójico e hidroquinona, para ajudar a reduzir as manchas na pele.",
      "Recomenda-se o uso de produtos suaves e hipoalergênicos, sem fragrâncias ou corantes, para minimizar a irritação na pele sensível."
    ],
    [
      "Recomenda-se o uso diário de protetor solar com alto fator de proteção (FPS) e reaplicação frequente para proteger a pele dos danos causados pelo sol.",
      "Indica-se o uso de protetor solar em ocasiões de exposição prolongada ao sol, como praia ou atividades ao ar livre",
      "Recomenda-se o uso de protetor solar em situações de maior exposição ao sol, como em viagens ou eventos ao ar livre"
    ],
    [
      "Indica-se a utilização de produtos de limpeza eficazes para remover completamente a maquiagem e evitar obstrução dos poros.",
      "Recomenda-se uma rotina de limpeza adequada após o uso de maquiagem para remover resíduos e manter a pele saudável.",
      "Ainda assim, é importante manter uma rotina de cuidados com a pele básica, incluindo limpeza e hidratação"
    ],
    [
      "Recomenda-se o uso de produtos suaves e sem ingredientes irritantes, além de evitar exposição a agentes agressivos, como perfumes ou produtos químicos fortes.",
      "Indica-se o uso de produtos adequados para o seu tipo de pele, mantendo uma rotina básica de cuidados",
      "Ainda assim, é importante manter uma rotina de cuidados com a pele para manter a saúde e a aparência da pele."
    ],
    [
      "É importante evitar o uso excessivo de produtos agressivos e manter uma dieta equilibrada para promover uma pele saudável.",
      "Recomenda-se o uso de hidratantes com ingredientes antioxidantes, como vitamina C e ácido hialurônico, para prevenir os primeiros sinais de envelhecimento.",
      "Recomenda-se o uso de produtos com ingredientes anti-idade, como retinol e peptídeos, para ajudar a reduzir os sinais visíveis de envelhecimento.",
      "Recomenda-se o uso de produtos com ingredientes como ácido hialurônico, colágeno e ácido retinoico para ajudar a melhorar a elasticidade, firmeza e textura da pele."
    ],
  ];

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="text-center">
          <img src={logo} className="p-6 w-60 sm:w-72" alt="Logo" />
        </div>

        <p className="text-justify sm:max-w-2xl font-semibold text-gray-700 mt-10">
          {questions[currentQuestion]}
        </p>
        <div className="flex flex-col items-center mt-10">
          {alternatives[currentQuestion].map((alternative, index) => (
            <button
              key={index}
              className="bg-gradient-to-r from-[#78995C] to-[#ADBD8E] p-2 w-64 rounded-md shadow-md font-semibold text-white hover:bg-gradient-to-r hover:from-[#68A534] hover:to-[#9BBC5B] transition-all duration-300 mb-2"
            >
              {alternative}
            </button>
          ))}
        </div>
      </div>
      <div className="text-right">
        <button
          className="text-gray-300 bg-gray-100 hover:bg-white hover:text-gray-600 p-1 px-2 rounded-lg text-right mt-4 mr-4"
          onClick={handleNextQuestion}
        >
          Próximo
        </button>
      </div>
    </>
  );
};

export default Quiz;
