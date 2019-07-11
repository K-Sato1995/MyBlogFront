import React from "react";
import { FormattedMessage } from "react-intl";
import FeaturedPostList from "./List";

export default class FeaturedPosts extends React.Component {
  render() {
    const { featuredPosts, arrow, loading, posts } = this.props;
    return (
      <div className="list-group">
        <button
          id={featuredPosts ? "active" : ""}
          className="list-title"
          onClick={() => this.props.toggleFeaturedPosts()}
        >
          <FormattedMessage
            id="sideNav.featuredPosts"
            defaultMessage="Featured Posts"
          />
          {arrow(featuredPosts)}
        </button>
        <ul id={featuredPosts ? "show" : "hide"} className="list">
          <FeaturedPostList loading={loading} posts={posts} />
        </ul>
      </div>
    );
  }
}
