import React from 'react';
import FormApp from './FormApp';
// import History from './History';
// import PersonalBoard from './PersonalBoard';
// import RelationshipBoard from './RelationshipBoardp';
// import WorkBoard from './WorkBoard';

class TaskListApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {id: 0, tasks: [], description: [], category: ['Work', 'Personal', 'Relationship'], commType: ['text', 'email', 'calender'] };
  }


addTask(task, description) {
  let id = ++this.state.id;
    this.setState({
      tasks: [
        {task, description, id},
        ...this.state.tasks
      ],
      id
    })
}

  render() {
    return (
      <div>
      <FormApp addTask={this.addTask} />
      {/* <PersonalBoard />
      <WorkBoard />
      <RelationshipBoard />
      <History /> */}
      </div>
    )
  }
}

export default TaskListApp;
