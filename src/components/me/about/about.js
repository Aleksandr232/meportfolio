import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import main_photo from './main_photo.jpg';
import rowing from './rowing.jpeg';
import row from './row.jpeg';
 
export default class About extends Component{
    render(){
        return(
            <section className="about">
        <div className="container">
            <div id="wr" className="about__wrapper">
            <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="about__photo" id="abp"
      src={main_photo}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="about__photo" id="abp"
      src={rowing}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="about__photo" id="abp"
      src={row}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
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