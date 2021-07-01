import React from 'react';
import styles from "./Banner.module.css";


const Banner = () => {
    return (
        <section>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <div className={styles.title1}>Научим школьников любым</div>
                        <div className={styles.title2}>IT-технологиям!</div>
                    </div>
                    <div className={styles.btn}>
                        <button>
                            Перейти к курсам
                        </button>
                    </div>
                </div>
            </div>
            <br></br>
        </section>
    )
}


export default Banner;