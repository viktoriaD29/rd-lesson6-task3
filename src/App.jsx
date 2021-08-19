import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Weather from './weather/Weather';

const App = () => {
  return (
    <Provider store={store}>
      <Weather />
    </Provider>
  );
};

export default App;

/*
в екшині пишемо асинхрний екшин який буде робити запрос на сервер на даними
ці дані передаємо в редюсер з якого формується стор
селектор відбирає потрібні дані зі стейту
конектимо компоненту зі стором
відмальовуємо список з отриманими даними
в марстейт отримуємо дані отримані з серверу через селектор
в майдіспатч отримуємо в пропси екшин
*/