import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class QuestionComponent extends Component {

  handleUpvote = () => {
    this.props.onUpvote()
  }

  render() {
    const { question } = this.props
    return (
      <Link to={"/item/" + question.key}>

        <div>
          <div onClick={this.handleUpvote}>
            {question.upvotes}
          </div>
        </div>

        <div>
          {question.text}
          <div>
            <span>{question.author}</span>
            <span> | </span>
            <span>{question.answers && question.answers.length} answers</span>
          </div>
        </div>

      </Link>
    );
  }

}

export default QuestionComponent;
