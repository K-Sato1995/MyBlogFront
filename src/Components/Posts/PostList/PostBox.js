import React from 'react';
import '../../../Design/PostList.scss';
import { Link } from 'react-router-dom';

class PostBox extends React.Component {
  formatDate(date){
    const dateObject = new Date(date)
    const month = dateObject.getMonth() + 1
    const day = dateObject.getDate()
    const year = dateObject.getFullYear();
    return `${year}/${month}/${day}`
  }
  render() {
    return (
        <div className="post-box">
          <h3><Link to= {`/MyBlogFront/Post/${this.props.id}`} className='post-title'>{this.props.title}</Link></h3>
           <span>{ this.formatDate(this.props.created_at) }</span>
           <span>Category: {this.props.category}</span>
        </div>
    )
  }
}

export default PostBox;
