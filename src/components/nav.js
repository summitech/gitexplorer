import React from 'react';
import PropTypes from 'prop-types';
import Toggle from './toggle';

const Nav = ({ fastType, mode, onToggle }) => (
  <nav className="nav">
    <Toggle
      checked={fastType}
      leftLabel="Normal type speed"
      name="fastType"
      onChange={onToggle}
      rightLabel="Fast type speed"
    />
    <Toggle
      checked={mode}
      leftLabel="Light Mode"
      name="dark"
      onChange={onToggle}
      rightLabel="Dark Mode"
    />
  </nav>
);

Nav.propTypes = {
  fastType: PropTypes.bool,
  mode: PropTypes.bool,
  onToggle: PropTypes.func,
};

export { Nav };
