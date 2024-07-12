import React from 'react';
import PropTypes from 'prop-types';
import './MenuItem.css';

// 8 пропсов: 
// Лейбл text 
// Колбэк onClick, 
// Имя иконки icon, 
// Дочки children 
// Стили type, position, direction, disabled, active

export const MenuItem = ({ text, onClick, type, position, direction, icon, disabled, active, children }) => {
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
    <li className={className} onClick={!disabled ? onClick : undefined}>
      {icon && <img src={`/images/${icon}-icon.svg`} alt={`${icon} icon`} className="icon" />}
      {children || text}
    </li>
  );
};

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

// export default MenuItem;