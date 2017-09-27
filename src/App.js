import React, { Component } from 'react'
import './styles/App.css'

import { db } from 'baqend/realtime'
import { BaqendProvider } from 'react-baqend-provider'
import { BrowserRouter, Route } from 'react-router-dom'

import AppLayout from './layouts/AppLayout';
import QuestionList from './components/QuestionList/QuestionList'
import QuestionCreate from './components/QuestionCreate/QuestionCreate'
import QuestionDetails from './components/QuestionDetails/QuestionDetails'

class App extends Component {

  render() {
    return (
      <BaqendProvider db={db.connect('codetalks17', true)}>
        <BrowserRouter>
          <div className="app">
            <AppLayout>
              <Route exact path="/" component={QuestionList} />
              <Route path="/ask" component={QuestionCreate} />
              <Route path="/question/:id" component={QuestionDetails} />
            </AppLayout>
          </div>
        </BrowserRouter>
      </BaqendProvider>
    );
  }

}

export default App;
