import React, { useState, useRef } from 'react';
import StyleCss from './quiz.module.css';
import { Spring, animated } from 'react-spring';
const Question = (props) => {
    return (
        <Spring
            from = {{ opacity: 0, transform: "translateX(-40rem" }}
            to = {{ opacity: 1, transform: "translateX(0rem" }}
            config = {{ duration: 500 }}
        >
            {prop => (
                <animated.h2 style = {prop} className = {StyleCss.question}>{props.content}</animated.h2>
            )}
        </Spring>
    );
}

export default Question;