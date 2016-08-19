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
    this.state = {id: 2,
      tasks: [ {task : "personal task", description : "per desc", id : 0, category : "personal"},
      {task :"relationship task", description : "resl  descript", id : 1, category : "relationship"}],
       category : ['Work', 'Personal', 'Relationship'],
       commType : ['text', 'email', 'calender']
    };
  }
  compnentDidMount() {
    debugger
  }


addTask(task, description) {
  let id = ++this.state.id;
    this.setState({
      tasks: [
        {task, description, id, category: "work"},
        ...this.state.tasks
      ],
      id
    })
}

  render() {
    return (
      <div>
        <div>
        <FormApp addTask={this.addTask} />
        </div>
        <div className="row">
          <div className="col m4">
          <WorkBoard tasks={this.state.tasks.filter( task => task.category === "personal")}/>
          </div>
          <div className="col m4">
          <WorkBoard tasks={this.state.tasks.filter( task => task.category === "relationship")}/>
          </div>
          <div className="col m4">
          <WorkBoard tasks={this.state.tasks.filter( task => task.category === "work")}/>
          </div>
        </div>
      {/* <History /> */}
      </div>
    )
  }
}

export default TaskListApp;
