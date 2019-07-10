import React from "react";
import { FormattedMessage } from "react-intl";

export default class TagList extends React.Component {
  render() {
    const { linksArrow, links, linkList, toggleLinks } = this.props;
    return (
      <div className="list-group">
        <button
          id={links ? "active" : ""}
          className="list-title"
          onClick={() => toggleLinks()}
        >
          <FormattedMessage id="sideNav.Links" defaultMessage="Links" />
          {linksArrow}
        </button>
        <ul id={links ? "show" : "hide"} className="list">
          {linkList}
        </ul>
      </div>
    );
  }
}
