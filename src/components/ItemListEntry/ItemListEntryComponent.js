import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ItemListEntryComponent extends Component {

  handleUpvote = () => {
    this.props.onUpvote()
  }

  render() {
    return (
      <div style={{padding: 16}}>
        <div>
          <Link to={"/item/" + this.props.item.key}>{this.props.item.text}</Link>
          <button onClick={this.handleUpvote}>Upvote</button>
        </div>
        Upvotes: {this.props.item.score} <br />
        Comments: {this.props.item.children.length} <br />
      </div>
    );
  }

}

export default ItemListEntryComponent;
