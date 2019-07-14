import React from "react";
import "../../../../../Design/Posts/PostList/ContentTags.scss";

export default class TagTag extends React.Component {
  render() {
    const tag = this.props.tags.filter(tag => tag.id === this.props.tag);
    const name = tag[0] ? tag[0].name : "";
    return (
      <div className="tag-tag" onClick={this.props.resetTag}>
        <span>
          tag: <span className="content-tag-name">{name}</span>
        </span>
      </div>
    );
  }
}
