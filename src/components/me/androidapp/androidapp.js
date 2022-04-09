import React,{Component} from "react";

import androidw from './androidw.jpg'



export default class Meportfolio extends Component{
   
    render(){
        return(
            <section className="meportfolio" id="meportfolio">
        <h2 className="title title_fz16 resume__title circle">Портфолио</h2>
        <div className="title title_fz36 resume__subtitle" id="frameworks__sub">Мои работы</div>
        <div className="diviader diviader_resume"><span></span></div>
        <div className="container">
            <div className="work__me" id="work__me">
            <div className="workelem"><a href="https://github.com/Aleksandr232/weatherandroid"><button className='wor_1'><img src="https://img.icons8.com/ios/50/000000/github--v2.gif" style={{width:'30px' }}/></button></a>
                    <a  href='download/weather.zip' download><button  className='wor'><img src="https://img.icons8.com/ios-glyphs/452/download--v2.gif" style={{width:'30px' }}/></button></a>
                        <img src={androidw} width="248px" height="248px" alt=""/></div>
            <div className="workelem"><a href="https://github.com/Aleksandr232/weatherandroid"><button className='wor_1'><img src="https://img.icons8.com/ios/50/000000/github--v2.gif" style={{width:'30px' }}/></button></a>
                    <a  href='download/weather.zip' download><button  className='wor'><img src="https://img.icons8.com/ios-glyphs/452/download--v2.gif" style={{width:'30px' }}/></button></a>
                        <img src={androidw} width="248px" height="248px" alt=""/></div>
            </div>
        </div>
    </section>
        )
    }
}