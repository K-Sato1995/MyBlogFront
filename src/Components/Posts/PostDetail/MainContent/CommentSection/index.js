import React from "react";
import CommentBox from "./CommentBox";
import CommentForm from "./CommentForm";
import "../../../../../Design/Posts/PostDetail/CommentSection.scss";
import { createComment } from "../../../../../MiddleWares/Api";

export default class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      content: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }
  render() {
    const comments = this.props.comments.map((comment, i) => (
      <CommentBox name={comment.name} content={comment.content} key={i} />
    ));
    const { name, content } = this.state;
    return (
      <div className="comment-container">
        <h3 className="comment-container-header">Comments</h3>
        <CommentForm
          name={name}
          content={content}
          slug={this.props.slug}
          createComment={createComment}
          handleChange={this.handleChange}
        />
        {comments}
      </div>
    );
  }
}
