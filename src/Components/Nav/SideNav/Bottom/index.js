import React from "react";
import Label from "./Label";
import { FormattedMessage } from "react-intl";
import CategoryList from "./CategoryList";
import TagList from "./TagList";
import FeaturedPosts from "./FeaturedPosts";
import Links from "./Links";
import SearchBar from "./SearchBar";

export default class Bottom extends React.Component {
  render() {
    const {
      categoryList,
      categoryArrow,
      categoryItems,
      featuredPosts,
      featuredPostsArrow,
      featuredPostList,
      linksArrow,
      links,
      linkList,
      tagList,
      tagArrow,
      tagItems,
      toggleCategoryList,
      toggleTagList,
      toggleFeaturedPosts,
      toggleLinks,
      value,
      updateSearch
    } = this.props;
    return (
      <div className="side-bottom">
        <SearchBar value={value} updateSearch={updateSearch} />
        <CategoryList
          categoryList={categoryList}
          categoryArrow={categoryArrow}
          categoryItems={categoryItems}
          toggleCategoryList={toggleCategoryList}
        />
        <TagList
          tagList={tagList}
          tagArrow={tagArrow}
          tagItems={tagItems}
          toggleTagList={toggleTagList}
        />
        <FeaturedPosts
          featuredPosts={featuredPosts}
          featuredPostsArrow={featuredPostsArrow}
          featuredPostList={featuredPostList}
          toggleFeaturedPosts={toggleFeaturedPosts}
        />
        <Links
          linksArrow={linksArrow}
          links={links}
          linkList={linkList}
          toggleLinks={toggleLinks}
        />
        <Label />
      </div>
    );
  }
}
