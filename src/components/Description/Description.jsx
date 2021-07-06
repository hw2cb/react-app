import React from 'react';
import StyleCss from "./description.module.css";

const Description = () => {
    return (
        <section>
            <div className = {StyleCss.whoIsThisCourseFor}>
                <h1> Для кого этот курс? </h1>
            </div>
            <div className = {StyleCss.description}>
                <h2> Прежде всего для людей, 
                которые не смогли определиться на какой курс записаться. Этот небольшой тест 
                облегчит выбор курса, и подберёт определённый набор курсов по ответам теста. </h2>
            </div>
        </section>
    )
}

export default Description;