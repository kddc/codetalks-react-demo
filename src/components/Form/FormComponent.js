import React, { Component } from 'react'

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
      <div>
        <textarea
          placeholder='Your Text'
          name='text'
          onChange={this.handleChange}
          value={this.state.text} />
        <div>
          <input
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
