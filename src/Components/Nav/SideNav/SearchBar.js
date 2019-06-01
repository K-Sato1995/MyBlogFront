import React from "react";
import "../../../Design/Nav/SearchBar.scss";
import { Search } from "react-feather";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-box">
        <Search className="icon" size={19} />
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
