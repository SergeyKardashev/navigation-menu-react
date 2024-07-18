import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Menu.css";
import bell from "../images/bell-icon.svg";
import logout from "../images/logout-icon.svg";
import bookmark from "../images/bookmark-icon.svg";
import siteLogo from "../images/site-logo.svg";
import radioButtonIconOff from "../images/radio-button-icon-off.svg";
import radioButtonIconOn from "../images/radio-button-icon-on.svg";
import dropdownIcon from "../images/dropdown-icon.svg";
import avatar from "../images/avatar-my.svg";

// Menu главная обертка всего меню вместе с подменю
const Menu = ({ children }) => {
  return <ul className="menu">{children}</ul>;
};

// MenuItem пункт меню, который может содержать список
const MenuItem = ({ children, url }) => {
  return <li className="menu-item">{url ? <Link to={url}>{children}</Link> : children}</li>;
};

// Заголовок в меню, который может содержать список, а может быть сам по себе
const MenuHeader = ({ children }) => {
  return <div className="dropdown-item dropdown-item_header">{children}</div>;
};

// Dropdown обертка для лейбла и списка
const Dropdown = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="dropdown" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <div className="dropdown-label">
        {children[0]}
        <img src={dropdownIcon} alt="arrow" style={{marginLeft: 5}} />
      </div>
      {isOpen && <div className="dropdown-menu">{children[1]}</div>}
    </div>
  );
};

// DropdownMenu - Обертка пунктов подменю
const DropdownMenu = ({ children }) => {
  return <>{children}</>;
};

// DropdownItem пункт выпадающего меню
const DropdownItem = ({ children, icon, url }) => {
  return (
    <div className="dropdown-item">
      <Link to={url} className="dropdown-link">
        {icon && <span className="icon">{icon}</span>}
        {children}
      </Link>
    </div>
  );
};

const App = () => {
  return (
    <Menu>
      <MenuItem name="ну точно мой" url="/">
        <img src={siteLogo} alt="logo" style={{ height: 40, width: 40, marginRight: 10 }} />
        SiteName
      </MenuItem>
      <MenuItem>
        <Dropdown>
          <div style={{ margin: 0, padding: 0, display: "flex", alignItems: "center" }}>
            Here's submenu 
            <img style={{ height: 20, marginLeft: 8 }} src={logout} alt="лого" />
          </div>
          <DropdownMenu>
            <MenuHeader>
              <span style={{ marginRight: 10}}>Cities</span>
              <button>I'm a button</button>
            </MenuHeader>
            <hr />
            <DropdownItem url="/sidney">
              <div style={{ margin: 0, padding: 0, display: "flex", alignItems: "center" }}>
                <img src={bell} alt="bell" style={{marginRight: 10}}/>
                Sidney
              </div>
            </DropdownItem>
            <DropdownItem url="/stockholm">Stockholm</DropdownItem>
            <hr />
            <p style={{ margin: "20px 20px" }}>
              Basic text. Just in case you need it. A comment or cue for user.
            </p>
            <hr />
            <MenuHeader>Parks</MenuHeader>
            <DropdownItem url="/central-park">
              <div style={{ margin: 0, padding: 0, display: "flex", alignItems: "center" }}>
                <img src={radioButtonIconOff} alt="bell" />
                Central Park
              </div>
            </DropdownItem>
            <DropdownItem url="/industrial-park">
              <div style={{ margin: 0, padding: 0, display: "flex", alignItems: "center" }}>
                <img src={radioButtonIconOn} alt="bell" />
                Industrial Park
              </div>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </MenuItem>
      <MenuItem url="/bookmark">
        <img className="bookmark" src={bookmark} alt="bookmark" />
        Bookmarks
      </MenuItem>
      <MenuItem url="/notifications">
        <img src={bell} alt="notifications" />
      </MenuItem>
      <MenuItem>
        <Dropdown>
          <div style={{ margin: 0, padding: 0, display: "flex", alignItems: "center" }}>
            <img alt="avatar" src={avatar} style={{ height: 40, marginRight: 8, border: '1px solid red', borderRadius: '50%' }}  />
            John Doe 
          </div>
          <DropdownMenu>
            <DropdownItem url="/sidney">
              <div style={{ margin: 0, padding: 0, display: "flex", alignItems: "center" }}>
                <img src={bell} alt="bell" style={{marginRight: 10}}/>
                Profile
              </div>
            </DropdownItem>
            <DropdownItem url="/sidney">
              <div style={{ margin: 0, padding: 0, display: "flex", alignItems: "center" }}>
                <img src={bell} alt="bell" style={{marginRight: 10}}/>
                Articles Management
              </div>
            </DropdownItem>
            <DropdownItem url="/sidney">
              <div style={{ margin: 0, padding: 0, display: "flex", alignItems: "center" }}>
                <img src={bell} alt="bell" style={{marginRight: 10}}/>
                Feedback
              </div>
            </DropdownItem>
            <DropdownItem url="/sidney">
              <div style={{ margin: 0, padding: 0, display: "flex", alignItems: "center" }}>
                <img src={bell} alt="bell" style={{marginRight: 10}}/>
                Settings
              </div>
            </DropdownItem>
            <DropdownItem url="/sidney">
              <div style={{ margin: 0, padding: 0, display: "flex", alignItems: "center" }}>
                <img src={bell} alt="bell" style={{marginRight: 10}}/>
                log Out
              </div>
            </DropdownItem>

          </DropdownMenu>
        </Dropdown>
      </MenuItem>
    </Menu>
  );
};

export default App;
