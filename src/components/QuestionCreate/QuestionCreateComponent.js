import React, { Component } from 'react'
import Form from '../Form/Form'

class QuestionCreateComponent extends Component {

  onSubmit = (data) => {
    this.props.onSubmit(data)
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit} />
      </div>
    )
  }

}

export default QuestionCreateComponent
