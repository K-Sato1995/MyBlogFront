import React from 'react';
import '../../Design/Post.css';

class PostDetail extends React.Component {
  render() {
    return (
      <div>
        <h3>test</h3>
        {console.log(this.props.match.params.id)}
      </div>
    )
  }
}

export default PostDetail;
