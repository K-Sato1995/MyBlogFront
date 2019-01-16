import React from 'react';
import PostsList from './PostsList';
import '../../Design/Post.css';
import PostDetail from './PostDetail'
import { Route } from 'react-router-dom';

class Main extends React.Component {
  constructor () {
    super();
    this.state = {
      data: []
    }
  }
  componentWillMount () {
    this.getPosts()
  }
  getPosts = () => {
    fetch('https://k-blog0130.herokuapp.com/en/api/v1/posts')
    .then(response => response.json())
    .then(data => {
      this.setState({data:data.data})
    })
  }
  render() {
    return (
      <div className="container">
        <Route exact path='/' render={ ()=> <PostsList posts={this.state.data} />} />
        <Route path="/Post/:id" component={PostDetail} />
      </div>
    )
  }
}

export default Main;
