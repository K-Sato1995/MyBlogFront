import React from "react";
import "../../../../../../Design/Posts/PostDetail/CommentSection.scss";
import { createComment } from "../../../../../../MiddleWares/Api";

export default class CommentSection extends React.Component {
  render() {
    const {
      name,
      content,
      slug,
      handleChange,
      updateStates,
      showFlashMessage
    } = this.props;

    const submitComment = () => {
      if (name === "") {
        return alert("You can't leave name blank");
      } else if (content === "") {
        return alert("You can't leave content blank");
      } else {
        createComment(slug, name, content);
        updateStates();
        showFlashMessage();
      }
    };

    const handleClick = () => {
      submitComment();
    };
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
            handleClick();
          }}
        >
          Submit
        </button>
      </div>
    );
  }
}
