import React from "react";

export default class CommentBox extends React.Component {
  render() {
    return (
      <div className="comment-box-header">
        <h4>{this.props.name}</h4>
      </div>
    );
  }
}
