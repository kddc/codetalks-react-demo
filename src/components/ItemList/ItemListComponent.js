import React, { Component } from 'react';

import ItemListEntry from '../ItemListEntry/ItemListEntry'

class ItemListComponent extends Component {

  render() {
    return (
      <div>
        Items
        {this.props.items.map(item => (
          <ItemListEntry key={item.key} item={item} />
        ))}
      </div>
    );
  }

}

export default ItemListComponent;
