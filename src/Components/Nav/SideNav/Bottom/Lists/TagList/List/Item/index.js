import React from "react";

class Tag extends React.Component {
  render() {
    const { value, updateTag, name, activeTag, setCurrentPage } = this.props;
    const handleClick = e => {
      updateTag(e);
      setCurrentPage(1);
    };
    const TagButton =
      activeTag === value ? (
        <button className="tag-active" value={value} onClick={handleClick}>
          #{name}
        </button>
      ) : (
        <button className="tag" value={value} onClick={handleClick}>
          #{name}
        </button>
      );

    return <React.Fragment>{TagButton}</React.Fragment>;
  }
}

export default Tag;
