import React, { Component } from "react";
import Nav from "./Nav/Nav";
import Main from "./Posts/Main";
import Footer from "./Footer/Footer";
import "../Design/Responsive.scss";
import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import ja from "react-intl/locale-data/ja";
import messages from "./messages";
import { HashRouter as Router } from "react-router-dom";

addLocaleData(en);
addLocaleData(ja);

class App extends Component {
  constructor() {
    super();
    this.state = {
      lang: "en"
    };
  }
  render() {
    return (
      <div className="App">
        <Router>
          <IntlProvider
            locale={this.state.lang}
            messages={messages[this.state.lang]}
          >
            <React.Fragment>
              <Nav />
              <Main />
              <Footer />
            </React.Fragment>
          </IntlProvider>
        </Router>
      </div>
    );
  }
}

export default App;
