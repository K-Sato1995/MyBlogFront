import React from "react";
import "../../Design/Nav/Nav.scss";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import Settings from "./Settings/Settings";

class Nav extends React.Component {
  render() {
    return (
      <div className="navbar">
        <button className="mobile-nav-btn">
          <span className="glyphicon glyphicon-menu-hamburger" />
        </button>
        <div className="nav-container">
          <Link to="/" className="logo-name">
            <span className="logo">
              <FormattedMessage id="nav.title" defaultMessage="BLOG" />
            </span>
          </Link>
          <Settings
            toggleLocale={this.props.toggleLocale}
            lang={this.props.lang}
            handleToggleTheme={this.props.handleToggleTheme}
            darkTheme={this.props.darkTheme}
          />
        </div>
      </div>
    );
  }
}

export default Nav;
