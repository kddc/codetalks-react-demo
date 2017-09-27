import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Question.css'

class QuestionComponent extends Component {

  handleUpvote = () => {
    this.props.onUpvote()
  }

  render() {
    const { question } = this.props
    return (
      <div className="question">

        <div className="upvotes" onClick={this.handleUpvote}>
          {question.upvotes}
        </div>

        <div className="content">
          {question.text}
          <div className="info">
            {question.author} | {question.answers} answers
          </div>
        </div>

      </div>
    );
  }

}

export default QuestionComponent;
