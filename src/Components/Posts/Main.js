import React from 'react';
import PostsList from './PostsList';
import '../../Design/Post.scss';
import PostDetail from './PostDetail'
import { Route } from 'react-router-dom';

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <Route exact path='/' component={PostsList} />
        <Route path="/Post/:id" component={PostDetail} />
      </div>
    )
  }
}

export default Main;
