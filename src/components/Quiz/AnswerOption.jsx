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
        onChange = {props.onAnswerSelected}
      />
      <label className = {StyleCss.radioCustomLabel} htmlFor = {props.answerType}>
        {props.answerContent}
      </label>
    </li>
  );
}

export default AnswerOption;