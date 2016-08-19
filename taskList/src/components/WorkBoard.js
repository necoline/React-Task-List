import React from 'react';

class WorkBoard extends React.Component {

  render () {
    let tasks = this.props.tasks.map( (task) => {
      // return (<Task key={task.id}
      //   {...task} />
      return (
        <li key={task.id}> {task.task} {task.description} </li>
    );
  });

  return (
    <ul style={{ listStyle: 'none'}}>
      {tasks}
    </ul>
    )
  }
}

export default WorkBoard;
