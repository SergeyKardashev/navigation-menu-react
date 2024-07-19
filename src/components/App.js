import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Menu.css";
// arbitrary images
import siteLogo from "../images/site-logo.svg";
import avatarIcon from "../images/avatar-my.svg";

// main menu icons
import bellIcon from "../images/bell-icon.svg";
import bookmarkIcon from "../images/bookmark-icon.svg";

// dropdown icons
import radioBtnIconOff from "../images/radio-btn-icon-off.svg";
import radioBtnIconOn from "../images/radio-btn-icon-on.svg";
import dropdownIcon from "../images/dropdown-icon.svg";
import profileProfileIcon from "../images/profile-profile-icon.svg";
import articlesManageIcon from "../images/profile-articles-management-icon.svg";
import feedbackIcon from "../images/profile-feedback-icon.svg";
import settingsIcon from "../images/profile-settings-icon.svg";
import logOutIcon from "../images/profile-logout-icon.svg";
import starIcon from "../images/city-star-icon.svg";

// wrapper for entire Menu with submenu
const Menu = ({ children }) => {
  return <ul className="menu">{children}</ul>;
};

// Main item. Can contain sub menu (dropdown)
const MenuItem = ({ children, url, icon, text = "item", noText, iconPR, iconPL }) => {
  const iconClass = `icon ${iconPR ? "icon_pr" : ""} ${iconPL ? "icon_pl" : ""}`;

  return (
    <li className="menu-item">
      {(url) ? (
        <Link to={url} title={text}>
          { icon ? <img src={icon} alt={text} className={iconClass} /> : ''}
          {children || (noText ? '' : text)} 
        </Link>
      ) : (
        children || (noText ? '' : text )
      )}
    </li>
  );
};

// Header inside menu. It can live on its onw, but cat has list as a child
const MenuHeader = ({ children }) => {
  return <div className="dropdown-item dropdown-item_header">{children}</div>;
};

// wrapper for label of dropdown and list of items
const Dropdown = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="dropdown" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <div className="dropdown-label">
        {children[0]}
        <img src={dropdownIcon} alt="arrow" style={{ marginLeft: 5 }} />
      </div>
      {isOpen && <div className="dropdown-menu">{children[1]}</div>}
    </div>
  );
};

// wrapper for list of items
const DropdownMenu = ({ children }) => {
  return <>{children}</>;
};

// item of dropdown menu
const DropdownItem = ({ children, icon, text='', noText, iconPL, iconPR, url }) => {

  const iconClass = `icon ${iconPL ? 'icon_pl' : ''} ${iconPR ? 'icon_pr' : ''}`;
  return (
    <div className="dropdown-item">
      <Link to={url} className="dropdown-link">
        {icon && <span className={iconClass}><img src={icon} alt={text} /></span>}
        {children || (noText ? '': text)}
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
      <MenuItem url="/">Item</MenuItem>
      <MenuItem text="Icon+text" url="/" icon={starIcon} iconPR></MenuItem>
      <MenuItem>
        <Dropdown>
          Basic menu
          <DropdownMenu>
            <DropdownItem url="/sidney">Sidney</DropdownItem>
            <DropdownItem url="/stockholm">Stockholm</DropdownItem>
            <DropdownItem url="/new-d elhi">New Delhi</DropdownItem>
            <DropdownItem url="/beijing">Beijing</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </MenuItem>
      <MenuItem>
        <Dropdown>
          <div style={{ margin: 0, padding: 0, display: "flex", alignItems: "center" }}>
            Fancy Dropdown
            <img style={{ height: 20, marginLeft: 8 }} src={logOutIcon} alt="лого" />
          </div>
          <DropdownMenu>
            <MenuHeader>
              <span style={{ marginRight: 10 }}>Cities</span>
              <button type="button" style={{ cursor: "pointer" }}>
                I'm a button
              </button>
            </MenuHeader>
            <hr />
            <DropdownItem url="/sidney">
              <div style={{ margin: 0, padding: 0, display: "flex", alignItems: "center" }}>
                <img src={starIcon} alt="star" style={{ marginRight: 10 }} />
                Sidney
              </div>
            </DropdownItem>
            <DropdownItem url="/stockholm">Stockholm</DropdownItem>
            <DropdownItem url="/new-d elhi">New Delhi</DropdownItem>
            <DropdownItem url="/beijing">Beijing</DropdownItem>
            <hr />
            <p style={{ margin: "20px 20px" }}>Basic text. Just in case you need it. A comment or cue for user.</p>
            <hr />
            <MenuHeader>Parks</MenuHeader>
            <DropdownItem text='Central Park' url="/central-park" icon={radioBtnIconOff} iconPR />
            <DropdownItem url="/industrial-park" text="Industrial Park" icon={radioBtnIconOn} iconPR />
          </DropdownMenu>
        </Dropdown>
      </MenuItem>
      <MenuItem text="Bookmarks" noText url="/bookmark" icon={bookmarkIcon} />
      <MenuItem text="Notifications" noText url="/notifications" icon={bellIcon}></MenuItem>
      <MenuItem>
        <Dropdown>
          <div style={{ margin: 0, padding: 0, display: "flex", alignItems: "center" }}>
            <img
              alt="avatar"
              src={avatarIcon}
              style={{ height: 40, marginRight: 8, border: "1px solid gray", borderRadius: "50%" }}
            />
            Profile Menu
          </div>
          <DropdownMenu>
            <DropdownItem url="/profile">
              <div style={{ margin: 0, padding: 0, display: "flex", alignItems: "center" }}>
                <img src={profileProfileIcon} alt="profile" style={{ marginRight: 10 }} />
                Profile
              </div>
            </DropdownItem>
            <DropdownItem url="/articles-management">
              <div style={{ margin: 0, padding: 0, display: "flex", alignItems: "center" }}>
                <img src={articlesManageIcon} alt="articles management" style={{ marginRight: 10 }} />
                Articles Management
              </div>
            </DropdownItem>
            <DropdownItem url="/feedback">
              <div style={{ margin: 0, padding: 0, display: "flex", alignItems: "center" }}>
                <img src={feedbackIcon} alt="Feedback" style={{ marginRight: 10 }} />
                Feedback
              </div>
            </DropdownItem>
            <DropdownItem url="/settings">
              <div style={{ margin: 0, padding: 0, display: "flex", alignItems: "center" }}>
                <img src={settingsIcon} alt="settings" style={{ marginRight: 10 }} />
                Settings
              </div>
            </DropdownItem>
            <DropdownItem url="/logout">
              <div style={{ margin: 0, padding: 0, display: "flex", alignItems: "center" }}>
                <img src={logOutIcon} alt="Log out" style={{ marginRight: 10 }} />
                Log out
              </div>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </MenuItem>
    </Menu>
  );
};

export default App;
