import React from 'react';
import '../../Design/Post.scss';
import { Link } from 'react-router-dom';

class PostBox extends React.Component {
  render() {
    return (
        <div className="box">
          <h3><Link to= {`/Post/${this.props.id}`} className='post-title-title'>{this.props.title}</Link></h3>
          {this.props.category}
           <span className= 'post-created-on'>{this.props.created_at}</span>
        </div>
    )
  }
}

export default PostBox;
