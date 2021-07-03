import React from 'react';
import Script from "./script.js";
import Styles from "./test.module.css";

const Test = () => {
    return (
        <body>
            <div className = {Styles.question}><h2> Вопросы по JS </h2></div>
            <div className = {Styles.questions}>
                <h2 className = {Script.test_status}></h2>
                <div className = {Script.test}></div>
            </div> 
        </body>
    )
}

export default Test;