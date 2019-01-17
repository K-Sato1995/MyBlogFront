import React from 'react';
import '../../Design/Post.css';
import { Link } from 'react-router-dom';

class PostBox extends React.Component {
  render() {
    return (
      <div className="post-box">
        <Link to= {`/Post/${this.props.id}`} >{this.props.title}</Link>
        <p>{this.props.image}</p>
        <p>{this.props.created_at}</p>
        <p>{this.props.category}</p>
      </div>
    )
  }
}

export default PostBox;
