import React from "react";
import { FormattedMessage } from "react-intl";
import LinkList from "./List";

export default class TagList extends React.Component {
  render() {
    const { arrow, links, toggleLinks } = this.props;
    return (
      <div className="list-group">
        <button
          id={links ? "active" : ""}
          className="list-title"
          onClick={() => toggleLinks()}
        >
          <FormattedMessage id="sideNav.Links" defaultMessage="Links" />
          {arrow(links)}
        </button>
        <ul id={links ? "show" : "hide"} className="list">
          <LinkList />
        </ul>
      </div>
    );
  }
}
