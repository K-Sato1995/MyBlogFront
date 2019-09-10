import React, { Component } from "react";
import Nav from "./Nav/Nav";
import SideNav from "./Nav/SideNav";
import Main from "./Posts/Main";
import { IntlProvider, addLocaleData } from "react-intl";
import enLocaleData from "react-intl/locale-data/en";
import jaLocaleData from "react-intl/locale-data/ja";
import { BrowserRouter as Router } from "react-router-dom";
import localeEn from "./locales/localeEn";
import localeJa from "./locales/localeJa";
import ReactGA from "react-ga";

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
      showLC: false,
      detailPage: false
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
    const {
      loading,
      posts,
      post_tags,
      categories,
      category,
      tags,
      tag,
      search,
      updateSearch,
      updateCategory,
      updateTag,
      showAllPosts,
      resetCategory,
      resetTag,
      fetchCategories,
      fetchTags,
      fetchPosts
    } = this.props;
    const showLC = this.state.showLC
      ? {
          display: "block"
        }
      : {
          display: "none"
        };
    const detailPage = this.state.detailPage
      ? {
          visibility: "hidden"
        }
      : {
          visibility: "visible"
        };
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
                showLC={this.state.showLC}
                handleToggleLeftContainer={this.handleToggleLeftContainer}
              />
              <div className="whole-container">
                <div className="wrapper" style={showLC} />
                <div
                  className="left-container"
                  style={Object.assign({}, showLC, detailPage)}
                >
                  <SideNav
                    setLocale={this.props.setLocale}
                    lang={this.props.lang}
                    posts={posts}
                    tags={tags}
                    tag={tag}
                    loading={loading}
                    search={search}
                    updateSearch={updateSearch}
                    updateTag={updateTag}
                    categories={categories}
                    category={category}
                    updateCategory={updateCategory}
                  />
                </div>
                <div className="main-container">
                  <Main
                    showLC={this.state.showLC}
                    handleToggleLeftContainer={this.handleToggleLeftContainer}
                    lang={this.state.lang}
                    loading={loading}
                    posts={posts}
                    post_tags={post_tags}
                    categories={categories}
                    category={category}
                    tags={tags}
                    tag={tag}
                    search={search}
                    updateCategory={updateCategory}
                    updateTag={updateTag}
                    showAllPosts={showAllPosts}
                    resetCategory={resetCategory}
                    resetTag={resetTag}
                    fetchCategories={fetchCategories}
                    fetchTags={fetchTags}
                    fetchPosts={fetchPosts}
                    detailPage={this.state.detailPage}
                  />
                </div>
              </div>
            </React.Fragment>
          </Router>
        </IntlProvider>
      </div>
    );
  }
}

export default App;
