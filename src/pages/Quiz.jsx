import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { questions, alternatives, answers } from '../data.jsx'

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [results, setResults] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelection = (index) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestion] = index;
    setSelectedAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleResults = () => {
    const mappedResults = selectedAnswers.map((answer, index) => {
      return answers[index][answer];
    });
    setResults(mappedResults);
    setShowResults(true)
  };

  const getButtonClass = (index) => {
    if (selectedAnswers[currentQuestion] === index) {
      return "bg-green-500 hover:bg-green-600";
    } else {
      return "bg-gradient-to-r from-[#78995C] to-[#ADBD8E] hover:from-[#68A534] hover:to-[#9BBC5B]";
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
              className={`p-2 w-64 rounded-md shadow-md font-semibold text-white ${getButtonClass(index)} transition-all duration-300 mb-2`}
              onClick={() => handleAnswerSelection(index)}
            >
              {alternative}
            </button>
          ))}
        </div>
      </div>
      <div className="text-right">



        {selectedAnswers.length === questions.length
          ?
          <button onClick={handleResults} className='bg-white text-gray-600 p-1 px-2 rounded-lg text-right mt-4 mr-4'>mostrar resultado</button>
          :
          <button className={` ${selectedAnswers.length == currentQuestion + 1 ? `bg-white text-gray-600` : `text-gray-300 bg-gray-100`} p-1 px-2 rounded-lg text-right mt-4 mr-4`} onClick={handleNextQuestion}>
            Próximo
          </button>
        }

        {showResults && (
          <div className='text-justify bg-white m-4 p-2'>
            {results.map((result, index) => (
              <p key={index}>{result}</p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Quiz;
