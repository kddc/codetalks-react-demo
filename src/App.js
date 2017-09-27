import React, { Component } from 'react'
import './styles/App.css'

import { db } from 'baqend/realtime'
import { BaqendProvider } from 'react-baqend-provider'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import AppLayout from './layouts/AppLayout';
import QuestionList from './components/QuestionList/QuestionList'
import QuestionCreate from './components/QuestionCreate/QuestionCreate'

class App extends Component {

  render() {
    return (
      <BaqendProvider db={db.connect('codetalks17', true)}>
        <div className="app">
          <AppLayout>
            <QuestionList />
          </AppLayout>
        </div>
      </BaqendProvider>
    );
  }

}

export default App;
