import React from "react";

class CategoryButton extends React.Component {
  render() {
    const { activeCategory, value, updateCategory, name } = this.props;
    const ActiveButtonName = `category-button-active`;
    const categoryButton =
      activeCategory === value ? (
        <button
          value={value}
          onClick={updateCategory}
          className={ActiveButtonName}
        >
          {name}
        </button>
      ) : (
        <button
          value={value}
          onClick={updateCategory}
          className="category-button"
        >
          {name}
        </button>
      );
    return <React.Fragment>{categoryButton}</React.Fragment>;
  }
}

export default CategoryButton;
