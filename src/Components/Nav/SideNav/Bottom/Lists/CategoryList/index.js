import React from "react";
import { FormattedMessage } from "react-intl";
import List from "./List";

export default class CategoryList extends React.Component {
  render() {
    const {
      categoryList,
      arrow,
      categories,
      updateCategory,
      loading,
      setCurrentPage
    } = this.props;
    return (
      <div className="list-group">
        <button
          id={categoryList ? "active" : ""}
          className="list-title"
          onClick={() => this.props.toggleCategoryList()}
        >
          <FormattedMessage
            id="sideNav.categoryList"
            defaultMessage="Category List"
          />
          {arrow(categoryList)}
        </button>
        <ul id={categoryList ? "show" : "hide"} className="list">
          <List
            categories={categories}
            updateCategory={updateCategory}
            loading={loading}
            setCurrentPage={setCurrentPage}
          />
        </ul>
      </div>
    );
  }
}
