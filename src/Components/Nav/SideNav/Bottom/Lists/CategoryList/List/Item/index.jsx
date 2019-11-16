import React from "react";

const CategoryButton = props => {
  const {
    activeCategory,
    value,
    updateCategory,
    name,
    index,
    setCurrentPage
  } = props;

  const handleClick = e => {
    updateCategory(e);
    setCurrentPage(1);
  };
  return (
    <>
      <button
        key={index}
        value={value}
        onClick={handleClick}
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
