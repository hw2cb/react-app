import React from 'react';
import card1 from "../image/card1.png";
import card2 from "../image/card2.png";
import card3 from "../image/card3.png";
import card4 from "../image/card4.png";
import card5 from "../image/card5.png";
import card6 from "../image/card6.png";
import card7 from "../image/card7.png";
import card8 from "../image/card8.png";
import card9 from "../image/card9.png";
import card10 from "../image/card10.png";
import card11 from "../image/card11.png";
import card12 from "../image/card12.png";
import card13 from "../image/card13.png";
import card14 from "../image/card14.png";
import card15 from "../image/card15.png";
import StyleCss from './quiz.module.css';
import StyleCards from './cards.module.css';

function Result(props) {
    return (
        <container>
            <div className = {StyleCss.resultQuiz}>
                <h1> Ваш результат </h1>
            </div>
            <div className = {StyleCards.cards}>
                {/* Карточка 1 */}
                <div className = {StyleCards.card}>
                    <img className = {StyleCards.cardImg} src = {card1} />
                    <div className = {StyleCards.under} >
                        <a href = "#" className = {StyleCards.anchor}> Записаться </a>
                        <a href = "#" className = {StyleCards.more}> Подробнее </a>
                    </div>
                </div>
                {/* Карточка 2 */}
                <div className = {StyleCards.card}>
                    <img className = {StyleCards.cardImg} src = {card2} />
                    <div className = {StyleCards.under} >
                        <a href = "#" className = {StyleCards.anchor}> Записаться </a>
                        <a href = "#" className = {StyleCards.more}> Подробнее </a>
                    </div>
                </div>
                {/* Карточка 3 */}
                <div className = {StyleCards.card}>
                    <img className = {StyleCards.cardImg} src = {card3} />
                    <div className = {StyleCards.under} >
                        <a href = "#" className = {StyleCards.anchor}> Записаться </a>
                        <a href = "#" className = {StyleCards.more}> Подробнее </a>
                    </div>
                </div>
                {/* Карточка 4 */}
                <div className = {StyleCards.card}>
                    <img className = {StyleCards.cardImg} src = {card4} />
                    <div className = {StyleCards.under} >
                        <a href = "#" className = {StyleCards.anchor}> Записаться </a>
                        <a href = "#" className = {StyleCards.more}> Подробнее </a>
                    </div>
                </div>
                {/* Карточка 5 */}
                <div className = {StyleCards.card}>
                    <img className = {StyleCards.cardImg} src = {card5} />
                    <div className = {StyleCards.under} >
                        <a href = "#" className = {StyleCards.anchor}> Записаться </a>
                        <a href = "#" className = {StyleCards.more}> Подробнее </a>
                    </div>
                </div>
                {/* Карточка 6 */}
                <div className = {StyleCards.card}>
                    <img className = {StyleCards.cardImg} src = {card6} />
                    <div className = {StyleCards.under} >
                        <a href = "#" className = {StyleCards.anchor}> Записаться </a>
                        <a href = "#" className = {StyleCards.more}> Подробнее </a>
                    </div>
                </div>
                {/* Карточка 7 */}
                <div className = {StyleCards.card}>
                    <img className = {StyleCards.cardImg} src = {card7} />
                    <div className = {StyleCards.under} >
                        <a href = "#" className = {StyleCards.anchor}> Записаться </a>
                        <a href = "#" className = {StyleCards.more}> Подробнее </a>
                    </div>
                </div>
                {/* Карточка 8 */}
                <div className = {StyleCards.card}>
                    <img className = {StyleCards.cardImg} src = {card8} />
                    <div className = {StyleCards.under} >
                        <a href = "#" className = {StyleCards.anchor}> Записаться </a>
                        <a href = "#" className = {StyleCards.more}> Подробнее </a>
                    </div>
                </div>
                {/* Карточка 9 */}
                <div className = {StyleCards.card}>
                    <img className = {StyleCards.cardImg} src = {card9} />
                    <div className = {StyleCards.under} >
                        <a href = "#" className = {StyleCards.anchor}> Записаться </a>
                        <a href = "#" className = {StyleCards.more}> Подробнее </a>
                    </div>
                </div>
                {/* Карточка 10 */}
                <div className = {StyleCards.card}>
                    <img className = {StyleCards.cardImg} src = {card10} />
                    <div className = {StyleCards.under} >
                        <a href = "#" className = {StyleCards.anchor}> Записаться </a>
                        <a href = "#" className = {StyleCards.more}> Подробнее </a>
                    </div>
                </div>
                {/* Карточка 11 */}
                <div className = {StyleCards.card}>
                    <img className = {StyleCards.cardImg} src = {card11} />
                    <div className = {StyleCards.under} >
                        <a href = "#" className = {StyleCards.anchor}> Записаться </a>
                        <a href = "#" className = {StyleCards.more}> Подробнее </a>
                    </div>
                </div>
                {/* Карточка 12 */}
                <div className = {StyleCards.card}>
                    <img className = {StyleCards.cardImg} src = {card12} />
                    <div className = {StyleCards.under} >
                        <a href = "#" className = {StyleCards.anchor}> Записаться </a>
                        <a href = "#" className = {StyleCards.more}> Подробнее </a>
                    </div>
                </div>
                {/* Карточка 13 */}
                <div className = {StyleCards.card}>
                    <img className = {StyleCards.cardImg} src = {card13} />
                    <div className = {StyleCards.under} >
                        <a href = "#" className = {StyleCards.anchor}> Записаться </a>
                        <a href = "#" className = {StyleCards.more}> Подробнее </a>
                    </div>
                </div>
                {/* Карточка 14 */}
                <div className = {StyleCards.card}>
                    <img className = {StyleCards.cardImg} src = {card14} />
                    <div className = {StyleCards.under} >
                        <a href = "#" className = {StyleCards.anchor}> Записаться </a>
                        <a href = "#" className = {StyleCards.more}> Подробнее </a>
                    </div>
                </div>
                {/* Карточка 15 */}
                <div className = {StyleCards.card}>
                    <img className = {StyleCards.cardImg} src = {card15} />
                    <div className = {StyleCards.under} >
                        <a href = "#" className = {StyleCards.anchor}> Записаться </a>
                        <a href = "#" className = {StyleCards.more}> Подробнее </a>
                    </div>
                </div>
            </div>
        </container>
    );
}

export default Result;