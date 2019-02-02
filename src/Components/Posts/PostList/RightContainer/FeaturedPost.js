import React from 'react';
import '../../../../Design/RightContainer.scss';
import { Link } from 'react-router-dom';

class FeaturedPost extends React.Component {
  render() {
    const readingTime = this.props.content.length < 7000 ? '3min read' : '5min read'
    return (
      <div className='featured-post'>
        <h5><Link to= {`/Post/${this.props.id}`} className='post-title'>{this.props.title}</Link></h5>
        <p className='featured-post-description'>K-Sato / {readingTime}</p>
      </div>
    )
  }
}

export default FeaturedPost;
