import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'; 
import "./index.css";
import T from 'i18n-react';
import { translations } from "./translations";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

T.setTexts(translations.ru);

// T.setTexts({
//   siteName: 'Семейный сайт',
//   saveButtonText: 'Сохранить',
//   editButtonText: 'Изменить данные',
//   site: {
//     email: 'Lbg@rpri.ru',
//     phone: '+7 (903) 724-07-97',
//     teamLead: 'Леонид Жуков'
//   },
//   userParams: {
//     firstName: 'Имя',
//     lastName: 'Фамилия',
//     email: 'Почта',
//   },
//   nav: {
//     timeline: 'Лента',
//     moderation: 'Модерация сайта',
//     messages: 'Уведомления',
//     bookmarks: 'Закладки',
//     otherSites: 'Смежные страницы',
//     other: 'Другое',
//     footer: {
//       home: 'Главная',
//       aboutProject: 'О проекте',
//       prices: 'Цены',
//       feedback: 'Обратная связь',
//     }
//   },
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
