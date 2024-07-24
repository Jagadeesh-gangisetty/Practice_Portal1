import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';

const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Shakespeare", "Dickens", "Tolstoy", "Hemingway"],
        answer: "Shakespeare"
    },
];


const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswerClick = (selectedOption) => {
        if (selectedOption === quizData[currentQuestionIndex].answer) {
            setScore(score + 1);
        }

        if (currentQuestionIndex < quizData.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowResult(true);
        }
    };

//     return (
//         <div>
//             {showResult ? (
//                     <div>
//                         <h2>Quiz Completed!</h2>
//                         <p>Your score is {score} out of {quizData.length}</p>
//                     </div>            
//                 ) : (
               
//                     <div>
//                     <h2>{quizData[currentQuestionIndex].question}</h2>
//                     <div>
//                         {quizData[currentQuestionIndex].options.map((option, index) => (
//                             <button key={index} onClick={() => handleAnswerClick(option)}>
//                                 {option}
//                             </button>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Quiz;


return (
     <div>
         {showResult ? (
             <Result score={score} totalQuestions={quizData.length} />
         ) : (
             <Question
                 data={quizData[currentQuestionIndex]}
                 onAnswerClick={handleAnswerClick}
             />
         )}
     </div>
);
};

export default Quiz;