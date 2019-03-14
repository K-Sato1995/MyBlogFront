import React, { Component } from "react";
import Nav from "./Nav/Nav";
import Main from "./Posts/Main";
import Footer from "./Footer/Footer";
import "../Design/Responsive.scss";
import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import ja from "react-intl/locale-data/ja";
import { HashRouter as Router } from "react-router-dom";
import localeEn from "./locales/localeEn";
import localeJa from "./locales/localeJa";

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
    let messages = this.state.lang === "en" ? localeEn : localeJa;
    return (
      <div className="App">
        <Router>
          <IntlProvider locale={this.state.lang} messages={messages}>
            <React.Fragment>
              <Nav setLocale={this.setLocale} />
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
