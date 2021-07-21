import React, { useEffect, useState } from 'react';
import map from "../image/map.svg";
import fbIcon from "../image/facebook.png";
import vkIcon from "../image/vk.png";
import youtubeIcon from "../image/youtube.png";
import instaIcon from "../image/inst.png";
import StyleCss from "./footer.module.css";

const Footer = () => {
    /*Валидация*/
    const [name, setName] = useState('');
    const [nameDirty, setNameDirty] = useState(false);
    const [nameError, setNameError] = useState('Имя не может быть пустым!');

    const [email, setEmail] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [emailError, setEmailError] = useState('Почтовый адрес не может быть пустым!');

    const [phone, setPhone] = useState('');
    const [phoneDirty, setPhoneDirty] = useState(false);
    const [phoneError, setPhoneError] = useState('');

    const [message, setMessage] = useState('');
    const [messageDirty, setMessageDirty] = useState(false);
    const [messageError, setMessageError] = useState('Ничего не введено...');

    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (nameError || emailError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [nameError, emailError]);

    const emailHandler = (e) => {
        setEmail(e.target.value);
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Электронная почта некорректна...');
        } else {
            setEmailError('');
        }
    }

    const phoneHandler = (e) => {
        setPhone(e.target.value);
        const re = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setPhoneError('Неправильно введён номер телефона...');
        } else {
            setPhoneError('');
        }
    }

    const messageHandler = (e) => {
        setMessage(e.target.value);
        if (!e.target.value) {
            setMessageError('Имя не может быть пустым!');
        } else {
            setMessageError('');
        }
    }

    const nameHandler = (e) => {
        setName(e.target.value);
        if (e.target.value.length > 30) {
            setNameError('Ограничение по символам. Не больше 30.');
            if (!e.target.value) {
                setNameError('Имя не может быть пустым!');
            }
        } else {
            setNameError('');
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break;
            case 'name':
                setNameDirty(true)
                break;
            case 'phone':
                setPhoneDirty(true)
                break;
            case 'message':
                setMessageDirty(true)
                break;
        }
    };

    return (
        <footer>
            <div className = {StyleCss.info}>
                <div className = {StyleCss.questions}> Остались вопросы? Напишите нам </div>
                <div className = {StyleCss.inputs}>  
                    {(nameDirty && nameError) && <div style = {{color: '#DB538C'}}>{nameError}</div>}
                    <input onChange = {e => nameHandler(e)} value = {name} onBlur = {e => blurHandler(e)} className = {StyleCss.name} name = "name" type = "Имя" placeholder = "*Имя" maxLength = "30"/>
                    {(phoneDirty && phoneError) && <div style = {{color: '#DB538C'}}>{phoneError}</div>}
                    <input onChange = {e => phoneHandler(e)} value = {phone} onBlur = {e => blurHandler(e)} className = {StyleCss.phone} name = "phone" type = "Телефон" placeholder = "Телефон" maxLength = "12"/>
                    {(emailDirty && emailError) && <div style = {{color: '#DB538C'}}>{emailError}</div>}
                    <input onChange = {e => emailHandler(e)} value = {email} onBlur = {e => blurHandler(e)} className = {StyleCss.email} name = "email" type = "E-mail" placeholder = "*E-mail"/>
                    {(messageDirty && messageError) && <div style = {{color: '#DB538C'}}>{messageError}</div>}
                    <input className = {StyleCss.message} onChange = {e => messageHandler(e)} value = {message} onBlur = {e => blurHandler(e)} name = "message" type = "Сообщение" placeholder = "Сообщение..." maxLength = "300"/>
                    <div className = {StyleCss.btn}><button disabled = {!formValid} className = {StyleCss.send}><a href = "#"> Отправить </a></button></div>
                </div> 
                <div className = {StyleCss.map}>
                    <iframe className = {StyleCss.googleMap} src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1194.1795644341416!2d45.97817544359028!3d51.529280791684315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4114c6ffe4b70d19%3A0x6c18bdda3ec6451c!2z0JTQtdGC0YHQutCw0Y8g0LrQvtC80L_RjNGO0YLQtdGA0L3QsNGPINGI0LrQvtC70LA!5e0!3m2!1sru!2sru!4v1625658612442!5m2!1sru!2sru" width = "60%" height = "510" frameborder = "0" allowfullscreen = "" aria-hidden = "false" tabindex = "0"></iframe>    
                </div>
            </div>
            <div className = {StyleCss.other}>
                <div className = {StyleCss.otherInfo}>
                    <div className = {StyleCss.item}>
                        <div className = {StyleCss.aboutOfUs}><a href = "#"> О нас </a></div>
                        <div className = {StyleCss.courses}><a href = "#"> Курсы </a></div>
                        <div className = {StyleCss.preparation}><a href = "#"> Подготовка к ЕГЭ </a></div>
                    </div>
                    <div className = {StyleCss.item}>
                        <div className = {StyleCss.applicant}><a href = "#"> Абитуриенту </a></div>
                        <div className = {StyleCss.reviews}><a href = "#"> Отзывы </a></div>
                        <div className = {StyleCss.contacts}><a href = "#"> Контакты </a></div>
                    </div>
                    <div className = {StyleCss.icons}>
                        <div className = {StyleCss.icon}>
                            <a href = "#"><img className = {StyleCss.vkIcon} src = {vkIcon} /></a>
                        </div>
                        <div className = {StyleCss.icon}>
                            <a href = "#"><img className = {StyleCss.instaIcon} src = {instaIcon} /></a>
                        </div>
                        <div className = {StyleCss.icon}>
                            <a href = "#"><img className = {StyleCss.youtubeIcon} src = {youtubeIcon} /></a>
                        </div>
                        <div className = {StyleCss.icon}>
                            <a href = "#"><img className = {StyleCss.fbIcon} src = {fbIcon} /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className = {StyleCss.material}>
                <div> Детская компьютерная школа </div>
                <div> ул. Политехническая, д. 77. офис 417 </div>
                <div> +7 (8452) 99-87-34 </div>
            </div>
            <div className = {StyleCss.ccs}> © 2000-2021 Детская компьютерная школа </div>
        </footer>
    )
}

export default Footer;