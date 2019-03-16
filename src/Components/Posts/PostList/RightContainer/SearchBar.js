import React from "react";
import { FormattedMessage } from "react-intl";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-box">
        <h4 className="search-box-title">
          <span className="title">
            <FormattedMessage id="search.title" defaultMessage="Search Box" />
          </span>
        </h4>
        <input
          type="text"
          value={this.props.value}
          onChange={this.props.updateSearch}
          className="search-bar"
          placeholder="Search"
        />
      </div>
    );
  }
}

export default SearchBar;
