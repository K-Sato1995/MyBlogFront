import React, { Component } from 'react';
import '../Design/App.css';
import Nav from './Nav/Nav';
import Main from './Posts/Main';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <Nav />
            <Main />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
