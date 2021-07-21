import React from 'react';
import StyleCss from './quiz.module.css';
import { Spring, animated } from 'react-spring';
const AnswerOption = (props) => { 
  return (
    <Spring
            from = {{opacity: 0, transform: "translateY(40rem"}}
            to = {{opacity: 1, transform: "translateY(0rem"}}
            config = {{duration: 800}}
        >
          {prop=>(
            <animated.li style = {prop} className = "answerOption">
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
              <label className = {StyleCss.radioCustomLabel} htmlFor = {props.answerType}>
                {props.answerContent}
              </label>
          </animated.li>
          )}
    </Spring>
  );
}

export default AnswerOption;