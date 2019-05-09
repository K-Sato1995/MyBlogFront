import React, { Component } from "react";
import Nav from "./Nav/Nav";
import Main from "./Posts/Main";
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
    this.toggleLocale = this.toggleLocale.bind(this);
    this.handleToggleTheme = this.handleToggleTheme.bind(this);
  }
  toggleLocale() {
    if (this.state.lang === "en") {
      this.setState({ lang: "ja" });
    } else if (this.state.lang === "ja") {
      this.setState({ lang: "en" });
    }
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
          <Router basename={process.env.PUBLIC_URL}>
            <React.Fragment>
              <Nav
                toggleLocale={this.toggleLocale}
                lang={this.state.lang}
                handleToggleTheme={this.handleToggleTheme}
                darkTheme={this.state.darkTheme}
              />
              <Main />
            </React.Fragment>
          </Router>
        </IntlProvider>
      </div>
    );
  }
}

export default App;
