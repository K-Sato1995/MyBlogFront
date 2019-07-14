import React from "react";
import "../../../../../Design/Posts/PostList/ContentTags.scss";

export default class CategoryTag extends React.Component {
  render() {
    const { categories, category, resetCategory } = this.props;
    const categoryTag = categories.filter(c => c.id === category);
    const tagName = categoryTag[0] ? categoryTag[0].name : "";
    return (
      <div className="category-tag" onClick={resetCategory}>
        <span>
          Category: <span className="content-tag-name">{tagName}</span>
        </span>
      </div>
    );
  }
}
