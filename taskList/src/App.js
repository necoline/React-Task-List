import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskListApp from './components/TaskListApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{height: "150px", padding: "20px", color: "white", backgroundColor: "#00838f"}}>
          <h2>The Relationship App</h2>
        </div>
        <TaskListApp />
      </div>
    );
  }
}

export default App;
