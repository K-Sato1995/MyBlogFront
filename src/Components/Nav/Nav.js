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
        </div>
        <LangButton setLocale={this.props.setLocale} lang="en" />
        <LangButton setLocale={this.props.setLocale} lang="ja" />
      </div>
    );
  }
}

export default Nav;
