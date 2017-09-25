import React, { Component } from 'react'

import Question from '../Question/Question'

class QuestionListComponent extends Component {

  render() {
    return (
      <div>
        {this.props.questions.map((question) => (
          <Question key={question.key} question={question} />
        ))}
      </div>
    );
  }

}

export default QuestionListComponent;
