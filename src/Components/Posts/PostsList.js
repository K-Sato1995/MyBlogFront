import React from 'react';
import PostBox from './PostBox';
import '../../Design/Post.css';

class PostsList extends React.Component {
  render() {
    const posts = this.props.posts.map((post, index) =>
    <PostBox key={index} id={post.id} title={post.title} image={post.image} category={post.category_id} created_at={post.created_at}/>
    )
    return (
      <div className="post-container">
        { posts }
        { console.log(this.props.posts) }
      </div>
    )
  }
}

export default PostsList;
