import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './scenes/Home';
import AboutMe from './scenes/AboutMe';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-me" component={AboutMe} />
        </div>
      </Router>
    );
  }
}

export default App;
