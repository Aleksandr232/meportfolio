import React, { Component } from "react";

export default class Frameworks extends Component {
  render() {
    return (
      <section className="frameworks" id="fra">
        <h2 className="title title_fz16 resume__title circle">Навыки</h2>
        <div className="title title_fz36 resume__subtitle" id="frameworks__sub">
          Что я использую в работе
        </div>
        <div className="diviader diviader_resume">
          <span></span>
        </div>
        <div className="container">
          <div className="frameworks__wrapper" id="frameworks__wrapper">
            <div className="frameworks__elem" id="frameworks__elem">
              <img
                src="https://img.icons8.com/ultraviolet/240/000000/html--v2.gif"
                width="140px"
                className="frameworks__img"
              />
              <div className="frameworks__name">HTML5</div>
              <div className="frameworks__subtitle">
                Именно он создает каркас вашего сайта или приложения.
              </div>
            </div>
            <div className="frameworks__elem" id="frameworks__elem">
              <img
                src="https://img.icons8.com/color/160/000000/css3.png"
                className="frameworks__img"
              />
              <div className="frameworks__name">CSS3</div>
              <div className="frameworks__subtitle">
                Этот язык стилей позволяет мне создавать абсолютно любой внешний
                вид вашего сайта или приложения.
              </div>
            </div>
            <div className="frameworks__elem" id="frameworks__elem">
              <img
                src="https://img.icons8.com/color/160/000000/javascript--v2.gif"
                width="140px"
                className="frameworks__img"
              />
              <div className="frameworks__name">Java Script</div>
              <div className="frameworks__subtitle">
                Этот язык программирования позволяет оживить все что угодно:
                слайдеры, окна, подсказки, вкладки, получение данных от сервера
                и многое другое
              </div>
            </div>
            <div className="frameworks__elem" id="frameworks__elem">
              <img
                src="https://img.icons8.com/ios/50/000000/react-native--v2.gif"
                width="140px"
                className="frameworks__img"
              />
              <div className="frameworks__name">React</div>
              <div className="frameworks__subtitle">
                Эта библиотека позволяет создавать web-приложения. Мы можем
                создать максимально интерактивный продукт именно под ваши цели
              </div>
            </div>
            <div className="frameworks__elem" id="frameworks__elem">
              <img
                src="https://img.icons8.com/color/140/000000/bootstrap.png"
                className="frameworks__img"
              />
              <div className="frameworks__name">Bootstrap</div>
              <div className="frameworks__subtitle">
                Bootstrap — свободный набор инструментов для создания сайтов и
                веб-приложений.
              </div>
            </div>
            <div className="frameworks__elem" id="frameworks__elem">
              <img
                src="https://originapps.io/wp-content/uploads/2019/03/React-Native.png"
                width={150}
                height={140}
                className="frameworks__img"
              />
              <div className="frameworks__name">React Native</div>
              <div className="frameworks__subtitle">
                React Native сочетает в себе лучшие черты нативной разработки с
                React.
              </div>
            </div>
            <div className="frameworks__elem" id="frameworks__elem">
              <img
                src="https://play-lh.googleusercontent.com/algsmuhitlyCU_Yy3IU7-7KYIhCBwx5UJG4Bln-hygBjjlUVCiGo1y8W5JNqYm9WW3s"
                width={150}
                height={140}
                className="frameworks__img"
              />
              <div className="frameworks__name">Expo</div>
              <div className="frameworks__subtitle">
                Expo — это фреймворк и платформа для универсальных приложений
                React. Это набор инструментов и сервисов, созданных на основе
                React Native и нативных платформ.
              </div>
            </div>
            <div className="frameworks__elem" id="frameworks__elem">
              <img
                src="https://pngimage.net/wp-content/uploads/2019/05/icon-png-logo-2.png"
                width={150}
                height={140}
                className="frameworks__img"
              />
              <div className="frameworks__name">MUI</div>
              <div className="frameworks__subtitle">
                Предоставляет опциональный компонент CssBaseline. Он исправляет
                некоторые несоответствия между браузерами и устройствами.
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
