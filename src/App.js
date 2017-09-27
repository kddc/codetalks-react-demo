import React, { Component } from 'react'
import './styles/App.css'

import { db } from 'baqend/realtime'
import { BaqendProvider } from 'react-baqend-provider'

import AppLayout from './layouts/AppLayout';
import QuestionList from './components/QuestionList/QuestionList'

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
