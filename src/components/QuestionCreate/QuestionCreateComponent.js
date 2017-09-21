import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Form from '../Form/Form'

class QuestionCreateComponent extends Component {

  onSubmit = (data) => {
    const { history } = this.props
    this.props.onSubmit(data).then(() => history.push('/'))
  }

  render() {
    return (
      <div style={{padding: '16px 16px 0 16px', backgroundColor: 'white'}}>
        <Form onSubmit={this.onSubmit} />
      </div>
    )
  }

}

export default withRouter(QuestionCreateComponent)
