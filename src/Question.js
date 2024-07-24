import React from 'react';

const Question = ({ data, onAnswerClick }) => {
    return (
        <div>
            <h2>{data.question}</h2>
            <div>
                {data.options.map((option, index) => (
                    <button key={index} onClick={() => onAnswerClick(option)}>
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Question;
