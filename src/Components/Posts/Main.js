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
          <Route
            exact
            path="/"
            render={() => (
              <PostsList
                lang={this.props.lang}
                showLeftContainer={this.props.showLeftContainer}
                handleToggleLeftContainer={this.props.handleToggleLeftContainer}
              />
            )}
          />
          <Route
            path="/Post/:id"
            render={props => (
              <PostDetail
                {...props}
                showLeftContainer={this.props.showLeftContainer}
                handleToggleLeftContainer={this.props.handleToggleLeftContainer}
              />
            )}
          />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default Main;
