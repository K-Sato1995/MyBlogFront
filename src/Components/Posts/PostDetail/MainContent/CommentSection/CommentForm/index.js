import React from "react";
import InputForm from "./Input/Form/Input";
import TextArea from "./Input/Form/TextArea";
import InputButton from "./Input/Button";
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
        <InputForm handleChange={handleChange} name="name" value={name} />
        <TextArea handleChange={handleChange} name="content" value={content} />
        <InputButton handleClick={handleClick} />
      </div>
    );
  }
}
