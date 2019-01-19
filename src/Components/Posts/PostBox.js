import React from 'react';
import '../../Design/Post.scss';
import { Link } from 'react-router-dom';

class PostBox extends React.Component {
  render() {
    return (
      <div id="posts" className="transitions-enabled">
        <div className="box">
          <div className= "card card-default">
            <div className="card-head">
              <img src={this.props.image} alt="pic" className='image'/>
            </div>
            <div className="card-body">
              <div className="post-title">
                <Link to= {`/Post/${this.props.id}`} className='post-title-title'>{this.props.title}</Link>
              </div>
              <div className="post-info">
                {this.props.category}
                {/* <%= link_to post.category_name, posts_path(category: post.category.id), class:"category-#{post.category_name}"%> */}
                 <span className= 'post-created-on'>{this.props.created_at}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PostBox;
