
import React from 'react';
import logo from "../image/logodksh.svg";
import StyleCss from "./logo.module.css"
const LogoNav = () => {
    return (
        <section>
            <div className={StyleCss.content}>
                <div className={StyleCss.logo}>
                    <div className="logo-image">
                        <img src={logo} />
                    </div>
                    <div className={StyleCss.titleLogo}>
                    Детская компьютерная
                    школа
                    </div>
                </div>
                <div className={StyleCss.nav}>
                    <ul>
                        <li>
                            <a className={StyleCss.navButton} href="">Высшее образование</a>
                        </li>
                        <li className={StyleCss.button}>
                            <a className={StyleCss.navButton} href="">Дополнительное образование</a>
                        </li>
                        <li>
                            <a className={`${StyleCss.navButton} ${StyleCss.selected}`} href="">Детская компьютерная школа</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default LogoNav;