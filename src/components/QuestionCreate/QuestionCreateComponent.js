import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Form from '../Form/Form'

class QuestionCreateComponent extends Component {

  onSubmit = () => {
  }

  render() {
    return (
      <div className="question-create">
        <Form onSubmit={this.onSubmit} />
      </div>
    )
  }

}

export default QuestionCreateComponent
