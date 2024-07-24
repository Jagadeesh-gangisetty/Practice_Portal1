import React, { useState } from 'react';
import "./Parents.css";
import { useLocation } from 'react-router-dom';

function Parents() {
    const [data, setData] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState(Array(3).fill(null).map(() => Array(3).fill(null)));
    const [result, setResult] = useState(false);
    const [score, setScore] = useState(0); 
    const location = useLocation();
    const { key } = location.state || {};
    const [subjectno, setSubjectno] = useState(key);
    const [questions, setQuestions] = useState([
        [
            { q: "1. Who is Lakshmi for Jaggu?", o: ["Mother", "Sister", "None"], ans: "Mother", m: false, s: false },
            { q: "2. Who is Jyothsna for Jaggu?", o: ["Mother", "Sister", "None"], ans: "Sister", m: false, s: false },
            { q: "3. Who is Mahanandi for Jaggu?", o: ["Father", "Brother", "None"], ans: "Father", m: false, s: false }
        ],
        [
            { q: "1. Who is Jaggu for Jo?", o: ["Younger Brother", "Elder Brother", "None"], ans: "Younger Brother", m: false, s: false },
            { q: "2. Who is Jaggu for Aravi?", o: ["Elder Brother", "Younger Brother", "None"], ans: "Younger Brother", m: false, s: false },
            { q: "3. Who is Jaggu for Tanu?", o: ["Younger Brother", "Elder Brother", "None"], ans: "Elder Brother", m: false, s: false }
        ]
    ]);

    const handleClick = (subjectNo, option, index) => {
        setSelectedOptions(prevSelectedOptions => {
            const newSelectedOptions = [...prevSelectedOptions];
            newSelectedOptions[subjectNo] = [...newSelectedOptions[subjectNo]];
            newSelectedOptions[subjectNo][index] = option;
            return newSelectedOptions;
        });
        setQuestions(prevQuestions => {
            const updatedQuestions = [...prevQuestions];
            updatedQuestions[subjectNo][index] = {
                ...updatedQuestions[subjectNo][index],
                s: true
            };
            return updatedQuestions;
        });
    };

    const onSubmit = () => {
        let calculatedScore = 0;
        selectedOptions[subjectno].forEach((option, index) => {
            if (option === questions[subjectno][index].ans) {
                calculatedScore += 1;
            }
        });
        setScore(calculatedScore);
        setResult(true);
    };

    const handleNext = () => {
        setData(data + 1);
    };

    const handleNext2 = () => {
        setSubjectno(1);
        setData(0);
    };
    const markForReview = (subjectNo, index) => {
        setQuestions(prevQuestions => {
            const updatedQuestions = [...prevQuestions];
            updatedQuestions[subjectNo][index] = {
                ...updatedQuestions[subjectNo][index],
                m: true
            };
          
            return updatedQuestions;
        });
    };

    return (
        <div>
            <div className='a4'>
                {questions[subjectno].map((item, index) => (
                    <button key={index} onClick={() => setData(index)}>{index + 1}</button>
                ))}
            </div>
            <h2>{questions[subjectno][data].q}</h2>
            <p>{subjectno}</p>
            <div>
                {questions[subjectno][data].o.map((option, index) => (
                    <p key={index} onClick={() => handleClick(subjectno, option, data)}>
                        <input
                            type='radio'
                            name={`question-${data}`}
                            value={option}
                            checked={selectedOptions[subjectno][data] === option}
                            readOnly
                        />
                        {option}
                    </p>
                ))}
            </div>
            {data < questions[subjectno].length - 1 && (
                <button onClick={handleNext}>Next</button>
            )}
            {data === questions[subjectno].length - 1 && (
                <button onClick={handleNext2}>Next Subject</button>
            )}
            <button onClick={onSubmit}>Submit</button>
            <button onClick={() => markForReview(subjectno, data)} disabled={!questions[subjectno][data].s}>Mark for review</button>
            {result && (
                <div>
                    <h2>Your score is: {score}</h2>
                </div>
            )}
        </div>
    );
}

export default Parents;
