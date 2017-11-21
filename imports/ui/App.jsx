import React, { Component } from 'react';

// App component - represents the whole app

export default class App extends Component {

  renderTasks() {
    return this.getTasks().map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
        <ul>
          <li>Some list item that is static</li>
        </ul>
        <img style={{width: '100%'}} src='m1.png'/>
      </div>
    );
  }
}


