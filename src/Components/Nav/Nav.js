import React from "react";
import "../../Design/Nav/Nav.scss";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import LangButton from "./langButton";

class Nav extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="nav-container">
          <Link to="/">
            <span className="logo">
              <FormattedMessage id="nav.title" defaultMessage="BLOG" />
            </span>
          </Link>
          <div className="nav-locale-box">
            <LangButton setLocale={this.props.setLocale} lang={this.props.lang} langValue="en" displayLang="EN" />
            <LangButton setLocale={this.props.setLocale} lang={this.props.lang} langValue="ja" displayLang="JA" />
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
