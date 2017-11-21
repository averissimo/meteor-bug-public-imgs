import React, { Component } from 'react';

// App component - represents the whole app

export default class About extends Component {

  renderTasks() {
    return this.getTasks().map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>About page</h1>
        </header>
        <main>
          something about this page
        </main>
      </div>
    );
  }
}


