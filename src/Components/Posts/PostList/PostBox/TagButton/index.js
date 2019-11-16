import React from "react";
import "../../../../../Design/Posts/PostList/PostList.scss";

class TagButton extends React.Component {
  render() {
    const { value, updateTag, name, setCurrentPage } = this.props;
    const handleClick = e => {
      updateTag(e);
      setCurrentPage(1);
    };
    return (
      <button value={value} onClick={handleClick} className="tag-button">
        #{name}
      </button>
    );
  }
}

export default TagButton;
