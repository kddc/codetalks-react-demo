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
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state)
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <textarea
          className="input"
          placeholder="Your text"
          name="text"
          value={this.state.text}
          onChange={this.handleChange} />
        <div className="row">
          <input
            className="input"
            placeholder="Name"
            name="author"
            value={this.state.author}
            onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }

}

export default FormComponent
