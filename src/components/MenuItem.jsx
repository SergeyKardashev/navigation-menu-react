import React, { useState } from "react";

export function MenuItem({ hasSubMenu, label, children }) {
  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <li className={`menu-item ${hasSubMenu}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="menu-item_label">
        {label} {{ hasSubMenu } && "▼"}
      </div>
      {hasSubMenu && open && <ul className="submenu">{children}</ul>}
    </li>
  );
}
