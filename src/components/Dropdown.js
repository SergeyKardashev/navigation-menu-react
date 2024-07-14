import React from "react";
import "./Dropdown.css";
import { DropdownMenu } from "./DropdownMenu";
import "./DropdownMenu.css";
import dropdownIcon from "../images/dropdown-icon.svg";

export function Dropdown({ children, direction }) {
  // стили - набор классов из пропсов
  const dropdownClassName = `
        dropdown
        ${direction}
    `;

  return (
    <div className={dropdownClassName}>
        <DropdownMenu {...children} />
        <img src={dropdownIcon} alt='' className="dropdown-icon" />
    </div>
  );
}
