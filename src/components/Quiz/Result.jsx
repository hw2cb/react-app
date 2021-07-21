import React from 'react';
import card1 from "../image/card1.png";
import StyleCss from './quiz.module.css';
import StyleCards from './cards.module.css';

function Result(props) {
    return (
        <container>
            <div className = {StyleCss.resultQuiz}>
                <h1> Ваш результат </h1>
            </div>
            <div className = {StyleCards.cards}>
                <div className = {StyleCards.card}>
                    <a href = "#" className = {StyleCards.anchor}> Записаться </a>
                    <a href = "#" className = {StyleCards.more}> Подробнее </a>
                </div>
            </div>
        </container>
    );
}

export default Result;