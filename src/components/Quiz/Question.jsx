import React from 'react';
import StyleCss from './quiz.module.css';

const Question = (props) => {
    return <h2 className = {StyleCss.question}>{props.content}</h2>;
}

export default Question;