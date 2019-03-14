import React from "react";
import "../../Design/Nav/Nav.scss";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

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
      </div>
    );
  }
}

export default Nav;
