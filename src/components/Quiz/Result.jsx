import React from 'react';
import StyleCss from './quiz.module.css';

function Result(props) {
    return (
        <div className = {StyleCss.resultQuiz}>
            <h1> Ваш результат </h1>
        </div>
    );
}

export default Result;