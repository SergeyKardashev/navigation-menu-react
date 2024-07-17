import React from "react";
import { MenuItem } from "./MenuItem";
import { Dropdown } from "./Dropdown";
import { DropdownMenu } from "./DropdownMenu";
import { DropdownItem } from "./DropdownItem";
import avatar from "../images/avatar-my.svg";
import settings from "../images/settings-icon.svg";
import logout from "../images/logout-icon.svg";

export function UserDropDown(props) {
  const userName = "Иосиф";

  return (
    <MenuItem text="Иосиф" noText hasSubMenu>
      <img src={avatar} alt="ava" />
      <Dropdown text={userName}>
        <DropdownMenu>
          <DropdownItem icon={settings}>Настройки</DropdownItem>
          <DropdownItem text="Выход" icon={logout}></DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </MenuItem>
  );
}
