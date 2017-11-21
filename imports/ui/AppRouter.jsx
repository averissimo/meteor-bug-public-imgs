import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import App from './App.jsx'
import About from './About.jsx'

// App component - represents the whole app

export default class AppRouter extends Component {

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={App}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}


