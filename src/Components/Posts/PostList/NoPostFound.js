import React from 'react';
import '../../../Design/Posts/PostList/NoPostFound.scss';
import Penguin from '../Penguin'
import { Link } from 'react-router-dom';

class NoPostFound extends React.Component {
  render() {
    return (
      <div className='no-post-found-box'>
        <Link to= {`/about`}>
          <Penguin />
        </Link>
        <h2>No Post Found</h2>
        <button value={0} name={'All'} onClick={this.props.showAllPosts} className='show-all-posts-btn'>
          Show All Posts
        </button>
      </div>
    )
  }
}

export default NoPostFound;
