import React from "react";
import { FormattedMessage } from "react-intl";

export default class CategoryList extends React.Component {
  render() {
    const { categoryList, categoryArrow, categoryItems } = this.props;
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
          {categoryArrow}
        </button>
        <ul id={categoryList ? "show" : "hide"} className="list">
          {categoryItems}
        </ul>
      </div>
    );
  }
}
