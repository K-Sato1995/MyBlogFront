import React, { Component } from "react";
import Nav from "./Nav/Nav";
import Main from "./Posts/Main";
import Footer from "./Footer/Footer";
import ThemeButton from "./ThemeButton";
import "../Design/Responsive.scss";
import { IntlProvider, addLocaleData } from "react-intl";
import enLocaleData from "react-intl/locale-data/en";
import jaLocaleData from "react-intl/locale-data/ja";
import { BrowserRouter as Router } from "react-router-dom";
import localeEn from "./locales/localeEn";
import localeJa from "./locales/localeJa";

addLocaleData([...jaLocaleData, ...enLocaleData]);

class App extends Component {
  constructor() {
    super();
    this.state = {
      lang: "en",
      darkTheme: false
    };
    this.setLocale = this.setLocale.bind(this);
    this.handleToggleTheme = this.handleToggleTheme.bind(this);
  }
  setLocale(lang) {
    this.setState({ lang: lang });
  }
  handleToggleTheme() {
    this.setState({ darkTheme: !this.state.darkTheme });
  }

  render() {
    let theme = this.state.darkTheme ? "DarkTheme" : "LightTheme";
    let messages = this.state.lang === "en" ? localeEn : localeJa;
    return (
      <div className="App" id={theme}>
        <IntlProvider locale={this.state.lang} messages={messages}>
          <Router>
            <React.Fragment>
              <Nav setLocale={this.setLocale} lang={this.state.lang} />
              <Main />
              <ThemeButton
                handleToggleTheme={this.handleToggleTheme}
                darkTheme={this.state.darkTheme}
              />
              <Footer />
            </React.Fragment>
          </Router>
        </IntlProvider>
      </div>
    );
  }
}

export default App;
