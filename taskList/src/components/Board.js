import React from 'react';
import Item from './Item';

class Board extends React.Component {

  render () {

    let items = this.props.listItem.map( (item) => {

      return (
        <Item key={item.id} task={item.task} description={item.description}  taskComplete={this.props.taskComplete}/>
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
