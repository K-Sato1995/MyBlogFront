import React from "react";
import "../../../../../../Design/Posts/PostDetail/CommentSection.scss";

export default class CommentSection extends React.Component {
  render() {
    const { name, content, createComment, handleChange, slug } = this.props;
    return (
      <div className="comment-form-container">
        <input
          className="form"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          className="form"
          type="text"
          name="content"
          value={content}
          onChange={handleChange}
          placeholder="Add a comment"
        />
        <button
          onClick={() => {
            createComment(slug, name, content);
          }}
        >
          Submit
        </button>
      </div>
    );
  }
}
