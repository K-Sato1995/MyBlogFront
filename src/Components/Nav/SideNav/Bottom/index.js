import React from "react";
import Label from "./Label";
import CategoryList from "./Lists/CategoryList";
import TagList from "./Lists/TagList";
import FeaturedPostList from "./Lists/FeaturedPostList";
import LinkList from "./Lists/LinkList";
import SearchBar from "./SearchBar";
import LinkItem from "./LinkItem";

export default class Bottom extends React.Component {
  render() {
    const {
      categoryList,
      featuredPosts,
      links,
      tagList,
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
          loading={loading}
          arrow={arrow}
        />
        <TagList
          tagList={tagList}
          toggleTagList={toggleTagList}
          updateTag={updateTag}
          tags={tags}
          loading={loading}
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
        <LinkItem url="https://k-sato.netlify.com/" text="About Me" />
        <LinkItem url="https://github.com/K-Sato1995" text="Other Projects" />
        <Label />
      </div>
    );
  }
}
