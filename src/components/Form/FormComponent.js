import React, { Component } from 'react'
import '../../styles/Form.css'

class FormComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      author: '',
      text: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target

  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state)
  }

  render() {
    return (
      <form className="form">
        <textarea
          className="input"
          placeholder="Your text"
          name="text"
          value={this.state.text} />
        <div className="row">
          <input
            className="input"
            placeholder="Name"
            name="author"
            value={this.state.author} />
          <button type="submit">Submit</button>
        </div>
      </form>
    )
  }

}

export default FormComponent
