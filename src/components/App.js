import React from "react";

import "./App.css";
import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";
import T from "i18n-react";
import bell from "../images/bell.svg";
import bookmark from "../images/bookmark.svg";
import avatar from "../images/avatar-my.svg";

function App() {
  const siteName = "My Site";
  const prices = "Prices";
  // const chat = "Chat";
  const pricesDropDown = (
    <ul>
      <li>Price 1</li>
      <li>Price 2</li>
    </ul>
  );
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
      <Menu>

        {/* лого и название */}
        <MenuItem text={siteName} to="/">
          <img src="./images/site-logo.svg" alt="логотип сайта" />
          <span>{siteName}</span>
        </MenuItem>

        {/* цены (хлам) */}
        <MenuItem text={prices} to="/prices">
          {pricesDropDown}
        </MenuItem>

        {/* древо */}
        <MenuItem text={T.translate("usermenu.tree")} to="/tree" />

        {/* статьи */}
        <MenuItem text={T.translate("usermenu.articles")} hasSubMenu>
          {/* заменить потомков на метод map */}
          <MenuItem text="1st article" to="/articles/1st-article" />
          <MenuItem text="2nd article" to="/articles/2nd-article" />
        </MenuItem>

        {/* смежные страницы */}
        <MenuItem text={T.translate("nav.otherSites")} hasSubMenu>
          {/* заменить потомков на метод map */}
          <MenuItem text="какой-то site1" to="/site1" />
          <MenuItem text="какой-то site2" to="/site2" />
        </MenuItem>

        {/* Другое */}
        <MenuItem text={T.translate("nav.other")} hasSubMenu>
          {/* заменить потомков на метод map по массиву pages*/}
          <MenuItem text="какой-то site1" to="/site1" />
          <MenuItem text="какой-то site2" to="/site2" />
        </MenuItem>

        <MenuItem text="какой-то 123" className="flex">
          {/* Уведомления - в одной обертке счетчик и иконка */}
          <MenuItem text={T.translate("nav.messages")} to="notifications" />
          <div text='icons wrap'>
            <div className="counter">2</div>
            <img className="bell-icon" src={bell} alt={T.translate("nav.messages")} />
          </div>
        </MenuItem>

        {/* Закладки */}
        <MenuItem text={T.translate("nav.bookmarks")} to="bookmarks">
          <img src={bookmark} alt={T.translate("nav.bookmarks")} />
          {/* в семантике есть пропсы inline spaced */}
        </MenuItem>

        <span>hr</span>

        {/* выпадающее меню профиля */}
        {/* переименовать MenuItem в Dropdown ??? */}
        <MenuItem text="todo user dropdown" hasSubMenu>
          <img src={avatar} alt={T.translate("userParams.firstName")} />
          <div>{T.translate("userParams.firstName")}</div>
        </MenuItem>
      </Menu>
    </div>
  );
}
export default App;
