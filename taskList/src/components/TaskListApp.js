import React from 'react';
import FormApp from './FormApp';
// import History from './History';
// import PersonalBoard from './PersonalBoard';
// import RelationshipBoard from './RelationshipBoardp';
import Board from './Board';

class TaskListApp extends React.Component{
  constructor(props){
    super(props);
    this.addTask = this.addTask.bind(this);
    this.state = {
      id: 0,
      tasks: [],
      category : ['Work', 'Personal', 'Relationship'],
      commType : ['text', 'email', 'calender']
    };
  }



addTask(task, description, category) {
  let id = ++this.state.id;
    this.setState({
      tasks: [
        {task, description, id, category, complete: false},
        ...this.state.tasks
      ],
      id
    })
}

taskComplete(id) {
console.log("ThiS WORKS WELL!!!!")
  let oldTasks = this.state.tasks
  let newTasks = oldTasks.map(task => {
    if( task.id === id ) {
      return{
          ...task,
          complete: !task.complete
      }
    }
  });
  this.setState({ newTasks })
}

  render() {
    return (
      <div>
        <div>
          <FormApp addTask={this.addTask} />
        </div>
        <div className="row">
          <div className="col m4">
            <h2>Personal</h2>
            <Board taskComplete={this.taskComplete} listItem={this.state.tasks.filter( task => task.category === "personal")}/>
          </div>
          <div className="col m4">
          <h2>Relationship</h2>
            <Board taskComplete={this.taskComplete} listItem={this.state.tasks.filter( task => task.category === "relationship")}/>
          </div>
          <div className="col m4">
            <h2>Work</h2>
            <Board taskComplete={this.taskComplete} listItem={this.state.tasks.filter( task => task.category === "work")}/>
          </div>
        </div>
      {/* <History /> */}
      </div>
    )
  }
}

export default TaskListApp;
