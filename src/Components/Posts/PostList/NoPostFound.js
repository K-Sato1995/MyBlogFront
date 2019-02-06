import React from 'react';
import '../../../Design/Posts/PostList/NoPostFound.scss';
import Penguin from '../Penguin'
class NoPostFound extends React.Component {
  render() {
    return (
      <div className='no-post-found-box'>
        <Penguin />
        <h1>No Post Found</h1>
        <h3>Empty the search box and/or click 'All' to show posts:)</h3>
      </div>
    )
  }
}

export default NoPostFound;
