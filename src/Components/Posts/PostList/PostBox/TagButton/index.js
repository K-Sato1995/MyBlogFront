import React from "react";
import "../../../../../Design/Posts/PostList/PostList.scss";

class TagButton extends React.Component {
  render() {
    const { value, updateTag, name } = this.props;
    return (
      <button value={value} onClick={updateTag} className="tag-button">
        #{name}
      </button>
    );
  }
}

export default TagButton;
