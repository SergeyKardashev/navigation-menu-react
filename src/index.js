import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'; 
import "./index.css";
import T from 'i18n-react';
import { translations } from "./translations";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

T.setTexts(translations.ru);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
