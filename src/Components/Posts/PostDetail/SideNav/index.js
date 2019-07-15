import React from "react";
import Toc from "./Toc";
import LikeBox from "./LikeBox";

export default class SideNav extends React.Component {
  render() {
    const { showLC, content, slug, like } = this.props;
    return (
      <div className="post-left-container" style={showLC}>
        <Toc content={content} slug={slug} />
        <LikeBox slug={slug} like={like} />
      </div>
    );
  }
}
