import React from 'react';
import FormApp from './FormApp';
// import History from './History';
// import PersonalBoard from './PersonalBoard';
// import RelationshipBoard from './RelationshipBoardp';
import WorkBoard from './WorkBoard';

class TaskListApp extends React.Component{
  constructor(props){
    super(props);
    this.addTask = this.addTask.bind(this);
    this.state = {id: 0, tasks: [], category: ['Work', 'Personal', 'Relationship'], commType: ['text', 'email', 'calender']
    };
  }
  compnentDidMount() {
    debugger
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
      <WorkBoard tasks={this.state.tasks}/>
      {/* <PersonalBoard />
      <RelationshipBoard />
      <History /> */}
      </div>
    )
  }
}

export default TaskListApp;
