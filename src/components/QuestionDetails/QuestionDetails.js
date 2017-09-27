import React, { Component } from 'react'
import { baqend } from 'react-baqend-provider'

import QuestionDetailsComponent from './QuestionDetailsComponent'

class QuestionDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: {},
      answers: []
    }
  }

  onSubmitAnswer = (data) => {
    const { db } = this.props
    const { question } = this.state
    const answer = new db.Answer({
      question,
      ...data
    })
    answer.save()
  }

  onUpvoteAnswer = (answer) => {
    answer.partialUpdate().increment('upvotes').execute()
  }

  componentDidMount() {
    const { db } = this.props
    const { params } = this.props.match
    this.questionSubscription = db.Question
      .find()
      .equal('id', `/db/Question/${params.id}`)
      .eventStream()
      .subscribe((event) => {
        this.setState({
          question: event.data
        })
      })
    this.answerSubscription = db.Answer
      .find()
      .equal('question', `/db/Question/${params.id}`)
      .resultStream()
      .subscribe((answers) => {
        this.setState({
          answers
        })
      })
  }

  componentWillUnmount() {
    this.questionSubscription && this.questionSubscription.unsubscribe()
    this.answerSubscription && this.answerSubscription.unsubscribe()
  }

  render() {
    return (
      <QuestionDetailsComponent
        question={this.state.question}
        answers={this.state.answers}
        onUpvoteAnswer={this.onUpvoteAnswer}
        onSubmitAnswer={this.onSubmitAnswer} />
    )
  }

}

export default baqend(QuestionDetails);
