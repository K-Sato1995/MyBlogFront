import React from 'react';
import PostsList from './PostList/PostsList';
import PostDetail from './PostDetail/PostDetail'
import { Route } from 'react-router-dom';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Route exact path='/MyBlogFront' component={PostsList} />
        <Route path="/MyBlogFront/Post/:id" component={PostDetail} />
      </div>
    )
  }
}

export default Main;
