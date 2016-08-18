Import React from 'react';


class WorkBoard extends React.Component {

  render () {
    let tasks = this.props.tasks.map(( task) => {
      return (<Task key={task.id}
        {...task} />
    );
  });
};

return (
  <ul style={{ listStyle: 'none'}}>
    {tasks}
  </ul>
  )
}

export default WorkBoard;
