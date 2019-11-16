import React from "react";
import "../../../../../Design/Nav/SearchBar.scss";
import { Search } from "react-feather";

class SearchBar extends React.Component {
  render() {
    const { value, updateSearch } = this.props;
    return (
      <div className="search-box">
        <input
          type="text"
          value={value}
          onChange={updateSearch}
          className="search-bar"
          placeholder="Type to search"
        />
        <Search className="icon" size={19} />
      </div>
    );
  }
}

export default SearchBar;
