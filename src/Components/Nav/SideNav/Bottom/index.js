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
      updateSearch,
      arrow
    } = this.props;
    return (
      <div className="side-bottom">
        <SearchBar value={value} updateSearch={updateSearch} />
        <CategoryList
          categoryList={categoryList}
          categoryItems={categoryItems}
          toggleCategoryList={toggleCategoryList}
          arrow={arrow}
        />
        <TagList
          tagList={tagList}
          tagItems={tagItems}
          toggleTagList={toggleTagList}
          arrow={arrow}
        />
        <FeaturedPosts
          featuredPosts={featuredPosts}
          featuredPostList={featuredPostList}
          toggleFeaturedPosts={toggleFeaturedPosts}
          arrow={arrow}
        />
        <Links
          links={links}
          linkList={linkList}
          toggleLinks={toggleLinks}
          arrow={arrow}
        />
        <Label />
      </div>
    );
  }
}
