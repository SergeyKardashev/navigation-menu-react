import React from 'react';
import PropTypes from 'prop-types';
import './Menu.css';

export const Menu = ({ children, className }) => {
  return (
    <div className={className || 'menu'}>
      {children}
    </div>
  );
};

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Menu.defaultProps = {
  className: 'menu',
};
