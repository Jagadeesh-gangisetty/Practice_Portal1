import React, { useState } from 'react';
import "./SiblingsQuiz.css";

function SiblingsQuiz({ ParentsScore }) {
    const array = [
        { q: "1.Who is Jaggu for Jo?", o: ["Younger Brother", "Elder Brother", "None"], ans: "Younger Brother" },
        { q: "2.Who is Jaggu for Aravi?", o: ["Elder Brother", "Younger Brother", "None"], ans: "Younger Brother" },
        { q: "3.Who is Jaggu for Tanu?", o: ["Younger Brother", "Elder Brother", "None"], ans: "Elder Brother" }
    ];
    const [data, setData] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState(Array(array.length).fill(null));
    const [result, setResult] = useState(false);
    const [scores, setScore] = useState(0);

    function handleClick(so) {
        const newSelectedOptions = selectedOptions.map((item, index) =>
            index === data ? so : item
          );
          setSelectedOptions(newSelectedOptions);
          
    }

    function onSubmit() {
        let calculatedScore = 0;
        selectedOptions.forEach((option, index) => {
            if (option === array[index].ans) {
                calculatedScore += 1;
            }
        });
        setScore(calculatedScore);
        setResult(true);
    }

    function handleNext() {
        setData(data + 1);
    }

    return (
        <>
            <p>
                {result ? (
                    <p>{scores}</p>
                ) : (
                    <div>
                        <div className='a5'>
                            {array.map((item, index) => (
                                <button key={index} onClick={() => setData(index)}>
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                        <h1>{array[data].q}</h1>
                        <div>
                            {array[data].o.map((item, index) => (
                                <p key={index} onClick={() => handleClick(item)}>
                                    <input
                                        type='radio'
                                        value={index}
                                        name={`question-${data}`}
                                        checked={selectedOptions[data] === item}
                                    />{item}</p>
                            ))}
                        </div>
                        {data < array.length - 1 && (
                            <button onClick={handleNext}>Next</button>
                        )}
                        {data === array.length - 1 && (
                            <button onClick={onSubmit}>Submit</button>
                        )}
                    </div>
                )}
            </p>
        </>
    );
}

export default SiblingsQuiz;
