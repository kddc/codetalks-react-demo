import React, { Component } from 'react';
import Item from '../components/Item/Item'

class ItemScreen extends Component {
  render() {
    const { params } = this.props.match
    return (
      <Item id={params.id}/>
    )
  }
}

export default ItemScreen;
