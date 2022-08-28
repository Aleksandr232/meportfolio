import React, {Component} from 'react';
/* import Carousel from 'react-bootstrap/Carousel' */
/* import main_photo from './main_photo.jpg';
import rowing from './rowing.jpeg';
import row from './row.jpeg'; */
import Music from '../music/music';
import Photo from '../../photo/Photo';
import EasterBraker from '../../break/break';
 
export default class About extends Component{
    render(){
        return(
            <section className="about">
        <div className="container" id='about_container'>
            <div id="wr" className="about__wrapper">
            <Photo/>
<div className="about__descr">
  <div><Music/></div>
                    <h2 className="title title_fz16 about__title circle">Про меня</h2>
                    <div className="title title_fz36 about__subtitle">Меня зовут Александр</div>
                    <div className="diviader"><span></span></div>
                    <div className="about__text" id="text">
                          Всем привет! <img src="https://img.icons8.com/emoji/48/000000/waving-hand-emoji.png"/><br/>
                          Меня зовут Александр!<br/>
                          Я начинающий фронтенд разработчик!
                          Совсем недавно, я даже не знал что такое <code>HTML</code><br/>
                          Но, было огромное желание погрузиться в эту реальность...<br/>
                          С юного возроста я занимаюсь греблей<img src="https://camo.githubusercontent.com/6d0c79b3a93b85a866baaa55d67805da162eab40cfe04b4f8f30e54ef2f484b8/68747470733a2f2f696d672e69636f6e73382e636f6d2f696f732f32302f3030303030302f726f77696e672d322d2d76322e676966" width={20}/>. 
                          Это очень красивый вид спорта, который воспитывает тебя не только преодолевать усталость мышечных волокон, но и волю.<br/> 
                         Гребля это не только красивый вид спорта, но и очень командный  спорт. Вы просто представьте, когда 9 человек гребут в одной лодке к своей мечте! Завораживающе! Не правда ли?

                    </div>
                    <EasterBraker/>
                </div>
<div id="skil" className="about__skills">
                    <div className="about__item">
                        <div>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        )
    }
}