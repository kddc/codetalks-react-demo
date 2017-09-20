import React, { Component } from 'react'

import Form from '../Form/Form'
import Question from '../Question/Question'

class QuestionDetailsComponent extends Component {

  handleUpvoteAnswer = (answer) => {
    this.props.onUpvoteAnswer(answer)
  }

  render() {
    const { question, answers } = this.props
    return (
      <div>
        <Question question={question} />
        <div>

          <Form onSubmit={this.props.onSubmitAnswer} />

          <div>
            {question.answers && question.answers.length} Answers

            {answers.map((answer) => (
              <div key={answer.key}>

                <div onClick={() => this.handleUpvoteAnswer(answer)}>
                  <div>
                    {answer.upvotes}
                  </div>
                </div>

                <div>
                  {answer.author} Some moments ago
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
