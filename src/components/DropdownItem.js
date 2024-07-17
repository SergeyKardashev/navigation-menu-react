import React from "react";
import "./DropdownItem.css";

export function DropdownItem(props) {
  const { text, children, icon } = props;

  return (
    <div className="dropdown-item">
      {icon ? <img src={icon} alt={text} /> : ""}
      <span>{text}{text}</span>
      {children}
    </div>
  );
}
