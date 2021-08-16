export const WEATHER_DATA = 'WEATHER_DATA';
import { fetchWeatherData } from './weather.gateway';

export const weatherDataAction = (weatherData) => {
  return {
    type: WEATHER_DATA,
    payload: {
      weatherData,
    },
  };
};

export const getWeatherData = () => {
  return function (dispatch) {
    fetchWeatherData().then((weatherData) => {
      dispatch(weatherDataAction(weatherData));
    });
  };
};
