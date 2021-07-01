import React from 'react';
import map from "../image/map.svg";
import fbIcon from "../image/facebook.svg";
import vkIcon from "../image/vk.svg";
import instaIcon from "../image/inst.svg";
import StyleCss from "./footer.module.css";

const Footer = () => {
    return (
        <footer>
            <div className = {StyleCss.info}>
                <div className = {StyleCss.questions}> Остались вопросы? Напишите нам </div>
                <div className = {StyleCss.map}>
                    <img src = {map} />
                </div>
                <div className = {StyleCss.inputs}>  
                    <input className = {StyleCss.name} type = "Имя" placeholder = "*Имя"/>
                    <input className = {StyleCss.phone} type = "Телефон" placeholder = "Телефон"/>
                    <input className = {StyleCss.email} type = "E-mail" placeholder = "*E-mail"/>
                    <input className = {StyleCss.message} type = "Сообщение" placeholder = "Сообщение..."/>
                </div> 
                <button className = {StyleCss.send}><a href = "#"> Отправить </a></button>
            </div>
            <div className = {StyleCss.other}>
                <div className = {StyleCss.otherInfo}>
                    <div className = {StyleCss.aboutOfUs}><a href = "#"> О нас </a></div>
                    <div className = {StyleCss.applicant}><a href = "#"> Абитуриенту </a></div>
                    <div className = {StyleCss.courses}><a href = "#"> Курсы </a></div>
                    <div className = {StyleCss.reviews}><a href = "#"> Отзывы </a></div>
                    <div className = {StyleCss.preparation}><a href = "#"> Подготовка к ЕГЭ </a></div>
                    <div className = {StyleCss.contacts}><a href = "#"> Контакты </a></div>
                </div>
                <div className = {StyleCss.material}>
                    <div> Детская компьютерная школа </div>
                    <div> ул. Политехническая, д. 77. офис 417 </div>
                    <div> +7 (8452) 99-87-34 </div>
                </div>
            </div>
            <div className = {StyleCss.ccs}> © 2000-2021 Детская компьютерная школа </div>
        </footer>
    )
}

export default Footer;