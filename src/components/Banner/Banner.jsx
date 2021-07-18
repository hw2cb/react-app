import React from 'react';
import styles from "./Banner.module.css";
import instaIcon from "../image/banner.svg"

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
                        <a href="#" className={styles.buttonBanner}>Перейти к курсам</a>
   
                    </div>
                </div>
            </div>
            <br></br>
        </section>
    )
}


export default Banner;