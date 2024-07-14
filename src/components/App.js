import React from "react";

import "./App.css";
import "./Menu.css";
import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";
import T from "i18n-react";
import bell from "../images/bell-icon.svg";
import bookmark from "../images/bookmark-icon.svg";
import avatar from "../images/avatar-my.svg";

function App() {
  const siteName = "Сейт Ивана";

  // другое - это StaticPages
  // const staticPages = [
  //   { url: "/prices", desc: "nav.footer.prices" },
  //   { url: "/feedback", desc: "nav.footer.feedback" },
  // ];

  return (
    <div className="App">
      <h1 className="App-header">Menu with dropdown</h1>
      {/* Меню содержит
      • лого и название 
      • Древо 
      • Статьи ▼ 
      • Смежные страницы ▼ 
      • Другое ▼
      • Уведомления 
      • Закладки 
      • профиль (аватар и фио) ▼  
      */}
      <p>• Лого и название, Древо, Статьи ▼ Смежные страницы ▼ Другое ▼ Уведомления, Закладки, аватар и фио ▼  </p>
      
      <Menu>
        {/* заменить многоуровневое на Dropdown и метод map по массиву pages*/}

        {/* Лого и название */}
        <MenuItem text={siteName} to="/">
          <img src="./images/site-logo.svg" alt="лого сайта" />
          <span>{siteName}</span>
        </MenuItem>

        {/* Древо */}
        <MenuItem text={T.translate("nav.tree")} type='primary' to="/tree" />
        
        {/* Статьи */}
        <MenuItem text={T.translate("nav.articles")} hasSubMenu direction="up" position='right' >
          {/* заменить потомков на метод map */}
          {/* <MenuItem text="1st article" to="/articles/1st-article" /> */}
          {/* <MenuItem text="2nd article" to="/articles/2nd-article" /> */}
        </MenuItem>

        {/* Смежные страницы */}
        <MenuItem text={T.translate("nav.otherSites")} direction="down" >
          {/* заменить потомков на метод map */}
          {/* <MenuItem text="какой-то site1" to="/site1" /> */}
          {/* <MenuItem text="какой-то site2" to="/site2" /> */}
        </MenuItem>

        {/* Другое */}
        <MenuItem text={T.translate("nav.other")} type='secondary' >
          {/* заменить потомков на Dropdown и метод map по массиву pages*/}
          {/* <MenuItem text="Цены" to="/prices" /> */}
          {/* <MenuItem text="Правила" to="/terms" /> */}
        </MenuItem>

        <MenuItem text={T.translate("nav.messages")} to="notifications" >
          {/* Уведомления - в одной обертке счетчик и иконка */}
          <div text='icons wrap'>
            <div className="counter">2</div>
            <img className="bell-icon" src={bell} alt={T.translate("nav.messages")} />
          </div>
        </MenuItem>

        {/* Закладки с иконкой в пропсах - лишний зазор после иконки (нет текста справа) */}
        {/* <MenuItem text={T.translate("nav.bookmarks")} noText icon={bookmark} to="bookmarks" /> */}
        
        {/* Закладки */}
        <MenuItem text={T.translate("nav.bookmarks")} noText to="bookmarks">
          <img src={bookmark} alt={T.translate("nav.bookmarks")}/>
        </MenuItem>
        
        {/* <MenuItem text={T.translate("nav.bookmarks")} icon={bookmark} to="bookmarks"> */}
          {/* <img src={bookmark} alt={T.translate("nav.bookmarks")} /> */}
          {/* <img src={`../images/bookmark-icon.svg`} alt={`icon`} className="icon" /> */}
          {/* в семантике есть пропсы inline spaced */}
        {/* </MenuItem> */}
        <span>hr</span>

        {/* выпадающее меню профиля */}
        {/* переименовать MenuItem в Dropdown ??? */}
        <MenuItem text="todo user dropdown" >
          <img src={avatar} alt={T.translate("userParams.firstName")} />
          <div>{T.translate("userParams.firstName")}</div>
        </MenuItem>
      </Menu>
    </div>
  );
}
export default App;
