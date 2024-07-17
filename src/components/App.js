import React, { useState } from 'react';
import './Menu.css';
import bell from "../images/bell-icon.svg";
import logout from '../images/logout-icon.svg';
import bookmark from '../images/bookmark-icon.svg';
import siteLogo from '../images/site-logo.svg';

// Menu главная обертка всего меню вместе с подменю
const Menu = ({ children }) => {
  return <ul className="menu">{children}</ul>;
};

// MenuItem пункт меню, который может содержать список
const MenuItem = ({ children }) => {
  return <li className="menu-item">{children}</li>;
};

// Dropdown обертка для лейбла и списка
const Dropdown = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="dropdown"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="dropdown-label">
        {children[0]}
        {/* <span className="dropdown-icon">▼</span> */}
      </div>
      {isOpen && <div className="dropdown-menu">{children[1]}</div>}
    </div>
  );
};

// DropdownMenu - Обертка пунктов подменю 
const DropdownMenu = ({ children }) => {
  return (<div className="dropdown-menu">{children}</div>);
};

// DropdownItem пункт выпадающего меню
const DropdownItem = ({ children, icon }) => {
  return (
    <div className="dropdown-item">
      {icon && <span className="icon">{icon}</span>}
      {children}
    </div>
  );
};

const App = () => {
  return (
    <Menu>
      <MenuItem>
        <img src={siteLogo} alt="logo" style={{height: 20, marginRight: 10}}/>
        Мой_сайт
      </MenuItem>
      <MenuItem>
        <Dropdown>
        <div style={{margin: 0, padding: 0, display: 'flex', alignItems: 'center'}}>
          Доставка
          <img style={{height: 20, marginLeft: 8}} src={logout} alt="лого" />
        </div>
          {/* <div style={{margin: 0, padding: 0}}> */}
              {/* Доставка */}
              {/* <img style={{height: 20, position: "relative", top: 5, margin: 0, padding: 0}} src={logout} alt="лого" /> */}
              {/* <img src={logout} alt="лого" /> */}
          {/* </div> */}
          <DropdownMenu>
            <div>
              Города <span>Нет моего города</span>
            </div>
            <hr />
            <DropdownItem><img src={bell} alt='bell'/>Москва</DropdownItem>
            <DropdownItem>Екатеринбург</DropdownItem>
            <hr />
            Деревни и сёла
            <hr />
            <DropdownItem>Кукуево</DropdownItem>
            <DropdownItem>Гадюкино</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </MenuItem>
      <MenuItem>
        <img className='inline-img' src={bookmark} alt="contacts" />
        Контакты
      </MenuItem>
    </Menu>
  );
};

export default App;
