import React, { Component } from 'react'
import '../../styles/Question.css'

class QuestionComponent extends Component {

  handleUpvote = () => {
    this.props.onUpvote()
  }

  render() {
    const { question } = this.props
    return (
      <div className="question">

        <div className="upvotes">
        </div>

        <div className="content">
          <div className="info">
          </div>
        </div>

      </div>
    );
  }

}

export default QuestionComponent;
