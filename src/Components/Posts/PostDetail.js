import React from 'react';
import '../../Design/Post.css';
import { ClipLoader } from 'react-spinners';
import ReactMarkdown from 'react-markdown';

class PostDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
      loading: true
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
      this.setState({
        data:data.data,
        loading: false
      })
    })
  }
  render() {
    return (
      <div>
        <ClipLoader
         sizeUnit={"px"}
         size={100}
         color={'#00C0B8'}
         loading={this.state.loading}
       />
       <h3>{this.state.data.title}</h3>
        <ReactMarkdown source={this.state.data.context} />
      </div>
    )
  }
}

export default PostDetail;
