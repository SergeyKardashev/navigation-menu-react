import React from 'react';
import PropTypes from 'prop-types';
import './MenuItem.css';

// 8 пропсов: 
// Лейбл text 
// Выключатель лейбла noText
// Колбэк onClick, 
// Имя иконки icon, 
// Дочки children 
// Стили type, position, direction, disabled, active

export const MenuItem = ({ text, noText, onClick, type, position, direction, icon, disabled, active, children }) => {
  
  // стиль формируется из пропсов
  const className = `
    menu-item
    ${type}
    ${position}
    ${direction}
    ${disabled ? 'disabled' : ''}
    ${active ? 'active' : ''}
  `.split('\n')
   .map(s => s.trim())
   .filter(Boolean)
   .join(' ');

  return (
    <div className={className} onClick={!disabled ? onClick : undefined}>
      {/* {icon && <img src={`../images/${icon}-icon.svg`} alt={`${icon} icon`} className="icon" />} */}
      {icon && <img src={icon} alt={text} className="icon" />}
      {/* Если есть метка выключателя лейбла, то показываю детей. 
      Если нет выключателя - отображаю лейбл */}
      {noText ? children : (children || text)}
    </div>
  );
};

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
  children: PropTypes.node,
};

MenuItem.defaultProps = {
  onClick: () => {},
  type: '',
  position: '',
  direction: '',
  icon: '',
  disabled: false,
  active: false,
  children: null,
};
