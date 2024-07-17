import React, { useState } from "react";
import "./Dropdown.css";
import "./DropdownMenu.css";
import { DropdownMenu } from "./DropdownMenu";
import dropdownIcon from "../images/dropdown-icon.svg";

export function Dropdown(props) {
  const { text, noText, onClick, type, icon, children, markup } = props;
  const [isOpen, setIsOpen] = useState(false);
  const handleMouseEnter = () => {
    setIsOpen(true);
    console.log("mouse enter");
  };
  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  // стили - набор классов из пропсов 🟡 тест- открытый класс
  let dropdownMenuClass = `
    dropdown-menu open
    ${isOpen ? "open" : ""}
    `
    .split("\n").map((s) => s.trim()).filter(Boolean).join(" ");

  return (
    <div className='dropdown' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* .icon - любая иконка перед текстом */}
      {icon && <img src={icon} alt={text} className="icon" />}
      {noText ? "" : text}
      {/* <DropdownMenu children className={dropdownMenuClass}> */}
        {children}
      {/* </DropdownMenu> */}
      {/* шеврон справа .dropdown-icon */}
      <img src={dropdownIcon} alt="" className="dropdown-icon" />
    </div>
  );
}
