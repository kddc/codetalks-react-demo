import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';

import { db } from 'baqend/realtime'
import { BaqendProvider } from './baqend'

import Stream from './components/Stream/Stream'

class App extends Component {

  render() {
    return (
      <BaqendProvider db={db.connect('codetalks17', true)}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Stream />
        </div>
      </BaqendProvider>
    );
  }
}

export default App;
