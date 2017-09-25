import React, { Component } from 'react'
import { baqend } from 'react-baqend-provider'

import QuestionComponent from './QuestionComponent'

class Question extends Component {

  constructor(props) {
    super(props)
    this.state = {
      question: props.question
    }
  }

  onUpvote = () => {
    const { question } = this.state
    question.optimisticSave((question) => {
      question.upvotes++
    }).then((question) => {
      this.setState({ question })
    })
  }

  render() {
    return (
      <QuestionComponent question={this.state.question} onUpvote={this.onUpvote} />
    )
  }

}

export default Question;
