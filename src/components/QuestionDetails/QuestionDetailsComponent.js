import React, { Component } from 'react'
import '../../styles/QuestionDetails.css'
import Form from '../Form/Form'
import Question from '../Question/Question'

class QuestionDetailsComponent extends Component {

  onSubmitAnswer = (data) => {
    this.props.onSubmitAnswer(data)
  }

  handleUpvoteAnswer = (answer) => {
    this.props.onUpvoteAnswer(answer)
  }

  render() {
    const { question, answers } = this.props
    return (
      <div>
        <Question question={question} />
        <div className="answers">
          <Form onSubmit={this.props.onSubmitAnswer} />
          <div>
            {answers.map((answer) => (
              <div className="answer" key={answer.key}>
                <div className="upvotes" onClick={() => this.handleUpvoteAnswer(answer)}>
                  {answer.upvotes}
                </div>
                <div className="content">
                  <div className="info">{answer.author}</div>
                  {answer.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

}

export default QuestionDetailsComponent;
