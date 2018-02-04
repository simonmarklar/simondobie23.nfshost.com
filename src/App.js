import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './scenes/Home';
import AboutMe from './scenes/AboutMe';
import FunThings from './scenes/FunThings';
import ThingsLearned from './scenes/ThingsLearned'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-me" component={AboutMe} />
          <Route exact path="/fun-things" component={FunThings} />
          <Route exact path="/things-ive-learned" component={ThingsLearned} />
        </div>
      </Router>
    );
  }
}

export default App;
