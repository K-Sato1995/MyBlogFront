import React from "react";
import PostsList from "../../containers/postList";
import NoMatch from "./PostList/NoMatch";
import PostDetail from "./PostDetail";
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
                showLC={this.props.showLC}
                handleToggleLeftContainer={this.props.handleToggleLeftContainer}
              />
            )}
          />
          <Route
            path="/:id"
            render={props => (
              <PostDetail
                {...props}
                showLC={this.props.showLC}
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
