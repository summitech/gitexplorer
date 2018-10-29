import React, { Component } from 'react';
import { Footer, Nav } from 'components';

class App extends Component {
  render() {
    return (
      <div className="home">
        <Nav />
        <p style={{ color: '#000' }}>Hello world</p>
        <Footer />
      </div>
    );
  }
}

export default App;
