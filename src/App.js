import React, { Component } from 'react';
import logo from './codetalks.png';
import './styles/App.css';

import { db } from 'baqend/realtime'
import { BaqendProvider } from './baqend'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import QuestionCreateScreen from './screens/QuestionCreateScreen'
import QuestionListScreen from './screens/QuestionListScreen'
import QuestionDetailsScreen from './screens/QuestionDetailsScreen'

class App extends Component {

  render() {
    return (
      <BaqendProvider db={db.connect('codetalks17', true)}>
        <Router>
          <div className="app">
            <Route exact path="/" component={QuestionListScreen}/>
            <Route exact path="/create" component={QuestionCreateScreen}/>
            <Route path="/item/:id" component={QuestionDetailsScreen}/>
          </div>
        </Router>
      </BaqendProvider>
    );
  }

}

export default App;
