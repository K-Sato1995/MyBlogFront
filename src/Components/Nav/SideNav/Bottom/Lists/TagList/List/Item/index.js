import React from "react";

class Tag extends React.Component {
  render() {
    const { value, updateTag, name, activeTag } = this.props;
    const TagButton =
      activeTag === value ? (
        <button className="tag-active" value={value} onClick={updateTag}>
          #{name}
        </button>
      ) : (
        <button className="tag" value={value} onClick={updateTag}>
          #{name}
        </button>
      );

    return <React.Fragment>{TagButton}</React.Fragment>;
  }
}

export default Tag;
