export const WEATHER_DATA = 'WEATHER_DATA';
import { getWeatherData } from './weather.gateway';

export const weatherDataAction = (weatherData) => {
  return {
    type: WEATHER_DATA,
    payload: {
      weatherData,
    },
  };
};

export const fetchWeatherData = () => {
  return function (dispatch) {
    getWeatherData().then((weatherData) => {
      dispatch(weatherDataAction(weatherData));
    });
  };
};
