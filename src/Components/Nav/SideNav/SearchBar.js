import React from "react";
import "../../../Design/Nav/SearchBar.scss";
import { FormattedMessage } from "react-intl";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-box">
        <span className="glyphicon glyphicon-search" />
        <input
          type="text"
          value={this.props.value}
          onChange={this.props.updateSearch}
          className="search-bar"
          placeholder="Type to search"
        />
      </div>
    );
  }
}

export default SearchBar;
