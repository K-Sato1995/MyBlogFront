import React from "react";
import PostBox from "./PostBox/PostBox";
import "../../../Design/Posts/PostList/PostList.scss";
import { css } from "@emotion/core";
import { BarLoader } from "react-spinners";
import NoPostFound from "./NoPostFound";
import LoadingBox from "../LoadingBox";
import SideNav from "../../Nav/SideNav/SideNav";
import CategoryButton from "../../Nav/SideNav/CategoryTag/CategoryButton";
import ContentHeader from "./ContentHeader";
import About from "./About";

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
      postList: true,
      about: false,
      projects: false,
      loading: true
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
    this.updateTag = this.updateTag.bind(this);
    this.showAllPosts = this.showAllPosts.bind(this);
    this.onClickPostList = this.onClickPostList.bind(this);
    this.onClickAbout = this.onClickAbout.bind(this);
    this.onClickProjects = this.onClickProjects.bind(this);
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
  onClickPostList() {
    this.setState({ postList: true });
    this.setState({ about: false });
    this.setState({ projects: false });
  }
  onClickAbout() {
    this.setState({ about: true });
    this.setState({ postList: false });
    this.setState({ projects: false });
  }
  onClickProjects() {
    this.setState({ projects: true });
    this.setState({ postList: false });
    this.setState({ about: false });
  }
  updateSearch(e) {
    this.setState({ search: e.target.value });
  }
  updateCategory(e) {
    console.log("updateCategory");
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

    const postContent =
      this.state.loading === true ? (
        <LoadingBox />
      ) : (
        <React.Fragment>{postList}</React.Fragment>
      );

    let Content;
    if (this.state.postList) {
      Content = postContent;
    } else if (this.state.about) {
      Content = <About />;
    } else if (this.state.projects) {
      Content = "Projects";
    } else {
      Content = postContent;
    }

    const contentHeader = this.state.postList ? (
      <ContentHeader
        headerTitle="Blog Posts"
        headerDescription="This is the list of my blog posts. I mostly write about programming and my daily life. "
      />
    ) : (
      ""
    );

    return (
      <div className="whole-container">
        <div className="left-container">
          <SideNav
            setLocale={this.props.setLocale}
            lang={this.props.lang}
            posts={this.state.posts}
            tags={this.state.tags}
            tag={this.state.tag}
            search={this.state.search}
            updateSearch={this.updateSearch}
            updateTag={this.updateTag}
            categories={this.state.categories}
            category={this.state.category}
            updateCategory={this.updateCategory}
            postList={this.state.postList}
            onClickPostList={this.onClickPostList}
            onClickAbout={this.onClickAbout}
            onClickProjects={this.onClickProjects}
          />
        </div>
        <div className="main-container">
          <BarLoader
            css={override}
            sizeUnit={"px"}
            size={80}
            color={"#E0E0E0"}
            loading={this.state.loading}
          />
          <CategoryButton
            activeCategory={this.category}
            value={0}
            name={"All"}
            updateCategory={this.updateCategory}
          />
          <div className="content-container">
            {contentHeader}
            {Content}
          </div>
        </div>
      </div>
    );
  }
}

export default PostsList;
