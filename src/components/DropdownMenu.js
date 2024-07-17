import React from "react";
import "./DropdownMenu.css";
import { DropdownItem } from "./DropdownItem";

// import { MenuItem } from "./MenuItem";

export function DropdownMenu(props) {
  const { children, className } = props;

  return (
    <div className='dropdown-menu'>
      <DropdownItem>
        {children}
      </DropdownItem>
        
      {/* submenu */}
      {/* {children} */}
      {/* 🟡🟡🟡 кусок из предка 🟡🟡🟡
        <DropdownMenu className={dropdownMenuClass}>
          {children}
        </DropdownMenu> 
      */}
      {/* {children.map((i)=>i)} */}
      {/* <ul>
        <li>item1</li>
        <li>item2</li>
      </ul> */}
    </div>
  );
}
