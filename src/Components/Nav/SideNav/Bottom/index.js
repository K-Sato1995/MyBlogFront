import React from "react";
import Label from "./Label";
import { FormattedMessage } from "react-intl";
import CategoryList from "./Lists/CategoryList";
import TagList from "./Lists/TagList";
import FeaturedPostList from "./Lists/FeaturedPostList";
import LinkList from "./Lists/LinkList";
import SearchBar from "./SearchBar";

export default class Bottom extends React.Component {
  render() {
    const {
      categoryList,
      categoryArrow,
      categoryItems,
      featuredPosts,
      featuredPostsArrow,
      linksArrow,
      links,
      tagList,
      tagArrow,
      toggleCategoryList,
      toggleTagList,
      toggleFeaturedPosts,
      toggleLinks,
      value,
      updateSearch,
      arrow,
      loading,
      posts,
      tags,
      updateTag,
      categories,
      updateCategory
    } = this.props;
    return (
      <div className="side-bottom">
        <SearchBar value={value} updateSearch={updateSearch} />
        <CategoryList
          categoryList={categoryList}
          updateCategory={updateCategory}
          categories={categories}
          toggleCategoryList={toggleCategoryList}
          arrow={arrow}
        />
        <TagList
          tagList={tagList}
          toggleTagList={toggleTagList}
          updateTag={updateTag}
          tags={tags}
          arrow={arrow}
        />
        <FeaturedPostList
          featuredPosts={featuredPosts}
          toggleFeaturedPosts={toggleFeaturedPosts}
          loading={loading}
          posts={posts}
          arrow={arrow}
        />
        <LinkList links={links} toggleLinks={toggleLinks} arrow={arrow} />
        <Label />
      </div>
    );
  }
}
