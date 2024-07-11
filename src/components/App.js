import React from "react";

import "./App.css";
import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";
import T from "i18n-react";
import bell from "../images/bell.svg";
import bookmark from "../images/bookmark.svg";
import avatar from "../images/avatar-my.svg";

function App() {
  const siteName = "Сайт Жуковых";

  // другое - это StaticPages
  // const staticPages = [
  //   { url: "/prices", desc: "nav.footer.prices" },
  //   { url: "/terms", desc: "nav.footer.termsAndConditions" },
  // ];

  return (
    <div className="App">
      <h1 className="App-header">Menu with dropdown</h1>
      {/* <Menu>
        <MenuItem label="Level 1 home" to="/" />
        <MenuItem label="Level 1 services" to="/services">
          <MenuItem label="Level 2 SEO" to="/seo" />
          <MenuItem label="Level 2 DESIGN and Development" to="/design" />
          <MenuItem name="Level 2 with children" >
          <MenuItem name="Level 3a" />
          <MenuItem name="Level 3b" />
          <MenuItem name="Level 3c" />
          <MenuItem name="Level 3d_the_last_of_3rd" />
          </MenuItem> 
        </MenuItem>
        <MenuItem label="Level 1 JOBS" to="/jobs" />
      </Menu>*/}

      <Menu>
        {/* лого-ава и название */}
        <MenuItem label={siteName} to="/">
          <img src="./images/site-ava.png" alt="аватар сайта" />
          <span>{siteName}</span>
        </MenuItem>

        {/* древо */}
        <MenuItem label={T.translate("usermenu.tree")} to="/tree" />

        {/* статьи */}
        <MenuItem label={T.translate("usermenu.articles")} hasSubMenu>
          {/* заменить потомков на метод map */}
          <MenuItem label="1st article" to="/articles/1st-article" />
          <MenuItem label="2nd article" to="/articles/2nd-article" />
        </MenuItem>

        {/* смежные страницы */}
        <MenuItem label={T.translate("nav.otherSites")} hasSubMenu>
          {/* заменить потомков на метод map */}
          <MenuItem label="какой-то site1" to="/site1" />
          <MenuItem label="какой-то site2" to="/site2" />
        </MenuItem>

        {/* Другое */}
        <MenuItem label={T.translate("nav.other")} hasSubMenu>
          {/* заменить потомков на метод map по массиву pages*/}
          <MenuItem label="какой-то site1" to="/site1" />
          <MenuItem label="какой-то site2" to="/site2" />
        </MenuItem>

        <MenuItem className="flex">
          {/* Уведомления - в одной обертке счетчик и иконка */}
          <MenuItem to="notifications" />
          <div>
            <div className="counter">2</div>
            <img className="bell-icon" src={bell} alt={T.translate("nav.bookmarks")} />
          </div>
        </MenuItem>

        {/* Закладки */}
        <MenuItem to="bookmarks">
          <img src={bookmark} alt={T.translate("nav.bookmarks")} />
          {/* в семантике есть пропсы inline spaced */}
        </MenuItem>

        <span>hr</span>

        {/* выпадающее меню профиля */}
        {/* переименовать MenuItem в Dropdown ??? */}
        <MenuItem label="todo user dropdown" hasSubMenu>
          <img src={avatar} alt={T.translate("userParams.firstName")} />
          <div>{T.translate("userParams.firstName")}</div>
        </MenuItem>
      </Menu>
    </div>
  );
}
export default App;
