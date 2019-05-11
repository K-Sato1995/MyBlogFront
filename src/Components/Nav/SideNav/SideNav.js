import React from "react";
import "../../../Design/Nav/SideNav.scss";
import Label from "./Label";
import { FormattedMessage } from "react-intl";
import FeaturedPost from "./FeaturedPost";
import Tag from "./Tag";
import SearchBar from "./SearchBar";
import Author from "./Author";
import CategoryButton from "./CategoryTag/CategoryButton";
import ContentLoader from "react-content-loader";

export default class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: false,
      tagList: false,
      featuredPosts: false,
      links: false
    };
  }
  toggleCategoryList() {
    this.setState({ categoryList: !this.state.categoryList });
    this.setState({ tagList: false });
    this.setState({ featuredPosts: false });
    this.setState({ links: false });
  }
  toggleTagList() {
    this.setState({ tagList: !this.state.tagList });
    this.setState({ categoryList: false });
    this.setState({ featuredPosts: false });
    this.setState({ links: false });
  }
  toggleFeaturedPosts() {
    this.setState({ featuredPosts: !this.state.featuredPosts });
    this.setState({ categoryList: false });
    this.setState({ tagList: false });
    this.setState({ links: false });
  }
  toggleLinks() {
    this.setState({ links: !this.state.links });
    this.setState({ tagList: false });
    this.setState({ categoryList: false });
    this.setState({ featuredPosts: false });
  }
  render() {
    const categoryArrow = this.state.categoryList ? (
      <span className="glyphicon glyphicon-chevron-down" />
    ) : (
      <span className="glyphicon glyphicon-chevron-right" />
    );
    const tagArrow = this.state.tagList ? (
      <span className="glyphicon glyphicon-chevron-down" />
    ) : (
      <span className="glyphicon glyphicon-chevron-right" />
    );
    const featuredPostsArrow = this.state.featuredPosts ? (
      <span className="glyphicon glyphicon-chevron-down" />
    ) : (
      <span className="glyphicon glyphicon-chevron-right" />
    );
    const linksArrow = this.state.links ? (
      <span className="glyphicon glyphicon-chevron-down" />
    ) : (
      <span className="glyphicon glyphicon-chevron-right" />
    );
    const listLoader = (
      <ContentLoader>
        <rect x="20" y="20" rx="4" ry="4" width="300" height="15" />
        <rect x="20" y="50" rx="4" ry="4" width="300" height="15" />
        <rect x="20" y="80" rx="4" ry="4" width="300" height="15" />
        <rect x="20" y="110" rx="4" ry="4" width="300" height="15" />
      </ContentLoader>
    );
    const categories = this.props.loading
      ? listLoader
      : this.props.categories.map((category, index) => (
          <li className="list-item">
            <CategoryButton
              activeCategory={this.props.category}
              value={category.id}
              name={category.name}
              updateCategory={this.props.updateCategory}
              key={index}
              onClickPostList={this.props.onClickPostList}
            />
          </li>
        ));
    const featuredPosts = this.props.loading
      ? listLoader
      : this.props.posts.slice(0, 4).map((post, index) => (
          <li className="list-item">
            <FeaturedPost key={index} title={post.title} id={post.id} />
          </li>
        ));
    const links = (
      <React.Fragment>
        <li className="list-item">
          <a href="https://dev.to/ksato1995" className="list-item-ele">
            <FormattedMessage
              id="sideNav.links.link1"
              defaultMessage="Default"
            />
          </a>
        </li>
        <li className="list-item">
          <a href="https://github.com/K-Sato1995" className="list-item-ele">
            <FormattedMessage
              id="sideNav.links.link2"
              defaultMessage="Default"
            />
          </a>
        </li>
        <li className="list-item">
          <a
            href="https://github.com/K-Sato1995/MyBlog"
            className="list-item-ele"
          >
            <FormattedMessage
              id="sideNav.links.link3"
              defaultMessage="Default"
            />
          </a>
        </li>
        <li className="list-item">
          <a
            href="https://github.com/K-Sato1995/MyBlogFront"
            className="list-item-ele"
          >
            <FormattedMessage
              id="sideNav.links.link4"
              defaultMessage="Default"
            />
          </a>
        </li>
      </React.Fragment>
    );
    const tags = this.props.loading
      ? listLoader
      : this.props.tags.map((tag, index) => (
          <li className="list-item">
            <Tag
              activeTag={this.props.tag}
              key={index}
              value={tag.id}
              name={tag.name}
              updateTag={this.props.updateTag}
            />
          </li>
        ));
    const postNav = this.props.postList ? (
      <React.Fragment>
        <SearchBar
          value={this.props.search}
          updateSearch={this.props.updateSearch}
        />
        {/* ListGroup1 */}
        <div className="list-group">
          <button
            id={this.state.categoryList ? "active" : ""}
            className="list-title"
            onClick={() => this.toggleCategoryList()}
          >
            <FormattedMessage
              id="sideNav.categoryList"
              defaultMessage="Category List"
            />
            {categoryArrow}
          </button>
          <ul id={this.state.categoryList ? "show" : "hide"} className="list">
            {categories}
          </ul>
        </div>

        {/* ListGroup2 */}
        <div className="list-group">
          <button
            id={this.state.tagList ? "active" : ""}
            className="list-title"
            onClick={() => this.toggleTagList()}
          >
            <FormattedMessage id="sideNav.tagList" defaultMessage="Tag List" />
            {tagArrow}
          </button>
          <ul id={this.state.tagList ? "show" : "hide"} className="list">
            {tags}
          </ul>
        </div>

        {/* ListGroup3 */}
        <div className="list-group">
          <button
            id={this.state.featuredPosts ? "active" : ""}
            className="list-title"
            onClick={() => this.toggleFeaturedPosts()}
          >
            <FormattedMessage
              id="sideNav.featuredPosts"
              defaultMessage="Featured Posts"
            />
            {featuredPostsArrow}
          </button>
          <ul id={this.state.featuredPosts ? "show" : "hide"} className="list">
            {featuredPosts}
          </ul>
        </div>
      </React.Fragment>
    ) : (
      <div className="list-group">
        <button
          className="list-title"
          id="blogPosts"
          onClick={this.props.onClickPostList}
        >
          <FormattedMessage
            id="sideNav.blogPosts"
            defaultMessage="Blog Posts"
          />
        </button>
      </div>
    );
    return (
      <div className="SideNavbar">
        <div className="side-top">
          <Author />
        </div>

        <div className="side-bottom">
          {postNav}
          {/* ListGroup4 */}
          <div className="list-group">
            <button
              id={this.state.links ? "active" : ""}
              className="list-title"
              onClick={() => this.toggleLinks()}
            >
              <FormattedMessage id="sideNav.Links" defaultMessage="Links" />
              {linksArrow}
            </button>
            <ul id={this.state.links ? "show" : "hide"} className="list">
              {links}
            </ul>
          </div>

          {/* ListGroup5 */}
          <div className="list-group">
            <button className="list-title" onClick={this.props.onClickAbout}>
              <FormattedMessage id="sideNav.about" defaultMessage="About Me" />
            </button>
          </div>

          {/* ListGroup6 */}
          <div className="list-group">
            <button className="list-title" onClick={this.props.onClickProjects}>
              <FormattedMessage
                id="sideNav.projects"
                defaultMessage="Projects"
              />
            </button>
          </div>

          <Label />
        </div>
      </div>
    );
  }
}
