import React from "react";
import PropTypes from "prop-types";
import "./MenuItem.css";
import { Dropdown } from "./Dropdown";

// 8 пропсов:
// Лейбл text
// Выключатель лейбла noText
// Индикатор выпадающего меню hasSubMenu
// Колбэк onClick,
// Имя иконки icon,
// Дочки children
// Стили type, position, direction, disabled, active

export const MenuItem = (props) => {
  // must have props
  const { text, noText, hasSubMenu, onClick, icon, children } = props;
  
  // extra props 
  const { type, position, direction, active, disabled} = props;

  console.log(children);

  const noSubMenu = !hasSubMenu;
  const showText = !noText;

  // стиль - набор классов формируется из пропсов
  const className = `
    menu-item
    ${type}
    ${position}
    ${direction}
    ${disabled ? "disabled" : ""}
    ${active ? "active" : ""}
  `
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean)
    .join(" ");
  
  const handleOnClick = !disabled ? onClick : undefined

  return (
    <div className={className} onClick={handleOnClick}>
      {hasSubMenu
        ? <Dropdown {...props} children={children} />
        : icon && <img src={icon} alt={text} className="icon" />
      }
      {noSubMenu && showText ? text : ""}
      {hasSubMenu ? '' : children}
    </div>
  );
};

// Если есть иконка- показываю ее
// Если есть метка выключателя лейбла, то сразу показываю детей. 
// Если нет выключателя - отображаю сначала лейбл, а потом - детей
// Прошлая версия иконки
// {icon && <img src={`../images/${icon}-icon.svg`} alt={`${icon} icon`} className="icon" />}


// text isRequired это нужно и для alt-текста картинок, и для подсказки ссылки
MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  position: PropTypes.string,
  direction: PropTypes.string,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  noText: PropTypes.bool,
  hasSubMenu: PropTypes.bool,
  children: PropTypes.node,
};

MenuItem.defaultProps = {
  onClick: () => {},
  type: "",
  position: "",
  direction: "",
  icon: "",
  disabled: false,
  active: false,
  noText: false,
  hasSubMenu: false,
  children: null,
};
