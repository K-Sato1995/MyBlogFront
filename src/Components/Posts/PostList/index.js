import React from "react";
import PostBox from "./PostBox";
import "../../../Design/Posts/PostList/PostList.scss";
import Loading from "./Loading";
import NoPostFound from "./NoPostFound";
import ContentHeader from "./ContentHeader";
import SideNav from "../../Nav/SideNav";
import CategoryTag from "./ContentTags/CategoryTag";
import TagTag from "./ContentTags/TagTag";
import Footer from "../../Footer";
import { FormattedMessage } from "react-intl";

class PostList extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchCategories();
    this.props.fetchTags();
    this.props.fetchPosts();
  }
  render() {
    const {
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
      resetTag
    } = this.props;
    // Array.prototype.filter() is Array#select in Ruby.
    const filterd_posts = posts.filter(post => {
      posts.map((post, index) => (post.tags = post_tags[index]));
      let postTags = [];
      post.tags.map(tag => postTags.push(tag.id));
      // Conditions
      const all_not_zero = category !== 0 && tag !== 0;
      const tag_not_zero = tag !== 0;
      const catgory_not_zero = category !== 0;

      // Check post
      const isLanguage = this.props.lang === post.language.substring(0, 2);
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

    const VisiblePostList =
      filterd_posts.length !== 0 ? (
        filterd_posts.map((post, index) => (
          <PostBox
            key={index}
            id={post.id}
            title={post.title}
            introduction={post.introduction}
            category={post.category_id}
            tags={post.tags}
            slug={post.slug}
            updateTag={updateTag}
            updateCategory={updateCategory}
            created_at={post.created_at}
          />
        ))
      ) : loading === false ? (
        <NoPostFound showAllPosts={showAllPosts} />
      ) : (
        ""
      );

    const postContent =
      loading === true ? (
        <Loading />
      ) : (
        <div className="postList">{VisiblePostList}</div>
      );
    // Content Tags
    const categoryTag =
      category === 0 ? (
        ""
      ) : (
        <CategoryTag
          category={category}
          categories={categories}
          resetCategory={resetCategory}
        />
      );

    const tagTag =
      tag === 0 ? "" : <TagTag tag={tag} tags={tags} resetTag={resetTag} />;

    const contentTags =
      tag === 0 && category === 0 ? (
        <div className="content-tag-box-hidden" />
      ) : (
        <div className="content-tag-box">
          {categoryTag}
          {tagTag}
        </div>
      );
    const showLC = this.props.showLC
      ? {
          display: "block"
        }
      : {
          display: "none"
        };
    return (
      <div className="whole-container">
        <div className="wrapper" style={showLC} />
        <div className="left-container" style={showLC}>
          <SideNav
            setLocale={this.props.setLocale}
            lang={this.props.lang}
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
            {contentTags}
            {postContent}
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default PostList;
