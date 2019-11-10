import React from "react";

const CategoryButton = props => {
  const { activeCategory, value, updateCategory, name, index } = props;
  return (
    <>
      <button
        key={index}
        value={value}
        onClick={updateCategory}
        className={
          activeCategory === value
            ? "category-button-active"
            : "category-button"
        }
      >
        {name}
      </button>
    </>
  );
};

export default CategoryButton;
