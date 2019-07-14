import React from "react";
import Toc from "./Toc";

export default class SideNav extends React.Component {
  render() {
    const { showLC, content, slug } = this.props;
    return (
      <div className="post-left-container" style={showLC}>
        <Toc content={content} slug={slug} />
      </div>
    );
  }
}
