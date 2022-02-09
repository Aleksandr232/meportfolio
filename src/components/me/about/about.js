import React, {Component} from 'react';
import main_photo from './main_photo.jpg'

export default class About extends Component{
    render(){
        return(
            <section className="about">
        <div className="container">
            <div id="wr" className="about__wrapper"><img src={main_photo} alt="" className="about__photo" id="abp"/>
                <div className="about__descr">
                    <h2 className="title title_fz16 about__title circle">Про меня</h2>
                    <div className="title title_fz36 about__subtitle">Меня зовут Александр</div>
                    <div className="diviader"><span></span></div>
                    <div className="about__text" id="text">
                        <p></p>
                    </div>
                </div>
                <div id="skil" className="about__skills">
                    <div className="about__item">
                        <div><img className="web"
                                src="https://img.icons8.com/external-photo3ideastudio-lineal-color-photo3ideastudio/29/000000/external-web-coding-online-business-photo3ideastudio-lineal-color-photo3ideastudio.png"/>
                        </div>
                        <div>
                            <div className="title title_fz14">Web-разработка</div>
                            <div className="diviader"><span></span></div>
                            <div id="skiltext" className="about__skills-text">Это процедура создания WEB-приложения или
                                WEB-сайта. Основными этапами этого процесса являются такие мероприятия, как WEB-дизайн,
                                вёрстка страниц сайта, WEB-программирование на стороне сервера и клиента, а также работы
                                по конфигурированию WEB-сервера.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        )
    }
}