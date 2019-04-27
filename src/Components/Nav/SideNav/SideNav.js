import React from "react";
import "../../../Design/Nav/SideNav.scss";
import FeaturedPost from "./FeaturedPost";
import Tag from "./Tag";
import SearchBar from "./SearchBar";
import Author from "./Author";
import CategoryButton from "./CategoryTag/CategoryButton";

export default class SideNav extends React.Component {
  render() {
    const categories = this.props.categories.map((category, index) => (
      <li>
        <CategoryButton
          activeCategory={this.props.category}
          value={category.id}
          name={category.name}
          updateCategory={this.props.updateCategory}
          key={index}
        />
      </li>
    ));
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
      <div className="SideNavbar">
        <Author />
        <SearchBar
          value={this.props.search}
          updateSearch={this.props.updateSearch}
        />
        <h4 className="list-title">Categories</h4>
        <ul>{categories}</ul>
        {tags}
        {featuredPosts}
        <CategoryButton
          activeCategory={this.props.category}
          value={0}
          name={"All"}
          updateCategory={this.props.updateCategory}
        />
      </div>
    );
  }
}
