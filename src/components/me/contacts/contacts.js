import React, {Component} from 'react';



export default class Contacts extends Component{
    render(){
        return(
            <section className="contacts">
        <div className="container">
            <div className="contacts__wrapper" id="contacts__wrapper">
                <div className="contacts__photo"></div>
                <div className="contacts__descr" id="contacts__descr">
                    <h2 className="title title_fz16 about__title circle">Контакты</h2>
                    <div className="title title_fz36 about__subtitle">Свяжитесь со мной</div>
                    <div className="diviader"><span></span></div>
                    <div className="title title_fz14 contacts__text">Любым удобным для вас способом:</div>
                    <div className="contacts__social"><a href="https://telegram.me/aleksmelniks" class="contacts__link"><img
                                src="https://aleksandr232.github.io/rowingtatarstan.io/icons/telegram.gif" height="30px"
                                alt=""/> </a><a href="https://www.instagram.com/melnikrowing1999/?hl=ru"
                            className="contacts__link"><img
                                src="https://img.icons8.com/material-outlined/20/000000/instagram-new--v2.gif"
                                height="30px"/> </a><a href="" className="contacts__link"><img
                                src="https://img.icons8.com/ios-filled/20//facebook--v2.gif" height="30px"/></a>   
                    </div>
                </div>
            </div>
        </div>
    </section>
        )
    }
}