import React, {Component} from 'react';
import react from './react.jpg';
import myapp from './myapp.png';
import climbers from './climbers.png';
import calc from './calc.png';
import coffe from './coffe.png';
import grev from './grev.png';
import weather from './weather.jpg'
import './meportfolio.css';


export default class Meportfolio extends Component{
    render(){
        return(
            <section className="meportfolio" id="meportfolio">
        <h2 className="title title_fz16 resume__title circle">Портфолио</h2>
        <div className="title title_fz36 resume__subtitle" id="frameworks__sub">Мои работы</div>
        <div className="diviader diviader_resume"><span></span></div>
        <div className="container">
            <div className="work__me" id="work__me">
                <div className="workelem"><a href="https://github.com/Aleksandr232/rowingtatarstan.io"><button className='workm'><img src="https://img.icons8.com/ios/50/000000/github--v2.gif" style={{width:'30px' }}/></button></a>
                <a href="https://aleksandr232.github.io/rowingtatarstan.io/"><img
                            src="https://im.kommersant.ru/Issues.photo/LifeStyle_Online/2019/06/27/KMO_120232_20616_1_t218_153158.jpg"
                            width="248px" height="248px" alt=""/></a></div>
                <div className="workelem"><a href="https://github.com/Aleksandr232/number.io"><button className='workm'><img src="https://img.icons8.com/ios/50/000000/github--v2.gif" style={{width:'30px' }}/></button></a>
                <a href='https://number-io.vercel.app/'><img src={react}
                            width="248px" height="248px" alt=""/></a></div>
                 <div className="workelem"><a href="https://github.com/Aleksandr232/add-employees.io"><button className='workm'><img src="https://img.icons8.com/ios/50/000000/github--v2.gif" style={{width:'30px' }}/></button></a>
                 <a href='https://aleksandr232.github.io/add-employees.io/'><img src={myapp}
                                width="248px" height="248px" alt=""/></a></div>
                <div className="workelem"><a href="https://github.com/Aleksandr232/climbers"><button className='workm'><img src="https://img.icons8.com/ios/50/000000/github--v2.gif" style={{width:'30px' }}/></button></a>
                <a href="http://snowkzn.ru/"><img src={climbers}
                                width="248px" height="248px" alt=""/></a></div>
                <div className="workelem"><a href="https://github.com/Aleksandr232/calc.io"><button className='workm'><img src="https://img.icons8.com/ios/50/000000/github--v2.gif" style={{width:'30px' }}/></button></a>
                <a href="https://calc-io-gamma.vercel.app/"><img src={calc}
                                width="248px" height="248px" alt=""/></a></div>
                <div className="workelem"><a href="https://github.com/Aleksandr232/coffe"><button className='workm'><img src="https://img.icons8.com/ios/50/000000/github--v2.gif" style={{width:'30px' }}/></button></a>
                <a href="https://coffe-iota.vercel.app/"><img src={coffe}
                                width="248px" height="248px" alt=""/></a></div>
                <div className="workelem"><a href="https://github.com/Aleksandr232/grovemade"><button className='workm'><img src="https://img.icons8.com/ios/50/000000/github--v2.gif" style={{width:'30px' }}/></button></a>
                <a href="https://grovemade.vercel.app/"><img src={grev}
                                width="248px" height="248px" alt=""/></a></div>
                <div className="workelem"><a href="https://github.com/Aleksandr232/weather"><button className='workm'><img src="https://img.icons8.com/ios/50/000000/github--v2.gif" style={{width:'30px' }}/></button></a>
                <a href="https://weather-ebon-eight.vercel.app/"><img src={weather}
                                width="248px" height="248px" alt=""/></a></div>
                <div className="workelem"><a href="https://github.com/Aleksandr232/industrial"><button className='workm'><img src="https://img.icons8.com/ios/50/000000/github--v2.gif" style={{width:'30px' }}/></button></a>
                <a href="https://industrial-three.vercel.app/"><img src={weather}
                                width="248px" height="248px" alt=""/></a></div>
            </div>
        </div>
    </section>
        )
    }
}