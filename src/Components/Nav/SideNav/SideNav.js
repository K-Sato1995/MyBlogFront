import React from "react";
import "../../../Design/Nav/SideNav.scss";
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
      featuredPosts: false
    };
  }
  toggleCategoryList() {
    this.setState({ categoryList: !this.state.categoryList });
    this.setState({ tagList: false });
    this.setState({ featuredPosts: false });
  }
  toggleTagList() {
    this.setState({ tagList: !this.state.tagList });
    this.setState({ categoryList: false });
    this.setState({ featuredPosts: false });
  }
  toggleFeaturedPosts() {
    this.setState({ featuredPosts: !this.state.featuredPosts });
    this.setState({ categoryList: false });
    this.setState({ tagList: false });
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
    const categories = this.props.categories.map((category, index) => (
      <li className="list-item">
        <CategoryButton
          activeCategory={this.props.category}
          value={category.id}
          name={category.name}
          updateCategory={this.props.updateCategory}
          key={index}
        />
      </li>
    ));
    const featuredPosts = this.props.posts.slice(0, 4).map((post, index) => (
      <li className="list-item">
        <FeaturedPost key={index} title={post.title} id={post.id} />
      </li>
    ));
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
    return (
      <div className="SideNavbar">
        <div className="side-top">
          <Author />
          <SearchBar
            value={this.props.search}
            updateSearch={this.props.updateSearch}
          />
        </div>

        <div className="side-bottom">
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
            <ul
              id={this.state.featuredPosts ? "show" : "hide"}
              className="list"
            >
              {featuredPosts}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
