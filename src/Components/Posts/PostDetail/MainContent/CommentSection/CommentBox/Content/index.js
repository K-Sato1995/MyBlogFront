import React from "react";

export default class CommentBox extends React.Component {
  render() {
    return (
      <div className="comment-box-content">
        <p>{this.props.content}</p>
      </div>
    );
  }
}
