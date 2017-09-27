import React, { Component } from 'react'
import { baqend } from 'react-baqend-provider'

import QuestionCreateComponent from './QuestionCreateComponent'

class QuestionCreate extends Component {

  onSubmit = (data) => {
    const { db } = this.props
  }

  render() {
    return (
      <QuestionCreateComponent onSubmit={this.onSubmit} />
    )
  }

}

export default baqend(QuestionCreate)
