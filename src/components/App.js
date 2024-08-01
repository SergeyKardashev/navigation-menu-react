import React, { useState } from "react";
import { Link } from "react-router-dom";

// translations
import T from "i18n-react";
import { translations } from "../translations";

import "./Menu.css";
// arbitrary images
import siteLogo from "../images/site-logo.svg";
import avatar from "../images/avatar-my.svg";

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
import fancyDropdownIconL from "../images/fancy-icon-left.svg";
import fancyDropdownIconR from "../images/fancy-icon-right.svg";

// wrapper for entire Menu with submenu
const Menu = ({ children }) => {
  return <ul className="list-none p-0 m-0 flex items-stretch bg-white min-h-20">{children}</ul>;
};

// Main item. Can contain sub menu (dropdown)
const MenuItem = ({ children, url, icon, text = "item", noText, iconPR, iconPL, alt = text, alignR }) => {
  const menuItemClass = `p-0 relative flex items-stretch ${alignR ? "ml-auto" : ""}`;

  const iconClass = `icon ${iconPR ? "icon_pr" : ""} ${iconPL ? "icon_pl" : ""}`;
  const content = (
    <>
      {icon ? <img src={icon} alt={alt} className={iconClass} /> : ""}
      {children || (noText ? "" : text)}
    </>
  );

  return (
    <li className={menuItemClass}>
      {url ? (
        <Link
          to={url}
          title={text}
          className="w-full flex px-5 py-0"
          // style={{ width: "100%", display: "flex", padding: "0px 20px" }}
        >
          {content}
        </Link>
      ) : (
        <span
          title={text}
          className="w-full flex jus justify-start"
          // style={{ width: "100%", display: "flex", justifyContent: "flex-start" }}
        >
          {content}
        </span>
      )}
    </li>
  );
};

// Header inside menu. It can live on its onw, but cat has list as a child
const MenuHeader = ({ children }) => {
  return (
    <div
      className='px-2 py-5 cursor-default font-black flex flex-nowrap justify-between items-center'
      // className="dropdown-item dropdown-item_header"
    >
      {children}
  </div>);
};

// wrapper for label of dropdown and list of items
const Dropdown = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      title=""
      // className="dropdown"
      className="cursor-pointer flex items-stretch relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        // className="dropdown-label"
        className="py-0 flex justify-start items-center	whitespace-nowrap"
      >
        <span
          className="w-full flex justify-start"
          // style={{ width: "100%", display: "flex", justifyContent: "flex-start" }}
        >
          {children[0]}
        </span>
        <img
          src={dropdownIcon}
          alt={T.translate("downArrow")}
          className='ml-1'
          // style={{ marginLeft: 5 }}
        />
      </div>
      {isOpen && <div
        // className="dropdown-menu"
        className='block absolute top-full left-0 bg-white shadow-md z-10 w-max min-w-full max-w-80 px-0 py-2 cursor-default'
      >
        {children[1]}
      </div>}
    </div>
  );
};

// wrapper for list of items
const DropdownMenu = ({ children }) => {
  return <>{children}</>;
};

// item of dropdown menu
const DropdownItem = ({ children, icon, text = "", noText, iconPL, iconPR, url }) => {
  const iconClass = `icon ${iconPL ? "icon_pl" : ""} ${iconPR ? "icon_pr" : ""}`;
  return (
    <div className="dropdown-item">
      <Link to={url} className="dropdown-link" title={text}>
        {icon && (
          <span className={iconClass}>
            <img src={icon} alt={text} />
          </span>
        )}
        {children || (noText ? "" : text)}
      </Link>
    </div>
  );
};

const App = () => {
  const [lang, setLang] = useState("en");

  T.setTexts(translations[lang]);

  const changeLanguage = (language) => {
    setLang(language);
    T.setTexts(translations[language]);
  };

  return (
    <>
      <div className="text-right text-2xl p-4">
        <span className="font-bold pr-4">Language</span>
        <button
          onClick={() => {
            changeLanguage("ru");
          }}
          className="bg-white px-4 py-2 mr-4"
        >
          Русский
        </button>
        <button
          onClick={() => {
            changeLanguage("en");
          }}
          className="bg-white px-4 py-2"
        >
          English
        </button>
      </div>
      <Menu>
        <MenuItem text="это все мое" url="/">
          <img src={siteLogo} alt={T.translate("siteLogo")} style={{ height: 40, width: 40, marginRight: 10 }} />
          {T.translate("siteName")}
        </MenuItem>
        <MenuItem text={T.translate("menuItem")} url="/" />
        <MenuItem
          text={T.translate("iconAndText")}
          url="/"
          icon={starIcon}
          alt={T.translate("starIcon")}
          iconPR
        ></MenuItem>
        <MenuItem>
          <Dropdown>
            {T.translate("basicMenu")}
            <DropdownMenu>
              <DropdownItem text={T.translate("city.sidney")} url="/sidney" />
              <DropdownItem text={T.translate("city.stockholm")} url="/stockholm" />
              <DropdownItem text={T.translate("city.newDelhi")} url="/new-delhi" />
              <DropdownItem text={T.translate("city.beijing")} url="/beijing" />
            </DropdownMenu>
          </Dropdown>
        </MenuItem>
        <MenuItem>
          <Dropdown>
            <div style={{ margin: 0, padding: 0, display: "flex", alignItems: "center" }}>
              <img src={fancyDropdownIconL} alt="лого" style={{ height: 20 }} />
              <span style={{ color: "coral" }}>{T.translate("fancyDropdown")}</span>
              <img src={fancyDropdownIconR} alt={T.translate("fancyDropdownIcon")} style={{ height: 20 }} />
            </div>
            <DropdownMenu>
              <MenuHeader>
                <span style={{ marginRight: 10 }}>{T.translate("cities")}</span>
                <button type="button" style={{ cursor: "pointer" }}>
                  {T.translate("IAmAButton")}
                </button>
              </MenuHeader>
              <hr />
              <DropdownItem
                text={T.translate("city.sidney")}
                url="/sidney"
                icon={starIcon}
                iconPR
                alt={T.translate("starIcon")}
              />
              <DropdownItem text={T.translate("city.stockholm")} url="/stockholm" />
              <DropdownItem text={T.translate("city.newDelhi")} url="/new-delhi" />
              <DropdownItem text={T.translate("city.beijing")} url="/beijing" />
              <hr />
              <p style={{ margin: "20px 20px" }}>{T.translate("basicText")}</p>
              <hr />
              <MenuHeader>{T.translate("parks")}</MenuHeader>
              <DropdownItem
                text={T.translate("centralPark")}
                url="/central-park"
                icon={radioBtnIconOff}
                iconPR
                alt={T.translate("radioButtonOffIcon")}
              />
              <DropdownItem
                text={T.translate("industrialPark")}
                url="/industrial-park"
                icon={radioBtnIconOn}
                iconPR
                alt={T.translate("radioButtonOnIcon")}
              />
            </DropdownMenu>
          </Dropdown>
        </MenuItem>
        <MenuItem
          text={T.translate("bookmarks")}
          noText
          url="/bookmark"
          icon={bookmarkIcon}
          alt={T.translate("bookmarksIcon")}
        />
        <MenuItem
          text={T.translate("notifications")}
          noText
          url="/notifications"
          icon={bellIcon}
          alt={T.translate("notificationsIcon")}
        ></MenuItem>
        <MenuItem alignR>
          <Dropdown>
            <div style={{ margin: 0, padding: 0, display: "flex", alignItems: "center" }}>
              <img
                alt={T.translate("avatar")}
                src={avatar}
                style={{ height: 40, marginRight: 8, border: "1px solid gray", borderRadius: "50%" }}
              />
              {T.translate("profileMenu")}
            </div>
            <DropdownMenu>
              <DropdownItem
                text={T.translate("profile")}
                url="/profile"
                icon={profileProfileIcon}
                iconPR
                alt={T.translate("profileIcon")}
              />
              <DropdownItem
                text={T.translate("articlesManagement")}
                url="/articles-management"
                icon={articlesManageIcon}
                iconPR
                alt={T.translate("articlesManageIcon")}
              />
              <DropdownItem
                text={T.translate("feedback")}
                url="/feedback"
                icon={feedbackIcon}
                iconPR
                alt={T.translate("feedbackIcon")}
              />
              <DropdownItem
                text={T.translate("settings")}
                url="/settings"
                icon={settingsIcon}
                iconPR
                alt={T.translate("settingsIcon")}
              />
              <DropdownItem
                text={T.translate("logout")}
                url="/logout"
                icon={logOutIcon}
                iconPR
                alt={T.translate("logoutIcon")}
              />
            </DropdownMenu>
          </Dropdown>
        </MenuItem>
      </Menu>
    </>
  );
};

export default App;
