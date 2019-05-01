import React from "react";
import "../../../Design/Nav/SideNav.scss";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import FeaturedPost from "./FeaturedPost";
import Tag from "./Tag";
import SearchBar from "./SearchBar";
import Author from "./Author";
import CategoryButton from "./CategoryTag/CategoryButton";

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
    const categories = this.props.categories.map((category, index) => (
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
    const featuredPosts = this.props.posts.slice(0, 4).map((post, index) => (
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
    const tags = this.props.tags.map((tag, index) => (
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
            Category List
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
            Tag List
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
            Featured Posts
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
          Blog Posts
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
              Links
              {linksArrow}
            </button>
            <ul id={this.state.links ? "show" : "hide"} className="list">
              {links}
            </ul>
          </div>

          {/* ListGroup5 */}
          <div className="list-group">
            <button className="list-title" onClick={this.props.onClickAbout}>
              About Me
            </button>
          </div>

          {/* ListGroup6 */}
          <div className="list-group">
            <button className="list-title" onClick={this.props.onClickProjects}>
              Projects
            </button>
          </div>
        </div>
      </div>
    );
  }
}
