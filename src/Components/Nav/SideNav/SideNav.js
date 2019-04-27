import React from "react";
import "../../../Design/Nav/SideNav.scss";
import LangButton from "../langButton";
import FeaturedPost from "./FeaturedPost";
import Tag from "./Tag";
import SearchBar from "./SearchBar";
import Author from "./Author";
import CategoryButton from "./CategoryTag/CategoryButton";

export default class SideNav extends React.Component {
  render() {
    const categories = this.props.categories.map((category, index) => (
      <CategoryButton
        activeCategory={this.props.category}
        value={category.id}
        name={category.name}
        updateCategory={this.props.updateCategory}
        key={index}
      />
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
        <div className="content">
          <LangButton
            setLocale={this.props.setLocale}
            lang={this.props.lang}
            langValue="en"
            displayLang="EN"
          />
          <LangButton
            setLocale={this.props.setLocale}
            lang={this.props.lang}
            langValue="ja"
            displayLang="JA"
          />
          <SearchBar
            value={this.props.search}
            updateSearch={this.props.updateSearch}
          />
          {tags}
          {featuredPosts}
          <CategoryButton
            activeCategory={this.props.category}
            value={0}
            name={"All"}
            updateCategory={this.props.updateCategory}
          />
          {categories}
          <Author />
        </div>
      </div>
    );
  }
}
