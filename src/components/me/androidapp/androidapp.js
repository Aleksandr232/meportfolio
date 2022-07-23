import React,{Component} from "react";
import AdbOutlinedIcon from '@mui/icons-material/AdbOutlined';
/* import Likes from "../likes/likes"; */

import androidw from './androidw.jpg'
import appandr from './appandr.jpg'
import animalicon from './animalicon.png'
import calc from './calc.png'
import books from './books.jpg'

const alrts=()=>{
    return  alert('В процессе доработки')  
}

export default class Meportfolio extends Component{
    
    render(){
        
        return(
            <section className="meportfolio" id="meportfolio">
        <h2 className="title title_fz16 resume__title circle">Портфолио</h2>
        <div className="title title_fz36 resume__subtitle" id="frameworks__sub"><AdbOutlinedIcon fontSize="large"/>- ПРИЛОЖЕНИЯ{/* <Likes/> */}</div>
        <div className="diviader diviader_resume"><span></span></div>
        <div className="container">
            <div className="work__me" id="work__me">
            <div className="workelem"><a href="https://github.com/Aleksandr232/weatherandroid"><button className='wor_1'><img src="https://img.icons8.com/ios/50/000000/github--v2.gif" style={{width:'30px' }}/></button></a>
                    <a  href='https://disk.yandex.ru/d/2Q6ggwpdBKhmKw'><button  className='wor'><img src="https://img.icons8.com/ios-glyphs/452/download--v2.gif" style={{width:'30px' }}/></button></a>
                        <img src={androidw} width="248px" height="248px" alt=""/>
                        </div>
            <div className="workelem"><a href="https://github.com/Aleksandr232/portfolioapp"><button className='wor_1'><img src="https://img.icons8.com/ios/50/000000/github--v2.gif" style={{width:'30px' }}/></button></a>
                    <a  href='https://disk.yandex.ru/d/XF67BdvTE42Ltw'><button  className='wor'><img src="https://img.icons8.com/ios-glyphs/452/download--v2.gif" style={{width:'30px' }}/></button></a>
                        <img src={appandr} width="248px" height="248px" alt=""/>
                        </div>
            <div className="workelem"><a href="https://github.com/Aleksandr232/animalplanets"><button className='wor_1'><img src="https://img.icons8.com/ios/50/000000/github--v2.gif" style={{width:'30px' }}/></button></a>
                    <a  href='https://disk.yandex.ru/d/F7ueHvhw1uakug'><button  className='wor'><img src="https://img.icons8.com/ios-glyphs/452/download--v2.gif" style={{width:'30px' }}/></button></a>
                        <img src={animalicon} width="248px" height="248px"  alt=""/>
                        </div>
            <div className="workelem"><a href="https://github.com/Aleksandr232/clacapp"><button className='wor_1'><img src="https://img.icons8.com/ios/50/000000/github--v2.gif" style={{width:'30px' }}/> </button></a>
                    <a  href='https://disk.yandex.ru/d/QnpKyXw5b922tQ'><button  className='wor'><img src="https://img.icons8.com/ios-glyphs/452/download--v2.gif" style={{width:'30px' }}/></button></a>
                        <img src={calc} width="248px" height="248px"  alt=""/>
                        </div>
            <div className="workelem"><a href="https://github.com/Aleksandr232/auth"><button className='wor_1'><img src="https://img.icons8.com/ios/50/000000/github--v2.gif" style={{width:'30px' }}/> </button></a>
                        <button onClick={alrts}  className='wor'><img src="https://img.icons8.com/ios-glyphs/452/download--v2.gif" style={{width:'30px' }}/></button>
                        <img src={books} width="248px" height="248px"  alt=""/>
                        </div>
            </div>
        </div>
    </section>
        )
    }
}