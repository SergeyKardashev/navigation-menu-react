import React, { useState } from "react";
import dropdownIcon from './images/dropdown-icon.svg'

export const MenuItem = ({ label, children }) => {
  const [open, setOpen] = useState(false);

  const hasSubMenu = !!children;
  
  const handleMouseEnter = () => {
    if (hasSubMenu) {
      setOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (hasSubMenu) {
      setOpen(false);
    }
  };

  return (
    <li
      className={`menu-item ${hasSubMenu ? "has-submenu" : ""} ${open ? "open" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="menu-item_label">
        <span> {label} </span>
        {hasSubMenu && <img alt="dropdown-icon" src={dropdownIcon} className="dropdown-icon" />}
      </div>
      {hasSubMenu && open && <ul className="submenu">{children}</ul>}
    </li>
  );
};
