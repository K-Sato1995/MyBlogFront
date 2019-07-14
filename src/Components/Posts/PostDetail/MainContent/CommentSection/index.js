import React from "react";
import CommentBox from "./CommentBox";
import CommentForm from "./CommentForm";
import FlashMessage from "./FlashMessage";
import { FormattedMessage } from "react-intl";
import "../../../../../Design/Posts/PostDetail/CommentSection.scss";

export default class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      content: "",
      isFlashMVisible: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateStates = this.updateStates.bind(this);
    this.showFlashMessage = this.showFlashMessage.bind(this);
  }
  handleChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }
  showFlashMessage() {
    this.setState({ isFlashMVisible: true });
  }
  updateStates() {
    this.setState({ name: "", content: "" });
  }
  render() {
    const { name, content, isFlashMVisible } = this.state;
    const flashMessage = isFlashMVisible ? (
      <FlashMessage duration={5000} className="flash-message">
        <strong className="message">
          <FormattedMessage
            id="comment.flashMessage"
            defaultMessage="Your comment will be posted after getting reviewed by the author of this article."
          />
        </strong>
      </FlashMessage>
    ) : null;
    const comments = this.props.comments.map((comment, i) => (
      <CommentBox name={comment.name} content={comment.content} key={i} />
    ));

    return (
      <div className="comment-container">
        <h3 className="comment-container-header ">
          <FormattedMessage
            id="comment.commentContainer.header"
            defaultMessage="Comments"
          />
        </h3>
        {flashMessage}
        {comments}
        <CommentForm
          name={name}
          content={content}
          slug={this.props.slug}
          handleChange={this.handleChange}
          updateStates={this.updateStates}
          showFlashMessage={this.showFlashMessage}
        />
      </div>
    );
  }
}
