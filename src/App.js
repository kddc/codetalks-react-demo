import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';

import { db } from 'baqend/realtime'
import { BaqendProvider } from './baqend'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import CreateItemScreen from './screens/CreateItemScreen'
import ItemListScreen from './screens/ItemListScreen'
import ItemScreen from './screens/ItemScreen'

class App extends Component {

  render() {
    return (
      <BaqendProvider db={db.connect('codetalks17', true)}>
        <Router>
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
              <Link to="/create">Ask</Link>
              <Link to="/">List</Link>
            </div>

            <Route exact path="/" component={ItemListScreen}/>
            <Route exact path="/create" component={CreateItemScreen}/>
            <Route path="/item/:id" component={ItemScreen}/>

          </div>
        </Router>
      </BaqendProvider>
    );
  }

}

export default App;
