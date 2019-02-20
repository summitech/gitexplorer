import React from 'react';
import PropTypes from 'prop-types';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: { value: 'English', label: 'English' }
    };
  }

  render() {
    return (
      <nav className="nav">
        <div className="toggle">
          <p className="toggle__option toggle__option--left  dark-white">Normal type speed</p>
          <div className="toggler">
            <label htmlFor="fastType">
              <input
                type="checkbox"
                id="fastType"
                checked={this.props.fastType}
                onChange={this.props.toggleFastType}
              />
              <span className="switch" />
              <span className="button"> </span>
            </label>
          </div>
          <p className="toggle__option toggle__option--right  dark-white">Fast type speed</p>
        </div>
        <div className="toggle">
          <p className="toggle__option toggle__option--left  dark-white">Light Mode</p>
          <div className="toggler">
            <label htmlFor="color">
              <input
                type="checkbox"
                id="color"
                checked={this.props.mode}
                onChange={this.props.toggleMode}
              />
              <span className="switch" />
              <span className="button"> </span>
            </label>
          </div>
          <p className="toggle__option toggle__option--right  dark-white">Dark Mode</p>
        </div>
      </nav>
    );
  }
}

Nav.propTypes = {
  fastType: PropTypes.string,
  mode: PropTypes.bool,
  toggleFastType: PropTypes.func,
  toggleMode: PropTypes.func,
};

export { Nav };
