import React, { Component } from 'react'
import '../../styles/Form.css'

class FormComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      author: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="form">
        <textarea
          className="input"
          placeholder='Your Text'
          name='text'
          onChange={this.handleChange}
          value={this.state.text} />
        <div className="row">
          <input
            className="input"
            placeholder='Name'
            name='author'
            onChange={this.handleChange}
            value={this.state.author} />
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }

}

export default FormComponent;
