import React from "react";
import PostBox from "./PostBox/PostBox";
import "../../../Design/Posts/PostList/PostList.scss";
import "../../../Design/Posts/PostList/RightContainer/RightContainer.scss";
import { css } from "@emotion/core";
import { BarLoader } from "react-spinners";
import { Col } from "react-bootstrap";
import CategoryButton from "./CategoryTag/CategoryButton";
import NoPostFound from "./NoPostFound";
import LoadingBox from "../LoadingBox";
import RightContainer from "./RightContainer/RightContainer";

const api = {
  baseUrl: "https://k-blog0130.herokuapp.com/"
};

class PostsList extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      categories: [],
      post_tags: [],
      tags: [],
      search: "",
      category: 0,
      tag: 0,
      loading: true
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
    this.updateTag = this.updateTag.bind(this);
    this.showAllPosts = this.showAllPosts.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.getPosts();
  }
  getPosts = () => {
    fetch(`${api.baseUrl}/api/v1/posts`)
      .then(response => response.json())
      .then(data => {
        data.data.posts.map(
          (post, index) => (post.tags = data.data.post_tags[index])
        );
        this.setState({
          posts: data.data.posts,
          categories: data.data.categories,
          tags: data.data.tags,
          post_tags: data.data.post_tags,
          loading: false
        });
      });
  };
  updateSearch(e) {
    this.setState({ search: e.target.value });
  }
  updateCategory(e) {
    this.setState({
      tag: 0,
      category: parseInt(e.target.value)
    });
  }
  updateTag(e) {
    this.setState({ tag: parseInt(e.target.value) });
    window.scrollTo(0, 0);
  }

  showAllPosts() {
    this.setState({
      category: 0,
      tag: 0,
      search: ""
    });
  }

  render() {
    const override = css`
      margin: 0 auto;
      display: block;
    `;
    // Array.prototype.filter() is Array#select in Ruby.
    const filterd_posts = this.state.posts.filter(post => {
      let postTags = [];
      post.tags.map(tag => postTags.push(tag.id));

      // Conditions
      const all_not_zero = this.state.category !== 0 && this.state.tag !== 0;
      const tag_not_zero = this.state.tag !== 0;
      const catgory_not_zero = this.state.category !== 0;

      // Check post
      const taggedPost = postTags.includes(this.state.tag);
      const categoryPost = post.category_id === this.state.category;
      const searchedPost = post.title
        .toLowerCase()
        .includes(this.state.search.toLowerCase());

      if (all_not_zero) {
        return categoryPost && taggedPost && searchedPost;
      } else if (tag_not_zero) {
        return taggedPost && searchedPost;
      } else if (catgory_not_zero) {
        return categoryPost && searchedPost;
      } else {
        return searchedPost;
      }
    });

    const postList =
      filterd_posts.length !== 0 ? (
        filterd_posts.map((post, index) => (
          <PostBox
            key={index}
            id={post.id}
            title={post.title}
            introduction={post.introduction}
            category={post.category_id}
            tags={post.tags}
            updateTag={this.updateTag}
            updateCategory={this.updateCategory}
            created_at={post.created_at}
          />
        ))
      ) : this.state.loading === false ? (
        <NoPostFound showAllPosts={this.showAllPosts} />
      ) : (
        ""
      );

    const categories = this.state.categories.map((category, index) => (
      <CategoryButton
        activeCategory={this.state.category}
        value={category.id}
        name={category.name}
        updateCategory={this.updateCategory}
        key={index}
      />
    ));

    const Content =
      this.state.loading === true ? (
        <LoadingBox />
      ) : (
        <React.Fragment>
          <div className="post-list-container">
            <CategoryButton
              activeCategory={this.state.category}
              value={0}
              name={"All"}
              updateCategory={this.updateCategory}
            />
            {categories}
            {postList}
          </div>
          <RightContainer
            posts={this.state.posts}
            tags={this.state.tags}
            tag={this.state.tag}
            search={this.state.search}
            updateSearch={this.updateSearch}
            updateTag={this.updateTag}
          />
        </React.Fragment>
      );

    return (
      <Col className="container">
        <BarLoader
          css={override}
          sizeUnit={"px"}
          size={80}
          color={"#E0E0E0"}
          loading={this.state.loading}
        />
        {Content}
      </Col>
    );
  }
}

export default PostsList;
