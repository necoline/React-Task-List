import React from 'react';

class FormApp extends React.Component {
  constructor(props) {
    super(props);
    this.addTaskInfo = this.addTaskInfo.bind(this);
  }

  addTaskInfo(e) {
    e.preventDefault();
    let task = this.refs.task.value;
    let description = this.refs.description.value;
    let category = this.refs.category.value.toLowerCase();
    this.refs.form.reset();
    this.props.addTask(task, description, category);
  }

  render(){
    return (
      <div className="container">
        <form ref="form" onSubmit={this.addTaskInfo}>
            <input ref="category" placeholder="Work, Peronal, Relationship" />
            <input ref="task" placeholder="Add your task" />
            <input ref="description" placeholder="add details for your task" />
            <button className="btn" onSubmit={this.addTaskInfo}>Submit</button>
        </form>
      </div>
    )
  }
}
export default FormApp;
