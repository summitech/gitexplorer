import React, { Component } from 'react';
import { Footer, Nav } from 'components';
import Select from 'react-select';
import classnames from 'classnames';

const optionsFirst = [{ value: 'Something', label: 'Something' }];
const optionsSecond = [{ value: 'Something', label: 'Something' }];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dark: JSON.parse(localStorage.getItem('dark')) || false
    };

    this.toggleMode = this.toggleMode.bind(this);
  }

  toggleMode() {
    this.setState(
      prevState => ({ dark: !prevState.dark }),
      () => {
        localStorage.setItem('dark', this.state.dark);
      }
    );
  }

  render() {
    return (
      <div className={`home ${classnames({ dark: this.state.dark })}`}>
        <div className="container home__container">
          <Nav mode={this.state.dark} toggleMode={this.toggleMode} />
          <div className="content">
            <div className="row">
              <div className="col-5">
                <h2 className="content__title  dark-white">
                  Git <span>Command</span> Explorer
                </h2>
                <p className="content__subtitle dark-grey">
                  Find the right commands you need without digging through the web
                </p>

                <div className="options">
                  <h4 className="options__title">I want to:</h4>

                  <Select
                    placeholder="..."
                    className="options__select"
                    classNamePrefix="options__select"
                    isSearchable={false}
                    // value={selectedOption}
                    options={optionsFirst}
                  />

                  <Select
                    placeholder="..."
                    className="options__select"
                    classNamePrefix="options__select"
                    isSearchable={false}
                    // value={selectedOption}
                    options={optionsSecond}
                  />
                </div>
              </div>
              <div className="col-7">
                <div className="board">
                  <p>git config --global user.name "Sam Smith"</p>
                  <p>git config --global user.name "Sam Smith"</p>
                </div>
              </div>
            </div>
          </div>
          <Footer dark={this.state.dark} />
        </div>
      </div>
    );
  }
}

export default App;
