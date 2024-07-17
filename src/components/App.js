import React from "react";

import "./App.css";
import "./Menu.css";
import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";
import { Dropdown } from "./Dropdown";
import { DropdownMenu } from "./DropdownMenu";
import { DropdownItem } from "./DropdownItem";
import T from "i18n-react";

import bell from "../images/bell-icon.svg";
import bookmark from "../images/bookmark-icon.svg";
import avatar from "../images/avatar-my.svg";
import settings from "../images/settings-icon.svg";
import siteLogo from "../images/site-logo.svg";
import { UserDropDown } from "./UserDropDown";

function App() {
  const siteName = "Сайт Ивана";

  const tmpStyle = {
    margin: 0,
    padding: 0,
    backgroundColor: "lightblue",
    display: "flex",
    flexDirection: "row",
    height: "100%",
  };

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
      <p>• Лого и название, Древо, Статьи ▼ Смежные страницы ▼ Другое ▼ Уведомления, Закладки, аватар и фио ▼ </p>
      <Menu>
        {/* <MenuItem text="Parent" hasSubMenu>
          <MenuItem text="kid1"/>
          <MenuItem text="Child2"/>
        </MenuItem> */}

        <MenuItem text="custom" noText>
          {/* <div style={tmpStyle}> */}
          {/* <div>MenuItem</div>   */}
          {/* <img src={siteLogo} alt='лого' /> */}
          {/* </div> */}
          <Dropdown>
            Это Dropdown, а не Menu
            <DropdownMenu>
              Тут само меню-контейнер
              <DropdownItem>Просто пункт1</DropdownItem>
              <DropdownItem>И пункт2</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </MenuItem>

        <MenuItem text="Принадлежность" noText>
          <Dropdown text="Страны" noText>
            <>
              <img src={bookmark} alt="icon" />
              <div>Страны</div>
            </>
            <DropdownMenu>
              <DropdownItem>Моя</DropdownItem>
              <DropdownItem>Чужие</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </MenuItem>

        <UserDropDown />

        {/* заменить многоуровневое на Dropdown и метод map по массиву pages*/}

        {/* Лого и название */}
        {/* <MenuItem text={siteName} noText to="/">
          <img src={siteLogo} alt="лого сайта" className="site-logo" />
          <span>{siteName}</span>
        </MenuItem> */}

        {/* Древо */}
        {/* <MenuItem text={T.translate("nav.tree")} type="primary" to="/tree" /> */}

        {/* Статьи */}
        {/* открутил пропсы text={T.translate("nav.articles")} hasSubMenu  direction="up" position="right"*/}
        {/* <Dropdown> */}
        {/* заменить потомков на метод map */}
        {/* <MenuItem text="2nd article" to="/articles/2nd-article" /> */}
        {/* </Dropdown> */}

        {/* <MenuItem text={T.translate("nav.articles")} hasSubMenu> */}
        {/* <MenuItem text="1st article" to="/articles/1" /> */}
        {/* </MenuItem> */}

        {/* <MenuItem text="countries" hasSubMenu> */}
        {/* <MenuItem text="Germany" /> */}
        {/* <MenuItem text="France" /> */}
        {/* </MenuItem> */}

        {/* Смежные страницы */}
        {/* удалил direction="down"  */}
        {/* удалил text={T.translate("nav.otherSites")} */}
        {/* удалил hasSubMenu */}

        {/* Другое */}
        {/* удалил type="secondary" */}
        {/* заменить потомков на Dropdown и метод map по массиву pages*/}
        {/* <MenuItem text={T.translate("nav.other")} hasSubMenu> */}
        {/* <MenuItem text="Цены" to="/prices" /> */}
        {/* <MenuItem text="Правила" to="/terms" /> */}
        {/* </MenuItem> */}

        {/* Уведомления - в одной обертке счетчик и иконка */}
        {/* <MenuItem noText text={T.translate("nav.messages")} to="notifications">
          <div text="icons wrap">
            <div className="counter">2</div>
            <img className="bell-icon" src={bell} alt={T.translate("nav.messages")} />
          </div>
        </MenuItem> */}

        {/* Закладки с иконкой в пропсах - лишний зазор после иконки (нет текста справа) */}
        {/* <MenuItem text={T.translate("nav.bookmarks")} noText icon={bookmark} to="bookmarks" /> */}

        {/* Закладки */}
        {/* <MenuItem text={T.translate("nav.bookmarks")} noText to="bookmarks">
          <img src={bookmark} alt={T.translate("nav.bookmarks")} />
        </MenuItem> */}

        {/* <MenuItem text={T.translate("nav.bookmarks")} icon={bookmark} to="bookmarks"> */}
        {/* <img src={bookmark} alt={T.translate("nav.bookmarks")} /> */}
        {/* <img src={`../images/bookmark-icon.svg`} alt={`icon`} className="icon" /> */}
        {/* в семантике есть пропсы inline spaced */}
        {/* </MenuItem> */}

        {/* <span>hr</span> */}

        {/* выпадающее меню профиля */}
        {/* переименовать MenuItem в Dropdown ??? */}
        {/* <MenuItem noText text="user dropdown"> */}
        {/* <Dropdown markup={markupProfile}>  */}
        {/* удалил из дропдауна-обертки text="Маша" */}
        {/* <DropdownMenu> */}
        {/* <DropdownItem text="Элемент 1"></DropdownItem> */}
        {/* <DropdownItem text="Элемент 2" /> */}
        {/* </DropdownMenu> */}
        {/* </Dropdown> */}

        {/* <MenuItem text={T.translate("userParams.firstName")} hasSubMenu>
            <img src={settings} alt='иконка настройки' className='icon'/>
            <div>{T.translate("userParams.firstName")}</div>
          </MenuItem> */}
        {/* </MenuItem> */}
      </Menu>
      {/* <Menu>
          <MenuItem>
            <Dropdown>
              <div>
                <div>Доставка</div>
                <img src="/map.svg" alt="лого" />
              </div>
              <DropdownMenu>
                <div>
                  Города <span>Нет моего города</span>
                </div>
                <hr />
                <DropdownItem icon={bell}>Москва</DropdownItem>
                <DropdownItem>Екатеринбург</DropdownItem>
                <hr />
                Деревни и сёла
                <hr />
                <DropdownItem>Кукуево</DropdownItem>
                <DropdownItem>Гадюкино</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </MenuItem>
          <MenuItem>Контакты</MenuItem>
        </Menu> */}
    </div>
  );
}
export default App;
