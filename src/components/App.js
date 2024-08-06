import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// translations
import T from "i18n-react";
import { translations } from "../translations";

// arbitrary images
import siteLogo from "../images/site-logo.svg";
import avatar from "../images/avatar-my.svg";

// main menu icons
import bellIcon from "../images/bell-icon.svg";

// dropdown icons
import dropdownIcon from "../images/dropdown-icon.svg";
import settingsIcon from "../images/profile-settings-icon.svg";
import logOutIcon from "../images/profile-logout-icon.svg";
import hamburgerIcon from "../images/hamburger_menu.svg";
import closeIcon from "../images/close_hamburger_menu.svg";

const Menu = ({ children }) => {
  return <ul className="bg-violet-300 md:bg-white h-16 md:min-h-20 list-none p-0 m-0 flex items-center">{children}</ul>;
};

const MenuItem = ({ children, url, icon, text = "item", noText, iconPR, iconPL, alt = text, alignR, className }) => {
  const menuItemClass = `p-0 relative flex items-center ${alignR ? "ml-auto" : ""} ${className || ""}`;

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
        <Link to={url} title={text} className="w-full flex px-5 py-0 items-center hover:bg-menu-hover">
          {content}
        </Link>
      ) : (
        <span title={text} className="w-full flex px-5 justify-start items-stretch hover:bg-menu-hover">
          {content}
        </span>
      )}
    </li>
  );
};

const Dropdown = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState("left-0");
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen && dropdownRef.current) {
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
      className="cursor-pointer flex items-stretch relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="px-5 py-0 flex justify-start items-center whitespace-nowrap ">
        <span className="w-full flex justify-start flex-1">{children[0]}</span>
        <img src={dropdownIcon} alt={T.translate("downArrow")} className="ml-1" />
      </div>
      {isOpen && (
        <div
          ref={dropdownRef}
          className={`block absolute top-full ${position} bg-white shadow-md z-10 w-max min-w-full max-w-80 px-0 py-2 cursor-default`}
        >
          {children[1]}
        </div>
      )}
    </div>
  );
};

const DropdownMenu = ({ children }) => {
  return <>{children}</>;
};

const DropdownItem = ({ children, icon, text = "", noText, iconPL, iconPR, url }) => {
  const iconClass = `w-5 h-5 inline-block items-center ${iconPL ? "ml-2" : ""} ${iconPR ? "mr-2" : ""}`;
  return (
    <div className="px-5 py-2.5 hover:bg-menu-hover">
      <Link to={url} className="flex items-center" title={text}>
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  T.setTexts(translations[lang]);

  const changeLanguage = (language) => {
    setLang(language);
    T.setTexts(translations[language]);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Menu>
        <MenuItem text={T.translate("siteName")} url="/" className="md:flex" />
        <li className="ml-auto md:hidden flex items-center">
          <button onClick={toggleMenu} className="p-4 focus:outline-none">
            <img src={isMenuOpen ? closeIcon : hamburgerIcon} alt="menu toggle icon" className="w-6 h-6" />
          </button>
        </li>
        <MenuItem text={T.translate("menuItem")} url="/" className="hidden md:flex" />
        <MenuItem className="hidden md:flex">
          <Dropdown>
            {T.translate("basicMenu")}
            <DropdownMenu>
              <DropdownItem text={T.translate("city.sidney")} url="/sidney" />
              <DropdownItem text={T.translate("city.stockholm")} url="/stockholm" />
            </DropdownMenu>
          </Dropdown>
        </MenuItem>
        <hr className="bg-menu-separator w-px h-16 p-0 ml-auto mt-auto mb-auto hidden md:block" />
        <MenuItem noText url="/notifications" icon={bellIcon} className="hidden md:flex" />
        <MenuItem className="hidden md:flex">
          <Dropdown>
            <div className="m-0 p-0 flex items-center">
              <img
                alt={T.translate("avatar")}
                src={avatar}
                className="h-10 mr-2 border border-solid border-gray-500 rounded-full"
              />
              {T.translate("profileMenu")}
            </div>
            <DropdownMenu>
              <DropdownItem text={T.translate("settings")} url="/settings" icon={settingsIcon} />
              <DropdownItem text={T.translate("logout")} url="/logout" icon={logOutIcon} />
            </DropdownMenu>
          </Dropdown>
        </MenuItem>
      </Menu>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white z-50 p-4">
          <ul className="list-none p-0 m-0">
            <MenuItem text="Link" url="/" />
            <MenuItem text="Sidney" url="/sidney" />
            <MenuItem text="Stockholm" url="/stockholm" />
            <MenuItem text="Settings" url="/settings" icon={settingsIcon} />
            <MenuItem text="Log out" url="/logout" icon={logOutIcon} />
          </ul>
        </div>
      )}
    </>
  );
};

export default App;
