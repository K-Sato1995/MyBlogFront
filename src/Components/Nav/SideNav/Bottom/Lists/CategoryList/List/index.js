import React from "react";
import Loading from "../../../Loading";
import Item from "./Item";

export default class List extends React.Component {
  render() {
    const { tags, loading, updateCategory, categories } = this.props;
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
    if (this.props.loading) {
      return <Loading />;
    } else {
      return categoryList;
    }
  }
}
