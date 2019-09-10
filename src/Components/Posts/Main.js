import React from "react";
import PostsList from "../../components/Posts/PostList";
import NoMatch from "./PostList/NoMatch";
import PostDetail from "./PostDetail";
import { Route, Switch } from "react-router-dom";

class Main extends React.Component {
  render() {
    const {
      loading,
      posts,
      post_tags,
      categories,
      category,
      tags,
      tag,
      search,
      updateSearch,
      updateCategory,
      updateTag,
      showAllPosts,
      resetCategory,
      resetTag,
      fetchCategories,
      fetchTags,
      fetchPosts
    } = this.props;
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
                loading={loading}
                posts={posts}
                post_tags={post_tags}
                categories={categories}
                category={category}
                tags={tags}
                tag={tag}
                search={search}
                updateSearch={updateSearch}
                updateCategory={updateCategory}
                updateTag={updateTag}
                showAllPosts={showAllPosts}
                resetCategory={resetCategory}
                resetTag={resetTag}
                fetchCategories={fetchCategories}
                fetchTags={fetchTags}
                fetchPosts={fetchPosts}
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
