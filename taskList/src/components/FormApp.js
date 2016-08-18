import React from 'react';

class FormApp extends React.Component {
  constructor(props) {
    super(props);
    this.addTask = this.addTaskInfo.bind(this);
  }

  addTaskInfo(e) {
    e.preventDefault();
    let task = this.refs.task.value;
    let description = this.refs.description.value;
    this.refs.form.reset();
    this.props.addTask(task, description);
  }

  render(){
    return (
      <form ref="form" onSubmit={this.addTaskInfo}>
          <input ref="task" placeholder="Add your task" />
          <input ref="description" placeholder="add details for your task" />
      </form>
    )
  }
}
export default FormApp;