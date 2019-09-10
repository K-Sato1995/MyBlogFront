import React from "react";
import InputForm from "./Input/Form/Input";
import TextArea from "./Input/Form/TextArea";
import InputButton from "./Input/Button";
import "../../../../../../Design/Posts/PostDetail/CommentSection.scss";
import { createComment } from "../../../../../../middlewares/Api";

export default class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormVisible: true
    };
  }
  hideForm() {
    this.setState({ isFormVisible: false });
  }
  render() {
    const { isFormVisible } = this.state;
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
        this.hideForm();
        showFlashMessage();
      }
    };

    const handleClick = () => {
      submitComment();
    };

    const visibility = isFormVisible
      ? {
          display: "block"
        }
      : {
          display: "none"
        };

    return (
      <div className="comment-form-container" style={visibility}>
        <InputForm handleChange={handleChange} name="name" value={name} />
        <TextArea handleChange={handleChange} name="content" value={content} />
        <InputButton handleClick={handleClick} />
      </div>
    );
  }
}
