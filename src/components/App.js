import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// translations
import T from "i18n-react";
import { translations } from "../translations";

// arbitrary images
import siteLogo from "../images/site-logo.svg";
import avatar from "../images/avatar-my.svg";

// main menu icons
import bellIcon from "../images/bell-icon.svg";
import bookmarkIcon from "../images/bookmark-icon.svg";

// dropdown icons
import dropdownIcon from "../images/dropdown-icon.svg";
import radioBtnIconOff from "../images/radio-btn-icon-off.svg";
import radioBtnIconOn from "../images/radio-btn-icon-on.svg";
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
  const menuItemClass = `p-0 relative flex items-stretch ${alignR ? "ml-auto" : ""} `;

  // const iconClass = `icon ${iconPR ? "icon_pr" : ""} ${iconPL ? "icon_pl" : ""}`;
  const iconClass = `w-5 h-5 ${iconPR ? "mr-2" : ""} ${iconPL ? "ml-2" : ""}`;
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
          className="w-full flex px-5 py-0 items-center hover:bg-menu-hover"
          // style={{ width: "100%", display: "flex", padding: "0px 20px" }}
        >
          {content}
        </Link>
      ) : (
        <span
          title={text}
          className="w-full flex px-0 justify-start items-stretch hover:bg-menu-hover"
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
      className="px-5 py-2 cursor-default font-black flex flex-nowrap justify-between items-center"
      // className="dropdown-item dropdown-item_header"
    >
      {children}
    </div>
  );
};

// wrapper for label of dropdown and list of items
const Dropdown = ({ children }) => {
  // 🔴 useState(true) makes dropdown menu open by default. Fix before release
  const [isOpen, setIsOpen] = useState(true);

  // 🟡 style variable
  const [position, setPosition] = useState("left-0");

  // 🟡 useRef provides the link to dropdown list (container of items)
  // It refers to the DOM item that has property 'ref={dropdownRef}'
  const dropdownRef = useRef(null);


  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  // 🟡 useEffeсt checks if dropdown fits the viewport
  useEffect(() => {
    // Check if menu is open and there is a link to DOMelement `dropdownRef` 
    if (isOpen && dropdownRef.current) {
      // Get dropdown menu dimensions
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const parentRect = dropdownRef.current.parentNode.getBoundingClientRect();
      if (dropdownRect.right > window.innerWidth) {
        setPosition("right-0");
      } else if (parentRect.left < 0) {
        setPosition("left-0");
      }
    }
  }, [isOpen]);

  return (
    <div
      title=""
      // className="dropdown"
      className="cursor-pointer flex items-stretch relative"
      onMouseEnter={handleMouseEnter}
      // 🔴 onMouseLeave makes menu close. Uncomment before release
      onMouseLeave={handleMouseLeave}

    >
      <div
        // className="dropdown-label"
        className="px-5 py-0 flex justify-start items-center whitespace-nowrap "
      >
        <span
          className="w-full flex justify-start flex-1"
          // .dropdown-label span { flex: 1 }
          // style={{ width: "100%", display: "flex", justifyContent: "flex-start" }}
        >
          {children[0]}
        </span>
        <img
          src={dropdownIcon}
          alt={T.translate("downArrow")}
          className="ml-1"
          // style={{ marginLeft: 5 }}
        />
      </div>
      {isOpen && (
        <div
          ref={dropdownRef}
          // className="dropdown-menu"
          className={`block absolute top-full ${position} bg-white shadow-md z-10 w-max min-w-full max-w-80 px-0 py-2 cursor-default`}
        >
          {children[1]}
        </div>
      )}
    </div>
  );
};

// wrapper for list of items
const DropdownMenu = ({ children }) => {
  return <>{children}</>;
};

// item of dropdown menu
const DropdownItem = ({ children, icon, text = "", noText, iconPL, iconPR, url }) => {
  // const iconClass = `icon ${iconPL ? "icon_pl" : ""} ${iconPR ? "icon_pr" : ""}`;
  const iconClass = `w-5 h-5 inline-block items-center ${iconPL ? "ml-2" : ""} ${iconPR ? "mr-2" : ""}`;
  return (
    <div className="px-5 py-2.5 hover:bg-menu-hover">
      {/* <div className="dropdown-item"> */}
      <Link to={url} className="flex items-center" title={text}>
        {/* no such class as dropdown-link, 
        but there is selector `.menu-item a` */}
        {/* <Link to={url} className="dropdown-link" title={text}> */}
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
      <div className="text-right text-xl p-4">
        <span className="font-bold pr-4">Language</span>
        <button
          onClick={() => {
            changeLanguage("ru");
          }}
          className="bg-white px-4 py-2 mr-4 rounded"
        >
          Русский
        </button>
        <button
          onClick={() => {
            changeLanguage("en");
          }}
          className="bg-white px-4 py-2 rounded"
        >
          English
        </button>
      </div>
      <Menu>
        <MenuItem text="It's mine" url="/">
          <img
            src={siteLogo}
            alt={T.translate("siteLogo")}
            // style={{ height: 40, width: 40, marginRight: 10 }}
            className="h-10 w-10 mr-2.5 rounded-full border-2 border-primary"
          />
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
            <div
              // style={{ margin: 0, padding: 0, display: "flex", alignItems: "center" }}
              className="m-0 p-0 flex items-center"
            >
              <img
                src={fancyDropdownIconL}
                alt="лого"
                // style={{ height: 20 }}
                className="h-5"
              />
              <span
                // style={{ color: "coral" }}
                className="text-coral"
              >
                {T.translate("fancyDropdown")}
              </span>
              <img
                src={fancyDropdownIconR}
                alt={T.translate("fancyDropdownIcon")}
                // style={{ height: 20 }}
                className="h-5"
              />
            </div>
            <DropdownMenu>
              <MenuHeader>
                <span
                  // style={{ marginRight: 10 }}
                  className="mr-2.5"
                >
                  {T.translate("cities")}
                </span>
                <button
                  type="button"
                  // style={{ cursor: "pointer" }}
                  className="px-2 py-1 cursor-pointer border border-solid border-gray-400 rounded font-normal"
                >
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
              <p
                // style={{ margin: "20px 20px" }}
                className="m-5"
              >
                {T.translate("basicText")}
              </p>
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
        {/* <MenuItem> */}
        <MenuItem alignR>
          <Dropdown>
            <div
              // style={{ margin: 0, padding: 0, display: "flex", alignItems: "center" }}
              className="m-0 p-0 flex items-center"
            >
              <img
                alt={T.translate("avatar")}
                src={avatar}
                // style={{ height: 40, marginRight: 8, border: "1px solid gray", borderRadius: "50%" }}
                className="h-10 mr-2 border border-solid border-gray-500 rounded-full"
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
