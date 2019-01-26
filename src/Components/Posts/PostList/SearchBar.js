import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <input
           type='text'
           onChange={this.props.updateSearch}
           className='sarch-bar'
           placeholder='Search'
         />
      </div>
    )
  }
}

export default SearchBar;
