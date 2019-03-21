import React from "react";
import "../../../../Design/Posts/PostList/RightContainer/RightContainer.scss";
import SearchBar from "./SearchBar";
import FeaturedPost from "./FeaturedPost";
import Tag from "./Tag";
import Author from "../Author";
import { FormattedMessage } from "react-intl";

export default class RightContainer extends React.Component {
  render() {
    const featuredPosts = this.props.posts
      .slice(0, 4)
      .map((post, index) => (
        <FeaturedPost key={index} title={post.title} id={post.id} />
      ));
    const tags = this.props.tags.map((tag, index) => (
      <Tag
        activeTag={this.props.tag}
        key={index}
        value={tag.id}
        name={tag.name}
        updateTag={this.props.updateTag}
      />
    ));

    return (
      <React.Fragment>
        <Author />
        <div className="right-container">
          <SearchBar
            value={this.props.search}
            updateSearch={this.props.updateSearch}
          />
          <div className="tag-list-box">
            <h4 className="tag-list-title">
              <span className="title">
                <FormattedMessage
                  id="tagList.title"
                  defaultMessage="Tag List"
                />
              </span>
            </h4>
            <div className="tag-list">{tags}</div>
          </div>
          <div className="featured-post-box">
            <h4 className="featured-posts-title">
              <span className="title">
                <FormattedMessage
                  id="featuredPosts.title"
                  defaultMessage="Featured Posts"
                />
              </span>
            </h4>
            {featuredPosts}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
