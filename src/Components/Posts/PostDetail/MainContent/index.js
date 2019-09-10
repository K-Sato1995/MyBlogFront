import React from "react";
import MarkDown from "./MarkDown";
import PostAuthor from "./PostAuthor";
import CommentSection from "./CommentSection";
import Footer from "../../../Footer";
import { formatDate } from "../../../../middlewares/Renderers/Data";

export default class SideNav extends React.Component {
  render() {
    const {
      title,
      created_at,
      content,
      page_views,
      slug,
      comments
    } = this.props;
    return (
      <div className="post-main-container">
        <div className="post-content-container">
          <div className="post-detail-title">
            <h1 className="title">{title}</h1>
            <p className="post-created-date">{formatDate(created_at)}</p>
          </div>
          <MarkDown content={content} />
          <span className="page-views">{page_views} Page Views</span>
          <CommentSection comments={comments} slug={slug} />
          <PostAuthor />
          <Footer />
        </div>
      </div>
    );
  }
}
