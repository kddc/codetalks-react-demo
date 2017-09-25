import React, { Component } from 'react'
import logo from '../codetalks.png';

class AppLayout extends Component {

  render() {
    return (
      <div>
        <div className="app-header">
          <div className="container app-nav">
            <img src={logo} className="app-logo" alt="logo" />
          </div>
        </div>
        <div className="container">
          <div className="app-content">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default AppLayout
