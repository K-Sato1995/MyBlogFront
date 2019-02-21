import React, { Component } from 'react';
import Nav from './Nav/Nav';
import Main from './Posts/Main';
import Footer from './Footer/Footer';
import '../Design/Responsive.scss';

import { HashRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <Nav />
            <Main />
            <Footer />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
