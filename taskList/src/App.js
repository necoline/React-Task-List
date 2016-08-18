import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskListApp from './components/TaskListApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>The Relationship App</h2>
        </div>
        <TaskListApp />
      </div>
    );
  }
}

export default App;
