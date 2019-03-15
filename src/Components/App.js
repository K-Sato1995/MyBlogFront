import React, { Component } from "react";
import Nav from "./Nav/Nav";
import Main from "./Posts/Main";
import Footer from "./Footer/Footer";
import "../Design/Responsive.scss";
import { IntlProvider, addLocaleData } from "react-intl";
import enLocaleData from "react-intl/locale-data/en";
import jaLocaleData from "react-intl/locale-data/ja";
import { HashRouter as Router } from "react-router-dom";
import localeEn from "./locales/localeEn";
import localeJa from "./locales/localeJa";

addLocaleData([...jaLocaleData, ...enLocaleData]);

class App extends Component {
  constructor() {
    super();
    this.state = {
      lang: "en"
    };
    this.setLocale = this.setLocale.bind(this);
  }
  setLocale(lang) {
    this.setState({ lang: lang });
  }
  render() {
    let messages = this.state.lang === "en" ? localeEn : localeJa;
    return (
      <div className="App">
        <IntlProvider locale={this.state.lang} messages={messages}>
          <Router>
            <React.Fragment>
              <Nav setLocale={this.setLocale} />
              <Main />
              <Footer />
            </React.Fragment>
          </Router>
        </IntlProvider>
      </div>
    );
  }
}

export default App;
