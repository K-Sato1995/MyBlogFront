import React from 'react';
import '../../Design/Post.css';

class PostDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {}
    }
  }
  componentWillMount () {
    this.getPosts()
  }
  getPosts = () => {
    const id = this.props.match.params.id
    fetch(`https://k-blog0130.herokuapp.com/en/api/v1/posts/${id}`)
    .then(response => response.json())
    .then(data => {
      this.setState({data:data.data})
    })
  }
  render() {
    return (
      <div>
        <h3>{this.state.data.title}</h3>
        <p>{this.state.data.context}</p>
      </div>
    )
  }
}

export default PostDetail;
