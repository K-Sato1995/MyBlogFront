import React from "react";
import { FormattedMessage } from "react-intl";
import List from "./List";

export default class TagList extends React.Component {
  render() {
    const { tagList, arrow, updateTag, tags, loading } = this.props;
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
          <List updateTag={updateTag} tags={tags} loading={loading} />
        </ul>
      </div>
    );
  }
}
