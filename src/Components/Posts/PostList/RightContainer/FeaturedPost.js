import React from 'react';
import '../../../../Design/Posts/PostList/RightContainer/RightContainer.scss';
import { Link } from 'react-router-dom';

class FeaturedPost extends React.Component {
  render() {
    const readingTime = '5min read'
    return (
      <div className='featured-post'>
        <h5><Link to= {`/Post/${this.props.id}`} className='post-title'>{this.props.title}</Link></h5>
        <p className='featured-post-description'>K-Sato / {readingTime}</p>
      </div>
    )
  }
}

export default FeaturedPost;
