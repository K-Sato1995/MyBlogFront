import React from "react";
import "../../../Design/Nav/SideNav.scss";
import { ChevronRight } from "react-feather";
import { ChevronDown } from "react-feather";
import Bottom from "./Bottom";
// import Top from "./Top";

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

    const arrow = target => {
      if (target) {
        return <ChevronDown className="chevron-down" />;
      } else {
        return <ChevronRight className="chevron-right" />;
      }
    };
    return (
      <div className="SideNavbar">
        {/* <Top /> */}
        <Bottom
          posts={posts}
          categoryList={categoryList}
          tagList={tagList}
          links={links}
          featuredPosts={featuredPosts}
          toggleFeaturedPosts={this.toggleFeaturedPosts}
          toggleTagList={this.toggleTagList}
          toggleCategoryList={this.toggleCategoryList}
          toggleLinks={this.toggleLinks}
          value={search}
          updateSearch={updateSearch}
          arrow={arrow}
          loading={loading}
          tags={tags}
          updateTag={updateTag}
          categories={categories}
          updateCategory={updateCategory}
        />
      </div>
    );
  }
}
