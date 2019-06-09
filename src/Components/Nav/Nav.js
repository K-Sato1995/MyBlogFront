import React from "react";
import "../../Design/Nav/Nav.scss";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import Settings from "./Settings/Settings";
import { ArrowLeft } from "react-feather";

class Nav extends React.Component {
  render() {
    const hmbMenu = this.props.showLeftContainer
      ? {
          display: "none"
        }
      : {
          display: "block"
        };
    const closeTab = this.props.showLeftContainer
      ? {
          display: "block"
        }
      : {
          display: "none"
        };
    return (
      <div className="navbar">
        <button
          className="mobile-nav-btn"
          onClick={this.props.handleToggleLeftContainer}
          style={hmbMenu}
        >
          <span className="glyphicon glyphicon-menu-hamburger" />
        </button>

        <div className="close-tab" style={closeTab}>
          <button onClick={this.props.handleToggleLeftContainer}>
            <ArrowLeft size={32} />
          </button>
        </div>
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
