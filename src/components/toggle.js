import React from 'react';
import PropTypes from 'prop-types';

const Toggle = ({
  checked, leftLabel, name, onChange, rightLabel
}) => (
  <div className="toggle">
    <p className="toggle__option toggle__option--left dark-white">{leftLabel}</p>
    <div className="toggler">
      <label htmlFor={name}>
        <input type="checkbox" id={name} checked={checked} onChange={onChange} />
        <span className="switch" />
        <span className="button"> </span>
      </label>
    </div>
    <p className="toggle__option toggle__option--right dark-white">{rightLabel}</p>
  </div>
);

Toggle.propTypes = {
  checked: PropTypes.bool,
  leftLabel: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  rightLabel: PropTypes.string
};

export default Toggle;
