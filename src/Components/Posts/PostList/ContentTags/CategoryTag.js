import React from "react";
import "../../../../Design/Posts/PostList/ContentTags.scss";

export default class CategoryTag extends React.Component {
  render() {
    const category = this.props.categories.filter(
      category => category.id === this.props.category
    );
    const name = category[0] ? category[0].name : "";
    return (
      <div className="category-tag" onClick={this.props.resetCategory}>
        <span>
          Category: <span className="content-tag-name">{name}</span>
        </span>
      </div>
    );
  }
}
