import React from "react";
import { FormattedMessage } from "react-intl";

export default class TagList extends React.Component {
  render() {
    const { tagList, arrow, tagItems } = this.props;
    return (
      <div className="list-group">
        <button
          id={tagList ? "active" : ""}
          className="list-title"
          onClick={() => this.props.toggleTagList()}
        >
          <FormattedMessage id="sideNav.tagList" defaultMessage="Tag List" />
          {arrow(tagList)}
        </button>
        <ul id={tagList ? "show" : "hide"} className="list">
          {tagItems}
        </ul>
      </div>
    );
  }
}
