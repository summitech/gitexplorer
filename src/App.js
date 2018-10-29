import React, { Component } from 'react';
import { Footer, Nav } from 'components';
import TypeWriter from 'react-typewriter';
import { optionsFirst, optionsSecond, optionsThird } from 'constants/index';
import Select from 'react-select';
import classnames from 'classnames';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dark: JSON.parse(localStorage.getItem('dark')) || false,
      firstOption: null,
      showSecond: false,
      secondOption: null,
      showThird: false,
      thirdOption: null,
      output: '',
      usage: ''
    };

    this.toggleMode = this.toggleMode.bind(this);
    this.onFirstChange = this.onFirstChange.bind(this);
    this.onSecondChange = this.onSecondChange.bind(this);
    this.onThirdChange = this.onThirdChange.bind(this);
  }

  toggleMode() {
    this.setState(
      prevState => ({ dark: !prevState.dark }),
      () => {
        localStorage.setItem('dark', this.state.dark);
      }
    );
  }

  onFirstChange = (selectedOption) => {
    if (this.state.secondOption) {
      this.setState({
        firstOption: selectedOption,
        showSecond: true,
        secondOption: null,
        showThird: false,
        output: '',
        usage: ''
      });
    } else {
      this.setState({ firstOption: selectedOption, showSecond: true });
    }
  };

  onSecondChange = (selectedOption) => {
    if (selectedOption.output) {
      this.setState({
        secondOption: selectedOption,
        showThird: false,
        output: selectedOption.output,
        usage: selectedOption.usage,
        thirdOption: null
      });
    } else {
      this.setState({
        secondOption: selectedOption,
        showThird: true,
        thirdOption: null,
        output: '',
        usage: ''
      });
    }
  };

  onThirdChange = (selectedOption) => {
    this.setState({
      thirdOption: selectedOption,
      output: selectedOption.output,
      usage: selectedOption.usage
    });
  };

  render() {
    const {
      firstOption,
      secondOption,
      thirdOption,
      showSecond,
      showThird,
      output,
      usage
    } = this.state;
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
                    onChange={this.onFirstChange}
                    value={firstOption}
                    options={optionsFirst}
                  />

                  {showSecond ? (
                    <Select
                      placeholder="..."
                      className="options__select"
                      classNamePrefix="options__select"
                      isSearchable={false}
                      onChange={this.onSecondChange}
                      value={secondOption}
                      options={optionsSecond[firstOption.value]}
                    />
                  ) : null}

                  {showThird ? (
                    <Select
                      placeholder="..."
                      className="options__select"
                      classNamePrefix="options__select"
                      isSearchable={false}
                      onChange={this.onThirdChange}
                      value={thirdOption}
                      options={optionsThird[secondOption.value]}
                    />
                  ) : null}
                </div>
              </div>
              <div className="col-7">
                <h2 className="board__title  dark-white">Usage</h2>

                <div className="board board--1">
                  <TypeWriter typing={1}>{usage}</TypeWriter>
                </div>

                {output.length ? (
                  <React.Fragment>
                    <h2 className="board__title  dark-white">Output</h2>
                    <div className="board board--2">
                      <TypeWriter typing={1}>{output}</TypeWriter>
                    </div>
                  </React.Fragment>
                ) : null}
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
