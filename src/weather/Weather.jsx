import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {weatherDataSelector} from './weather.selector'
import * as weatherActions from './weather.actions';

const Weather = ({ weatherData, getWeatherData }) => {
  useEffect(() => {
    getWeatherData();
  }, []);
  //console.log(weatherData);
return (
  <main className="weather">
    <h1 className="weather__title">Weather data</h1>
    <ul className="cities-list">
      {weatherData.map((weather) => (
        <li className="city" key={weather.id}>
          <span className="city__name">{weather.name}</span>
          <span className="city__temperature">{`${weather.temperature} F`}</span>
        </li>
      ))}
    </ul>
  </main>
);
};

const mapState = (state) => {
  return {
    weatherData: weatherDataSelector(state),
  };
};

const mapDispatch = {
  getWeatherData: weatherActions.getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);

// /*
// треба цю компоненту законектити зі стором, щоб вона мала доступ до даних зі стейту
// зі стейту через селектори взяти дані які нам потрібні і добавити їх в компоненту через функцію мапстейт
// ці дані приходять зі серверу через запрос і проміс який ми отримали і обробляємо в екшині, який потрапляє в редюсер з якого складається стор
// */
