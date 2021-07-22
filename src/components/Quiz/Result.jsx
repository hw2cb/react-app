import React from 'react';
import card1 from "../image/cardOne.png";
import card2 from "../image/cardTwo.png";
import card3 from "../image/cardThree.png";
import card4 from "../image/cardFour.png";
import card5 from "../image/cardFive.png";
import card6 from "../image/cardSix.png";
import card7 from "../image/cardSeven.png";
import card8 from "../image/cardEight.png";
import card9 from "../image/cardNine.png";
import card10 from "../image/cardTen.png";
import card11 from "../image/cardEleven.png";
import card12 from "../image/cardTwelve.png";
import card13 from "../image/cardThirteen.png";
import card14 from "../image/cardFourteen.png";
import card15 from "../image/cardFifteen.png";
import calendar from "../image/calendar.png";
import vector from "../image/Vector.png";
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
                    <div>
                        <p className = {StyleCards.name}> Разработка компьютерных игр в среде Scratch </p>
                    </div>
                    <div className = {StyleCards.other}>
                        <div className = {StyleCards.forWho}>
                            <img className = {StyleCards.calendar} src = {calendar} /><p> от 7 до 12 лет </p>
                        </div>
                        <div className = {StyleCards.whichDirection}>
                            <img className = {StyleCards.vector} src = {vector} /><p> Творческая </p>
                        </div>
                    </div>
                    <div className = {StyleCards.under}>
                        <a href = "#" className = {StyleCards.anchor}> Записаться </a>
                        <a href = "#" className = {StyleCards.more}> Подробнее </a>
                    </div>
                </div>
                {/* Карточка 2 */}
                <div className = {StyleCards.card}>
                    <img className = {StyleCards.cardImg} src = {card2} />
                    <div>
                        <p className = {StyleCards.name}> Разработка компьютерных игр (2 год) </p>
                    </div>
                    <div className = {StyleCards.other}>
                        <div className = {StyleCards.forWho}>
                            <img className = {StyleCards.calendar} src = {calendar} /><p> от 7 до 12 лет </p>
                        </div>
                        <div className = {StyleCards.whichDirection}>
                            <img className = {StyleCards.vector} src = {vector} /><p> Творческая </p>
                        </div>
                    </div>
                    <div className = {StyleCards.under} >
                        <a href = "#" className = {StyleCards.anchor}> Записаться </a>
                        <a href = "#" className = {StyleCards.more}> Подробнее </a>
                    </div>
                </div>
                {/* Карточка 3 */}
                <div className = {StyleCards.card}>
                    <img className = {StyleCards.cardImg} src = {card3} />
                    <div>
                        <p className = {StyleCards.name}> Основы программирования в программе 3D’s Max (1 год) </p>
                    </div>
                    <div className = {StyleCards.other}>
                        <div className = {StyleCards.forWho}>
                            <img className = {StyleCards.calendar} src = {calendar} /><p> от 7 до 12 лет </p>
                        </div>
                        <div className = {StyleCards.whichDirection}>
                            <img className = {StyleCards.vector} src = {vector} /><p> Творческая </p>
                        </div>
                    </div>
                    <div className = {StyleCards.under} >
                        <a href = "#" className = {StyleCards.anchor}> Записаться </a>
                        <a href = "#" className = {StyleCards.more}> Подробнее </a>
                    </div>
                </div>
                {/* Карточка 4 */}
                <div className = {StyleCards.card}>
                    <img className = {StyleCards.cardImg} src = {card4} />
                    <div>
                        <p className = {StyleCards.name}> Программирование Android-роботов </p>
                    </div>
                    <div className = {StyleCards.other}>
                        <div className = {StyleCards.forWho}>
                            <img className = {StyleCards.calendar} src = {calendar} /><p> от 7 до 12 лет </p>
                        </div>
                        <div className = {StyleCards.whichDirection}>
                            <img className = {StyleCards.vector} src = {vector} /><p> Творческая </p>
                        </div>
                    </div>
                    <div className = {StyleCards.under} >
                        <a href = "#" className = {StyleCards.anchor}> Записаться </a>
                        <a href = "#" className = {StyleCards.more}> Подробнее </a>
                    </div>
                </div>
                {/* Карточка 5 */}
                <div className = {StyleCards.card}>
                    <img className = {StyleCards.cardImg} src = {card5} />
                    <div className = {StyleCards.artSchool}>
                        <p className = {StyleCards.name}> Школа искусств </p>
                    </div>
                    <div className = {StyleCards.other}>
                        <div className = {StyleCards.forWho}>
                            <img className = {StyleCards.calendar} src = {calendar} /><p> от 7 до 12 лет </p>
                        </div>
                        <div className = {StyleCards.whichDirection}>
                            <img className = {StyleCards.vector} src = {vector} /><p> Творческая </p>
                        </div>
                    </div>
                    <div className = {StyleCards.under} >
                        <a href = "#" className = {StyleCards.anchor}> Записаться </a>
                        <a href = "#" className = {StyleCards.more}> Подробнее </a>
                    </div>
                    <div className = {StyleCards.defect}></div>
                </div>
                {/* Карточка 6 */}
                <div className = {StyleCards.card}>
                    <img className = {StyleCards.cardImg} src = {card6} />
                    <div className = {StyleCards.techOfWeb}>
                        <p className = {StyleCards.name}> Технологии веб-дизайна </p>
                    </div>
                    <div className = {StyleCards.other}>
                        <div className = {StyleCards.forWho}>
                            <img className = {StyleCards.calendar} src = {calendar} /><p> от 7 до 12 лет </p>
                        </div>
                        <div className = {StyleCards.whichDirection}>
                            <img className = {StyleCards.vector} src = {vector} /><p> Творческая </p>
                        </div>
                    </div>
                    <div className = {StyleCards.under} >
                        <a href = "#" className = {StyleCards.anchor}> Записаться </a>
                        <a href = "#" className = {StyleCards.more}> Подробнее </a>
                    </div>
                    <div className = {StyleCards.defect}></div>
                </div>
                {/* Карточка 7 */}
                <div className = {StyleCards.card}>
                    <img className = {StyleCards.cardImg} src = {card7} />
                    <div>
                        <p className = {StyleCards.name}> Разработка мобильных приложений </p>
                    </div>
                    <div className = {StyleCards.other}>
                        <div className = {StyleCards.forWho}>
                            <img className = {StyleCards.calendar} src = {calendar} /><p> от 7 до 12 лет </p>
                        </div>
                        <div className = {StyleCards.whichDirection}>
                            <img className = {StyleCards.vector} src = {vector} /><p> Творческая </p>
                        </div>
                    </div>
                    <div className = {StyleCards.under} >
                        <a href = "#" className = {StyleCards.anchor}> Записаться </a>
                        <a href = "#" className = {StyleCards.more}> Подробнее </a>
                    </div>
                </div>
                {/* Карточка 8 */}
                <div className = {StyleCards.card}>
                    <img className = {StyleCards.cardImg} src = {card8} />
                    <div>
                        <p className = {StyleCards.name}> Основы программирования в программе 3D’s Max (1 год) </p>
                    </div>
                    <div className = {StyleCards.other}>
                        <div className = {StyleCards.forWho}>
                            <img className = {StyleCards.calendar} src = {calendar} /><p> от 7 до 12 лет </p>
                        </div>
                        <div className = {StyleCards.whichDirection}>
                            <img className = {StyleCards.vector} src = {vector} /><p> Творческая </p>
                        </div>
                    </div>
                    <div className = {StyleCards.under} >
                        <a href = "#" className = {StyleCards.anchor}> Записаться </a>
                        <a href = "#" className = {StyleCards.more}> Подробнее </a>
                    </div>
                </div>
                {/* Карточка 9 */}
                <div className = {StyleCards.card}>
                    <img className = {StyleCards.cardImg} src = {card9} />
                    <div className = {StyleCards.painting}>
                        <p className = {StyleCards.name}> Живопись и цифровая графика </p>
                    </div>
                    <div className = {StyleCards.other}>
                        <div className = {StyleCards.forWho}>
                            <img className = {StyleCards.calendar} src = {calendar} /><p> от 7 до 12 лет </p>
                        </div>
                        <div className = {StyleCards.whichDirection}>
                            <img className = {StyleCards.vector} src = {vector} /><p> Творческая </p>
                        </div>
                    </div>
                    <div className = {StyleCards.under} >
                        <a href = "#" className = {StyleCards.anchor}> Записаться </a>
                        <a href = "#" className = {StyleCards.more}> Подробнее </a>
                    </div>
                    <div className = {StyleCards.defect}></div>
                </div>
                {/* Карточка 10 */}
                <div className = {StyleCards.card}>
                    <img className = {StyleCards.cardImg} src = {card10} />
                    <div className = {StyleCards.blogger}>
                        <p className = {StyleCards.name}> Я блогер </p>
                    </div>
                    <div className = {StyleCards.other}>
                        <div className = {StyleCards.forWho}>
                            <img className = {StyleCards.calendar} src = {calendar} /><p> от 7 до 12 лет </p>
                        </div>
                        <div className = {StyleCards.whichDirection}>
                            <img className = {StyleCards.vector} src = {vector} /><p> Творческая </p>
                        </div>
                    </div>
                    <div className = {StyleCards.under} >
                        <a href = "#" className = {StyleCards.anchor}> Записаться </a>
                        <a href = "#" className = {StyleCards.more}> Подробнее </a>
                    </div>
                    <div className = {StyleCards.defect}></div>
                </div>
                {/* Карточка 11 */}
                <div className = {StyleCards.card}>
                    <img className = {StyleCards.cardImg} src = {card11} />
                    <div>
                        <p className = {StyleCards.name}> Разработка компьютерных игр (1 год) </p>
                    </div>
                    <div className = {StyleCards.other}>
                        <div className = {StyleCards.forWho}>
                            <img className = {StyleCards.calendar} src = {calendar} /><p> от 7 до 12 лет </p>
                        </div>
                        <div className = {StyleCards.whichDirection}>
                            <img className = {StyleCards.vector} src = {vector} /><p> Творческая </p>
                        </div>
                    </div>
                    <div className = {StyleCards.under} >
                        <a href = "#" className = {StyleCards.anchor}> Записаться </a>
                        <a href = "#" className = {StyleCards.more}> Подробнее </a>
                    </div>
                </div>
                {/* Карточка 12 */}
                <div className = {StyleCards.card}>
                    <img className = {StyleCards.cardImg} src = {card12} />
                    <div>
                        <p className = {StyleCards.name}> Основы компьютерной графики и мультипликации </p>
                    </div>
                    <div className = {StyleCards.other}>
                        <div className = {StyleCards.forWho}>
                            <img className = {StyleCards.calendar} src = {calendar} /><p> от 7 до 12 лет </p>
                        </div>
                        <div className = {StyleCards.whichDirection}>
                            <img className = {StyleCards.vector} src = {vector} /><p> Творческая </p>
                        </div>
                    </div>
                    <div className = {StyleCards.under} >
                        <a href = "#" className = {StyleCards.anchor}> Записаться </a>
                        <a href = "#" className = {StyleCards.more}> Подробнее </a>
                    </div>
                </div>
                {/* Карточка 13 */}
                <div className = {StyleCards.card}>
                    <img className = {StyleCards.cardImg} src = {card13} />
                    <div>
                        <p className = {StyleCards.name}> Основы информационных технологий </p>
                    </div>
                    <div className = {StyleCards.other}>
                        <div className = {StyleCards.forWho}>
                            <img className = {StyleCards.calendar} src = {calendar} /><p> от 7 до 12 лет </p>
                        </div>
                        <div className = {StyleCards.whichDirection}>
                            <img className = {StyleCards.vector} src = {vector} /><p> Творческая </p>
                        </div>
                    </div>
                    <div className = {StyleCards.under} >
                        <a href = "#" className = {StyleCards.anchor}> Записаться </a>
                        <a href = "#" className = {StyleCards.more}> Подробнее </a>
                    </div>
                </div>
                {/* Карточка 14 */}
                <div className = {StyleCards.card}>
                    <img className = {StyleCards.cardImg} src = {card14} />
                    <div>
                        <p className = {StyleCards.name}> Основы программирования на языке Python </p>
                    </div>
                    <div className = {StyleCards.other}>
                        <div className = {StyleCards.forWho}>
                            <img className = {StyleCards.calendar} src = {calendar} /><p> от 7 до 12 лет </p>
                        </div>
                        <div className = {StyleCards.whichDirection}>
                            <img className = {StyleCards.vector} src = {vector} /><p> Творческая </p>
                        </div>
                    </div>
                    <div className = {StyleCards.under} >
                        <a href = "#" className = {StyleCards.anchor}> Записаться </a>
                        <a href = "#" className = {StyleCards.more}> Подробнее </a>
                    </div>
                </div>
                {/* Карточка 15 */}
                <div className = {StyleCards.card}>
                    <img className = {StyleCards.cardImg} src = {card15} />
                    <div>
                        <p className = {StyleCards.name}> Программирование LEGO-роботов </p>
                    </div>
                    <div className = {StyleCards.other}>
                        <div className = {StyleCards.forWho}>
                            <img className = {StyleCards.calendar} src = {calendar} /><p> от 7 до 12 лет </p>
                        </div>
                        <div className = {StyleCards.whichDirection}>
                            <img className = {StyleCards.vector} src = {vector} /><p> Творческая </p>
                        </div>
                    </div>
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