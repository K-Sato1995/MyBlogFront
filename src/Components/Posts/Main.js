import React from "react";
import PostsList from "./PostList/PostsList";
import NoMatch from "./PostList/NoMatch";
import PostDetail from "./PostDetail/PostDetail";
import { Route, Switch } from "react-router-dom";

class Main extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={PostsList} />
          <Route path="/Post/:id" component={PostDetail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default Main;
