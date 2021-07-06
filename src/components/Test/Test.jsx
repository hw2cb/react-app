import React from 'react';
import Script from "./script.js";
import Styles from "./test.module.css";

const Test = () => {
    return (
        <body>
            <div className = {Styles.question}><h2> Какой-то вопрос </h2></div>
        </body>
    )
}

export default Test;