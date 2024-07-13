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
    
  // `.split('\n') разлезает строку на массив по разрывам строк
  // .map(s => s.trim()) удаляет пробелы в начале и конце строк
  // .filter(Boolean) Удаляет все пустые строки из массива.
  // .join(' '); Объединяет массив строк в одну строку с одним пробелом между элементами.


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
      {icon && <img src={`/images/${icon}-icon.svg`} alt={`${icon} icon`} className="icon" />}
      {children || text}
    </div>
  );
};

// отменил обязательность текста.
// text: PropTypes.string,.isRequired
MenuItem.propTypes = {
  text: PropTypes.string,
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
