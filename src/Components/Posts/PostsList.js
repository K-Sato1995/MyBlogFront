import React from 'react';
import PostBox from './PostBox';
import '../../Design/Post.scss';
import { ClipLoader } from 'react-spinners';
import { Col } from 'react-bootstrap';

class PostsList extends React.Component {
  constructor () {
    super();
    this.state = {
      data: [],
      loading: true
    }
  }
  componentWillMount () {
    this.getPosts()
  }
  getPosts = () => {
    fetch('https://k-blog0130.herokuapp.com/en/api/v1/posts')
    .then(response => response.json())
    .then(data => {
      this.setState({
        data:data.data,
        loading: false
      })
    })
  }
  render() {
    const posts = this.state.data.map((post, index) =>
    <PostBox key={index} id={post.id} title={post.title} image={post.image} category={post.category_id} created_at={post.created_at}/>
    )
    return (
      <Col md={12} className='post-container'>
        <ClipLoader
         sizeUnit={"px"}
         size={100}
         color={'#00C0B8'}
         loading={this.state.loading}
       />
        { posts }
      </Col>
    )
  }
}

export default PostsList;
