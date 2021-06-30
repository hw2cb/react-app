import logo from "../image/logo.svg";
import glassesIcon from "../image/glas.svg";
import fbIcon from "../image/facebook.svg";
import vkIcon from "../image/vk.svg"
import instaIcon from "../image/inst.svg"
import StyleCss from "../header/header.module.css"
function Head()
{
    return (
    <header>
        <div className={StyleCss.content}>
            <div className={StyleCss.logo}>
                <div className="image">
                    <img src={logo}/>
                </div>
                <div className={StyleCss.title}>
                Саратовский государственный университет имени Гагарина Ю. А.
                </div>
            </div>
            <div className={StyleCss.contact}>

                    <div className="phone">
                    +7 (8452) 99-87-34
                    </div>
                    <div className={StyleCss.icons}>
                        <div className="facebook-icon">
                            <img src={fbIcon}/>
                        </div>
                        <div className="vk-icon">
                            <img src={vkIcon}/>
                        </div>
                        <div className="insta-icon">
                            <img src={instaIcon}/>
                        </div>
                    </div>
            </div>
            <div className={StyleCss.info}>
                <div className="title">
                Сведения об образовательной 
организации
                </div>
                <div className="glasses">
                    <img src={glassesIcon}/>
                </div>
            </div>
        </div>
    </header>
    )
}
export default Head;