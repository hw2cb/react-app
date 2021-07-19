import React from 'react';
import StyleCss from './quiz.module.css';

const AnswerOption = (props) => { 
  return (
    <li className = "answerOption">
      <input
        type = "button"
        className = {StyleCss.radioCustomButton}
        name = {StyleCss.radioGroup}
        checked = {props.answerType === props.answer}
        id = {props.answerType}
        value = {props.answerType}
        disabled = {props.answer}
        onClick = {props.onAnswerSelected}
      />
    </li>
  );
}

export default AnswerOption;