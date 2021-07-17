import React, {useState, useRef} from 'react';
import StyleCss from "./description.module.css";
import {Spring, Transition, animated} from 'react-spring';
const Description = () => {
    const[isVisible, setIsVisible] = useState(false);
    const myRef=useRef(null);
    return (
        <section>
            <div className = {StyleCss.whoIsThisCourseFor}>
                <h1> Для кого этот тест? </h1>
            </div>
            <div className = {StyleCss.description}>
                <h2> Прежде всего для людей, 
                которые не смогли определиться на какой курс лучше всего записаться. Данный тест 
                облегчит выбор, и подберёт определённый набор курсов по ответам теста. </h2>
            </div>
        </section>
    )
}

export default Description;