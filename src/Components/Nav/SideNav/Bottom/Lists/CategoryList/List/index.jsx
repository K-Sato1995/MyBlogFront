import React from "react";
import Loading from "../../../Loading";
import Item from "./Item";

const List = props => {
  const { loading, updateCategory, categories, setCurrentPage } = props;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      {categories.map((category, index) => (
        <li className="list-item">
          <Item
            activeCategory={category}
            value={category.id}
            name={category.name}
            updateCategory={updateCategory}
            setCurrentPage={setCurrentPage}
            key={index}
          />
        </li>
      ))}
    </>
  );
};

export default List;
