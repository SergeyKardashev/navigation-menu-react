import React from 'react';
import PropTypes from 'prop-types';
import './Menu.css';

export const Menu = ({ children, className }) => {
  return (
    <ul className={className || 'menu'}>
      {children}
    </ul>
  );
};

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Menu.defaultProps = {
  className: 'menu',
};

// export default Menu;
