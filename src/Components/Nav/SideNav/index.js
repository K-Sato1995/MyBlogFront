import React from "react";
import "../../../Design/Nav/SideNav.scss";
import { FormattedMessage } from "react-intl";
import FeaturedPost from "./FeaturedPost";
import Tag from "./Tag";
import SearchBar from "./SearchBar";
import CategoryButton from "./CategoryTag/CategoryButton";
import ContentLoader from "react-content-loader";
import { ChevronRight } from "react-feather";
import { ChevronDown } from "react-feather";
import Top from "./Top";
import Bottom from "./Bottom";

export default class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: false,
      tagList: false,
      featuredPosts: false,
      links: false
    };
    this.toggleLinks = this.toggleLinks.bind(this);
    this.toggleCategoryList = this.toggleCategoryList.bind(this);
    this.toggleTagList = this.toggleTagList.bind(this);
    this.toggleFeaturedPosts = this.toggleFeaturedPosts.bind(this);
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
    const { categoryList, tagList, featuredPosts, links } = this.state;
    const {
      loading,
      posts,
      categories,
      search,
      tags,
      updateCategory,
      updateTag,
      updateSearch
    } = this.props;
    // const {}
    const categoryArrow = categoryList ? (
      <ChevronDown className="chevron-down" />
    ) : (
      <ChevronRight className="chevron-right" />
    );
    const tagArrow = tagList ? (
      <ChevronDown className="chevron-down" />
    ) : (
      <ChevronRight className="chevron-right" />
    );
    const featuredPostsArrow = featuredPosts ? (
      <ChevronDown className="chevron-down" />
    ) : (
      <ChevronRight className="chevron-right" />
    );
    const linksArrow = links ? (
      <ChevronDown className="chevron-down" />
    ) : (
      <ChevronRight className="chevron-right" />
    );
    const listLoader = (
      <ContentLoader>
        <rect x="20" y="20" rx="4" ry="4" width="300" height="15" />
        <rect x="20" y="50" rx="4" ry="4" width="300" height="15" />
        <rect x="20" y="80" rx="4" ry="4" width="300" height="15" />
        <rect x="20" y="110" rx="4" ry="4" width="300" height="15" />
      </ContentLoader>
    );
    const categoryItems = loading
      ? listLoader
      : categories.map((category, index) => (
          <li className="list-item">
            <CategoryButton
              activeCategory={category}
              value={category.id}
              name={category.name}
              updateCategory={updateCategory}
              key={index}
            />
          </li>
        ));
    const featuredPostList = loading
      ? listLoader
      : posts.slice(0, 4).map((post, index) => (
          <li className="list-item">
            <FeaturedPost key={index} title={post.title} id={post.id} />
          </li>
        ));
    const linkList = (
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
    const tagItems = loading
      ? listLoader
      : tags.map((tag, index) => (
          <li className="list-item">
            <Tag
              activeTag={tag}
              key={index}
              value={tag.id}
              name={tag.name}
              updateTag={updateTag}
            />
          </li>
        ));

    return (
      <div className="SideNavbar">
        <Top />
        <Bottom
          categoryList={categoryList}
          categoryArrow={categoryArrow}
          categoryItems={categoryItems}
          tagList={tagList}
          tagArrow={tagArrow}
          tagItems={tagItems}
          linksArrow={linksArrow}
          links={links}
          linkList={linkList}
          featuredPosts={featuredPosts}
          featuredPostsArrow={featuredPostsArrow}
          featuredPostList={featuredPostList}
          toggleFeaturedPosts={this.toggleFeaturedPosts}
          toggleTagList={this.toggleTagList}
          toggleCategoryList={this.toggleCategoryList}
          toggleLinks={this.toggleLinks}
          value={search}
          updateSearch={updateSearch}
        />
      </div>
    );
  }
}
