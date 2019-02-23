import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className='search-box'>
        <h4 className='search-box-title'>Search Box</h4>
        <input
           type='text'
           value={this.props.value}
           onChange={this.props.updateSearch}
           className='search-bar'
           placeholder='Search'
         />
      </div>
    )
  }
}

export default SearchBar;
