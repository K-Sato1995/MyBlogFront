import React from "react";
import Header from "./Header";
import Content from "./Content";

export default class CommentBox extends React.Component {
  render() {
    const { name, content } = this.props;
    return (
      <div className="comment-box">
        <Header name={name} />
        <Content content={content} />
      </div>
    );
  }
}
