import React from "react";
import Loading from "../../../Loading";
import Item from "./Item";

export default class List extends React.Component {
  render() {
    const { loading, updateCategory, categories } = this.props;
    const categoryList = categories.map((category, index) => (
      <li className="list-item">
        <Item
          activeCategory={category}
          value={category.id}
          name={category.name}
          updateCategory={updateCategory}
          key={index}
        />
      </li>
    ));
    if (loading) {
      return <Loading />;
    } else {
      return categoryList;
    }
  }
}
