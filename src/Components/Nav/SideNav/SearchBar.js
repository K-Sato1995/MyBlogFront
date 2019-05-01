import React from "react";
import "../../../Design/Nav/SearchBar.scss";

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
