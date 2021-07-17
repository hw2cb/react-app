import React from 'react';
import Question from './Question';
import AnswerOption from './AnswerOption';
import StyleCss from './quiz.module.css';
const Quiz = (props) => {
    let renderAnswerOptions = (key) => {
        return (
            <AnswerOption
                key = {key.content}
                answerType = {key.type}
                answer = {props.answer}
                questionId = {props.questionId}
                onAnswerSelected = {props.onAnswerSelected}
            />
        );
    }

    return (
        <div key = {props.questionId}>
            <Question content = {props.question} />
            <ul className = {StyleCss.answerOptions}>
                {props.answerOptions.map(renderAnswerOptions)}
            </ul>
        </div>
    );
}

export default Quiz;