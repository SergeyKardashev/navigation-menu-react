import React, { useState } from "react";

export const MenuItem = ({ name, children, hasSubMenu = false }) => {
  const [open, setOpen] = useState(false);

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
      <div className="menu-item-name">
        {name} {hasSubMenu && <span>▼</span>}
      </div>
      {hasSubMenu && open && <ul className="submenu">{children}</ul>}
    </li>
  );
};
