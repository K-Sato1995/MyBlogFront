import React, { useEffect } from "react";
import "../../../Design/Posts/PostList/PostList.scss";
import ContentHeader from "./ContentHeader";
import SideNav from "../../Nav/SideNav";
import Footer from "../../Footer";
import PostListContent from "./PostListContent";
import ContentTags from "./ContentTags";
import { FormattedMessage } from "react-intl";

const PostList = ({
  loading,
  posts,
  post_tags,
  categories,
  category,
  tags,
  tag,
  search,
  updateSearch,
  updateCategory,
  updateTag,
  showAllPosts,
  resetCategory,
  resetTag,
  showLC,
  fetchCategories,
  fetchTags,
  fetchPosts,
  lang,
  setLocale
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchCategories();
    fetchTags();
    fetchPosts();
  }, []);

  // Array.prototype.filter() is Array#select in Ruby.
  const filterdPosts = posts.filter(post => {
    posts.map((post, index) => (post.tags = post_tags[index]));
    let postTags = [];
    post.tags.map(tag => postTags.push(tag.id));
    // Conditions
    const all_not_zero = category !== 0 && tag !== 0;
    const tag_not_zero = tag !== 0;
    const catgory_not_zero = category !== 0;

    // Check post
    const isLanguage = lang === post.language.substring(0, 2);
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

  const sLC = showLC ? { display: "block" } : { display: "none" };

  return (
    <div className="whole-container">
      <div className="wrapper" style={sLC} />
      <div className="left-container" style={sLC}>
        <SideNav
          setLocale={setLocale}
          lang={lang}
          posts={posts}
          tags={tags}
          tag={tag}
          loading={loading}
          search={search}
          updateSearch={updateSearch}
          updateTag={updateTag}
          categories={categories}
          category={category}
          updateCategory={updateCategory}
        />
      </div>
      <div className="main-container">
        <div className="content-container">
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
          <ContentTags
            category={category}
            categories={categories}
            resetCategory={resetCategory}
            tag={tag}
            tags={tags}
            resetTag={resetTag}
          />
          <PostListContent
            filterdPosts={filterdPosts}
            loading={loading}
            updateTag={updateTag}
            updateCategory={updateCategory}
            showAllPosts={showAllPosts}
          />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default PostList;
