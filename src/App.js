import { useEffect, useState } from "react";
import { data } from "./data";


const App = () => {
 

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [text,setText]  = useState('');

  useEffect(() => {
    let timer;
    if (timerRunning) {
      timer = setInterval(() => setTime((prevTime) => prevTime + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [timerRunning]);

  const handleOptionClick = (isCorrect,text) => {
    setSelectedOption(isCorrect);
    setText(text);
  };

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      if (selectedOption) {
        setScore((prevScore) => prevScore + 1);
      }
      setSelectedOption(null);
      if (currentQuestion < data.length - 1) {
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      } else {
        setShowScore(true);
        setTimerRunning(false);
      }
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prevQuestion) => prevQuestion - 1);
    }
  };

  const handleStartQuiz = () => {
    setTimerRunning(true);
  };

  const handleResetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowScore(false);
    setScore(0);
    setTime(0);
    setTimerRunning(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-700 text-white">
    <div className="w-full max-w-md p-4 bg-slate-800 rounded shadow-md">
      {showScore ? (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Your Score: {score}</h1>
          <p className="mb-4">You got {score} out of {data.length} correct.</p>
          <button onClick={handleResetQuiz} className="px-4 py-2 bg-blue-500 text-white rounded">
            Reset Quiz
          </button>
        </div>
      ) : (
        <div>
          {timerRunning ? (
            <div>
              <div className="flex justify-between mb-4">
                <h1 className="text-xl font-bold">Question {currentQuestion + 1}/{data.length}</h1>
                <span className="text-xl font-bold">Time: {time}s</span>
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-semibold">{data[currentQuestion].questionText}</h2>
                <div className="mt-4">
                  {data[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptionClick(option.isCorrect,option?.text)}
                      className={`block w-full px-4 py-2 mt-2 border rounded ${text === option?.text  ? 'bg-green-500' : 'bg-slate-600'}`}
                    >
                      {option.text}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={handlePreviousQuestion}
                  className="px-4 py-2 bg-gray-500 text-white rounded"
                  disabled={currentQuestion === 0}
                >
                  Previous
                </button>
                <button
                  onClick={handleNextQuestion}
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  {currentQuestion === data.length - 1 ? 'Submit Quiz' : 'Next'}
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">Welcome to the Quiz!</h1>
              <button onClick={handleStartQuiz} className="px-4 py-2 bg-blue-500 text-white rounded">
                Start Quiz
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  </div>
  );
};

export default App;