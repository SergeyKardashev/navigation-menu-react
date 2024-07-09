import React, { useState } from "react";
import dropdownIcon from "./images/arrow.svg";

export function MenuItem({ label, children }) {
  const [open, setOpen] = useState(false);

  const hasSubMenu = !!children;

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <li className={`menu-item ${hasSubMenu}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="menu-item_label">
        {label} {hasSubMenu && <img alt="dropdown-icon" src={dropdownIcon} className="dropdown-icon" />}
      </div>
      {hasSubMenu && open && <ul className="submenu">{children}</ul>}
    </li>
  );
}
