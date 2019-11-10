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
      loading
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
        <List
          categories={categories}
          updateCategory={updateCategory}
          categoryList={categoryList}
          loading={loading}
        />
      </div>
    );
  }
}
