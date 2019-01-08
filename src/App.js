import React, { Component } from 'react';
import { Footer, Nav } from 'components';
import Typist from 'react-typist';
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
      nb: '',
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
        nb: '',
        usage: ''
      });
    } else {
      this.setState({ firstOption: selectedOption, showSecond: true });
    }
  };

  onSecondChange = (selectedOption) => {
    if (selectedOption.usage) {
      this.setState({ nb: '', usage: '' }, () => {
        this.setState({
          secondOption: selectedOption,
          showThird: false,
          nb: selectedOption.nb,
          usage: selectedOption.usage,
          thirdOption: null
        });
      });
    } else {
      this.setState({
        secondOption: selectedOption,
        showThird: true,
        thirdOption: null,
        nb: '',
        usage: ''
      });
    }
  };

  onThirdChange = (selectedOption) => {
    this.setState({ nb: '', usage: '' }, () => {
      this.setState({
        thirdOption: selectedOption,
        nb: selectedOption.nb,
        usage: selectedOption.usage
      });
    });
  };

  render() {
    const {
      firstOption,
      secondOption,
      thirdOption,
      showSecond,
      showThird,
      nb,
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
                  Find the right commands you need without digging through the web.
                </p>

                <div className="options">
                  <h4 className="options__title">I want to:</h4>

                  <Select
                    placeholder="..."
                    className="options-select"
                    classNamePrefix="options-select"
                    isSearchable={true}
                    onChange={this.onFirstChange}
                    value={firstOption}
                    options={optionsFirst}
                  />

                  {showSecond ? (
                    <Select
                      placeholder="..."
                      className="options-select"
                      classNamePrefix="options-select"
                      isSearchable={true}
                      onChange={this.onSecondChange}
                      value={secondOption}
                      options={optionsSecond[firstOption.value]}
                    />
                  ) : null}

                  {showThird ? (
                    <Select
                      placeholder="..."
                      className="options-select"
                      classNamePrefix="options-select"
                      isSearchable={true}
                      onChange={this.onThirdChange}
                      value={thirdOption}
                      options={optionsThird[secondOption.value]}
                    />
                  ) : null}
                </div>
              </div>
              <div className="col-7 boards">
                <div className="board__group">
                  <h2 className="board__title  dark-white">Usage</h2>
                  <div className="board board--1">
                    <pre>
                      {usage.length ? (
                        <Typist avgTypingDelay={50} cursor={{ show: false }}>
                          {usage}
                        </Typist>
                      ) : null}
                    </pre>
                  </div>

                  {nb ? (
                    <div className="board__group board__group--2">
                      <h2 className="board__title  dark-white">Note</h2>
                      <div className="board board--2">
                        <pre className="faded">
                          <Typist avgTypingDelay={50} cursor={{ show: false }}>
                            {nb}
                          </Typist>
                        </pre>
                      </div>
                    </div>
                  ) : null}
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
