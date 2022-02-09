import React, {Component} from 'react';

export default class Frameworks extends Component{
    render(){
        return(
            <section className="frameworks" id="fra">
        <h2 className="title title_fz16 resume__title circle">Навыки</h2>
        <div className="title title_fz36 resume__subtitle" id="frameworks__sub">Что я использую в работе</div>
        <div className="diviader diviader_resume"><span></span></div>
        <div className="container">
            <div className="frameworks__wrapper" id="frameworks__wrapper">
                <div className="frameworks__elem" id="frameworks__elem"><img
                        src="https://img.icons8.com/ultraviolet/240/000000/html--v2.gif" width="140px"
                        className="frameworks__img"/>
                    <div className="frameworks__name">HTML5</div>
                    <div className="frameworks__subtitle">Именно он создает каркас вашего сайта или приложения.</div>
                </div>
                <div className="frameworks__elem" id="frameworks__elem"><img
                        src="https://img.icons8.com/color/160/000000/css3.png" className="frameworks__img"/>
                    <div className="frameworks__name">CSS3</div>
                    <div className="frameworks__subtitle">Этот язык стилей позволяет мне создавать абсолютно любой внешний
                        вид вашего сайта или приложения.</div>
                </div>
                <div className="frameworks__elem" id="frameworks__elem"><img
                        src="https://img.icons8.com/color/160/000000/javascript--v2.gif" width="140px"
                        className="frameworks__img"/>
                    <div className="frameworks__name">Java Script</div>
                    <div className="frameworks__subtitle">Этот язык программирования позволяет оживить все что угодно:
                        слайдеры, окна, подсказки, вкладки, получение данных от сервера и многое другое</div>
                </div>
                <div className="frameworks__elem" id="frameworks__elem"><img
                        src="https://img.icons8.com/ios/50/000000/react-native--v2.gif" width="140px"
                        className="frameworks__img"/>
                    <div className="frameworks__name">React</div>
                    <div className="frameworks__subtitle">Эта библиотека позволяет создавать web-приложения. Мы можем
                        создать максимально интерактивный продукт именно под ваши цели</div>
                </div>
                <div className="frameworks__elem" id="frameworks__elem"><img
                        src="https://img.icons8.com/color/140/000000/bootstrap.png" className="frameworks__img"/>
                    <div className="frameworks__name">Bootstrap</div>
                    <div className="frameworks__subtitle">Bootstrap — свободный набор инструментов для создания сайтов и
                        веб-приложений.</div>
                </div>
            </div>
        </div>
    </section>
        )
    }
}