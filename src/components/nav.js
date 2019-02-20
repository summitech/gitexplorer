import React from 'react';
import PropTypes from 'prop-types';
import Toggle from './toggle';

const Nav = ({
  fastType, mode, toggleFastType, toggleMode
}) => (
  <nav className="nav">
    <Toggle
      checked={fastType}
      leftLabel="Normal type speed"
      name="fastType"
      onChange={toggleFastType}
      rightLabel="Fast type speed"
    />
    <Toggle
      checked={mode}
      leftLabel="Light Mode"
      name="color"
      onChange={toggleMode}
      rightLabel="Dark Mode"
    />
  </nav>
);

Nav.propTypes = {
  fastType: PropTypes.bool,
  mode: PropTypes.bool,
  toggleFastType: PropTypes.func,
  toggleMode: PropTypes.func
};

export { Nav };
