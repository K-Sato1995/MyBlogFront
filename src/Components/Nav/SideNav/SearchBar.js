import React from "react";
import { FormattedMessage } from "react-intl";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-box">
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
