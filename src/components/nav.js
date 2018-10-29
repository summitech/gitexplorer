import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

const options = [{ value: 'English', label: 'English' }];

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: { value: 'English', label: 'English' }
    };
  }

  render() {
    const { selectedOption } = this.state;
    return (
      <nav className="nav">
        <div className="language">
          <p className="language__title dark-white">Language</p>
          <Select
            className="language__select"
            classNamePrefix="language__select"
            isSearchable={false}
            value={selectedOption}
            options={options}
          />
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
  mode: PropTypes.bool,
  toggleMode: PropTypes.func
};

export { Nav };
