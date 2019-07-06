import React from "react";
import PostBox from "./PostBox/PostBox";
import "../../../Design/Posts/PostList/PostList.scss";
import ContentLoader from "react-content-loader";
import NoPostFound from "./NoPostFound";
import SideNav from "../../Nav/SideNav/SideNav";
import ContentHeader from "./ContentHeader";
import CategoryTag from "./ContentTags/CategoryTag";
import TagTag from "./ContentTags/TagTag";
import About from "./About";
import Projects from "./Projects/Projects";
import Footer from "../../Footer/Footer";
import { FormattedMessage } from "react-intl";

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
    this.resetCategory = this.resetCategory.bind(this);
    this.resetTag = this.resetTag.bind(this);
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
    this.setState({ category: 0 });
    this.setState({ tag: 0 });
  }
  onClickAbout() {
    this.setState({ about: true });
    this.setState({ postList: false });
    this.setState({ projects: false });
    this.setState({ category: 0 });
    this.setState({ tag: 0 });
  }
  onClickProjects() {
    this.setState({ projects: true });
    this.setState({ postList: false });
    this.setState({ about: false });
    this.setState({ category: 0 });
    this.setState({ tag: 0 });
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

  resetCategory() {
    this.setState({ category: 0 });
  }

  resetTag() {
    this.setState({ tag: 0 });
  }
  render() {
    const {
      posts,
      categories,
      tags,
      search,
      category,
      tag,
      postList,
      about,
      projects,
      loading
    } = this.state;
    // Array.prototype.filter() is Array#select in Ruby.
    const filterd_posts = posts.filter(post => {
      let postTags = [];
      post.tags.map(tag => postTags.push(tag.id));

      // Conditions
      const all_not_zero = category !== 0 && tag !== 0;
      const tag_not_zero = tag !== 0;
      const catgory_not_zero = category !== 0;

      // Check post
      const isLanguage = this.props.lang === post.language.substring(0, 2);
      const taggedPost = postTags.includes(tag);
      const categoryPost = post.category_id === category;
      const searchedPost = post.title
        .toLowerCase()
        .includes(search.toLowerCase());

      if (all_not_zero) {
        return categoryPost && taggedPost && searchedPost && isLanguage;
      } else if (tag_not_zero) {
        return taggedPost && searchedPost && isLanguage;
      } else if (catgory_not_zero) {
        return categoryPost && searchedPost && isLanguage;
      } else {
        return searchedPost && isLanguage;
      }
    });

    const VisiblepostList =
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
      ) : loading === false ? (
        <NoPostFound showAllPosts={this.showAllPosts} />
      ) : (
        ""
      );

    const postContent =
      loading === true ? (
        <ContentLoader height={300}>
          <rect x="20" y="10" rx="2.5" ry="2.5" width="350" height="20" />
          <rect x="20" y="50" rx="2.5" ry="2.5" width="350" height="20" />
          <rect x="20" y="90" rx="2.5" ry="2.5" width="350" height="20" />
          <rect x="20" y="130" rx="2.5" ry="2.5" width="350" height="20" />
          <rect x="20" y="170" rx="2.5" ry="2.5" width="350" height="20" />
          <rect x="20" y="210" rx="2.5" ry="2.5" width="350" height="20" />
          <rect x="20" y="250" rx="2.5" ry="2.5" width="350" height="20" />
        </ContentLoader>
      ) : (
        <div className="postList">{VisiblepostList}</div>
      );

    let Content;
    if (postList) {
      Content = postContent;
    } else if (about) {
      Content = <About />;
    } else if (projects) {
      Content = <Projects />;
    } else {
      Content = postContent;
    }

    const contentHeader = postList ? (
      <ContentHeader
        headerTitle=<FormattedMessage
          id="contentHeader.blogPosts"
          defaultMessage="Blog Posts"
        />
        headerDescription=<FormattedMessage
          id="contentHeader.blogDescription"
          defaultMessage="This is the list of my blog posts. I mostly write about programming and my daily life."
        />
      />
    ) : (
      ""
    );

    // Content Tags
    const categoryTag =
      category === 0 ? (
        ""
      ) : (
        <CategoryTag
          category={category}
          categories={categories}
          resetCategory={this.resetCategory}
        />
      );

    const tagTag =
      tag === 0 ? (
        ""
      ) : (
        <TagTag tag={tag} tags={tags} resetTag={this.resetTag} />
      );

    const contentTags =
      tag === 0 && category === 0 ? (
        <div className="content-tag-box-hidden" />
      ) : (
        <div className="content-tag-box">
          {categoryTag}
          {tagTag}
        </div>
      );
    const showLeftContainer = this.props.showLeftContainer
      ? {
          display: "block"
        }
      : {
          display: "none"
        };
    return (
      <div className="whole-container">
        <div className="wrapper" style={showLeftContainer} />
        <div className="left-container" style={showLeftContainer}>
          <SideNav
            setLocale={this.props.setLocale}
            lang={this.props.lang}
            posts={posts}
            tags={tags}
            tag={tag}
            loading={loading}
            search={search}
            updateSearch={this.updateSearch}
            updateTag={this.updateTag}
            categories={categories}
            category={category}
            updateCategory={this.updateCategory}
            postList={postList}
            onClickPostList={this.onClickPostList}
            onClickAbout={this.onClickAbout}
            onClickProjects={this.onClickProjects}
          />
        </div>
        <div className="main-container">
          <div className="content-container">
            {contentHeader}
            {contentTags}
            {Content}
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default PostsList;
