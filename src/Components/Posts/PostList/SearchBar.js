import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <input
           type='text'
           onChange={this.props.updateSearch}
           className='sarch-bar'
         />
      </div>
    )
  }
}

export default SearchBar;
