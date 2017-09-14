import React, { Component } from 'react';


class ItemListComponent extends Component {

  render() {
    return (
      <div>
        Items
        {this.props.items.map(item => (
          <div key={item.key}>
            {item.text}
          </div>
        ))}
      </div>
    );
  }

}

export default baqend(ItemListComponent);
