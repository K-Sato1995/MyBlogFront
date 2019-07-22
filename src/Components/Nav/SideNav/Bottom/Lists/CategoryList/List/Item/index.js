import React from "react";

class CategoryButton extends React.Component {
  render() {
    const { activeCategory, value, updateCategory, name, index } = this.props;
    const ActiveButtonName = `category-button-active`;
    const categoryButton =
      activeCategory === value ? (
        <button
          key={index}
          value={value}
          onClick={updateCategory}
          className={ActiveButtonName}
        >
          {name}
        </button>
      ) : (
        <button
          key={index}
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
