import React from 'react';
import logo from "../image/logo.svg";
import glassesIcon from "../image/glas.svg";
import fbIcon from "../image/facebook.svg";
import vkIcon from "../image/vk.svg"
import instaIcon from "../image/inst.svg"
import StyleCss from "./header.module.css"
const Header = () => {
    return (
        <header>
            <div className={StyleCss.content}>
                <div className={`${StyleCss.logo} ${StyleCss.container}`}>
                    <div className="image">
                        <img src={logo} />
                    </div>
                    <div className={`${StyleCss.title} ${StyleCss.nameTitle}`}>
                        Саратовский государственный университет имени Гагарина Ю. А.
                    </div>
                </div>
                <div className={`${StyleCss.contact} ${StyleCss.container}`}>
                        <div className={StyleCss.phoneNumber}>
                            +7 (8452) 99-87-34
                        </div>
                        <div className={StyleCss.icons}>
                            <div className="facebook-icon">
                                <a href="#"><img src={fbIcon} /></a>
                            </div>
                            <div className={StyleCss.icon}>
                                <a href="#"><img src={vkIcon} /></a>
                            </div>
                            <div className="insta-icon">
                                <a href="#"><img src={instaIcon} /></a>
                            </div>
                        </div>
                </div>
                <div className={`${StyleCss.infoHeader} ${StyleCss.container}`}>
                    <div className={`${StyleCss.title} ${StyleCss.infoTitle}`}>
                        <a href="#">
                        Сведения об образовательной
                        организации
                        </a>

                    </div>
                    <div>
                        <a href="#"><img className={StyleCss.glasses} src={glassesIcon} /></a>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;