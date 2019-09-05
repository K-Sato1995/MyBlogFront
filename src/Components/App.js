import React, { Component } from "react";
import Nav from "./Nav/Nav";
import Main from "./Posts/Main";
import { IntlProvider, addLocaleData } from "react-intl";
import enLocaleData from "react-intl/locale-data/en";
import jaLocaleData from "react-intl/locale-data/ja";
import { BrowserRouter as Router } from "react-router-dom";
import localeEn from "./locales/localeEn";
import localeJa from "./locales/localeJa";
import ReactGA from "react-ga";
import PostList from "./posts";
import store from "../stores";
import { Provider } from "react-redux";

function initializeReactGA() {
  ReactGA.initialize("UA-140916506-1");
  ReactGA.pageview(window.location.pathname + window.location.search);
}
initializeReactGA();

addLocaleData([...jaLocaleData, ...enLocaleData]);

class App extends Component {
  constructor() {
    super();
    this.state = {
      lang: "en",
      darkTheme: false,
      // For mobile style
      showLC: false
    };
    this.toggleLocale = this.toggleLocale.bind(this);
    this.handleToggleTheme = this.handleToggleTheme.bind(this);
    this.handleToggleLeftContainer = this.handleToggleLeftContainer.bind(this);
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
  handleToggleLeftContainer() {
    this.setState({ showLC: !this.state.showLC });
  }
  render() {
    let theme = this.state.darkTheme ? "DarkTheme" : "LightTheme";
    let messages = this.state.lang === "en" ? localeEn : localeJa;
    return (
      <Provider store={store}>
        <div className="App" id={theme}>
          <IntlProvider locale={this.state.lang} messages={messages}>
            <Router basename={process.env.PUBLIC_URL}>
              <React.Fragment>
                <Nav
                  toggleLocale={this.toggleLocale}
                  lang={this.state.lang}
                  handleToggleTheme={this.handleToggleTheme}
                  darkTheme={this.state.darkTheme}
                  showLC={this.state.showLC}
                  handleToggleLeftContainer={this.handleToggleLeftContainer}
                />
                <Main
                  showLC={this.state.showLC}
                  handleToggleLeftContainer={this.handleToggleLeftContainer}
                  lang={this.state.lang}
                />
                <PostList />
              </React.Fragment>
            </Router>
          </IntlProvider>
        </div>
      </Provider>
    );
  }
}

export default App;
