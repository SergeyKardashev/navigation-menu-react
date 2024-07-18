import React, { useState } from 'react';
import './Menu.css';
import bell from "../images/bell-icon.svg";
import logout from '../images/logout-icon.svg';
import bookmark from '../images/bookmark-icon.svg';
import siteLogo from '../images/site-logo.svg';
import radioButtonIconOff from '../images/radio-button-icon-off.svg';
import radioButtonIconOn from '../images/radio-button-icon-on.svg';
import dropdownIcon from '../images/dropdown-icon.svg';

// Menu главная обертка всего меню вместе с подменю
const Menu = ({ children }) => {
  return <ul className="menu">{children}</ul>;
};

// MenuItem пункт меню, который может содержать список
const MenuItem = ({ children }) => {
  return <li className="menu-item">{children}</li>;
};

// MenuItem пункт меню, который может содержать список
const MenuHeader = ({ children }) => {
  return <div className="dropdown-item dropdown-item_header">{children}</div>;
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
        <img src={dropdownIcon} alt='arrow' />
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
          <DropdownMenu>
            <MenuHeader>
                Города
                <button>Кнопка</button>
            </MenuHeader>
            <hr />
            <DropdownItem>
              <div style={{margin: 0, padding: 0, display: 'flex', alignItems: 'center'}}>
                <img src={bell} alt='bell' />
                Москва
              </div>
            </DropdownItem>
            <DropdownItem>Екатеринбург</DropdownItem>
            <hr />
            просто текст 
            <hr />
            <MenuHeader>            Деревни и сёла
            </MenuHeader>
            <DropdownItem>
              <div style={{margin: 0, padding: 0, display: 'flex', alignItems: 'center'}}>
                <img src={radioButtonIconOff} alt='bell' />
                Кукуево
              </div>
            </DropdownItem>
            <DropdownItem>
              <div style={{ margin: 0, padding: 0, display: 'flex', alignItems: 'center' }}>
                <img src={radioButtonIconOn} alt='bell' />
                Гадюкино
              </div>
            </DropdownItem>
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
