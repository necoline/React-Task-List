import React from 'react';
import Item from './Item';

class Board extends React.Component {
  debugger
  render () {

    let items = this.props.listItem.map( (item) => {

      return (
        <Item key={item.id} {...item} complete={item.complete} taskComplete={this.props.taskComplete}/>
    );
  });

  return (
    <ul style={{ listStyle: 'none'}}>
      {items}
    </ul>
    )
  }
}

export default Board;
