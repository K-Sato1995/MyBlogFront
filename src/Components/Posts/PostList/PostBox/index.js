import React from "react";
import "../../../../Design/Posts/PostList/PostBox.scss";
import { Link } from "react-router-dom";
import TagButton from "./TagButton";

class PostBox extends React.Component {
  constructor() {
    super();
    this.state = {
      hover: false
    };
    this.toggleOn = this.toggleOn.bind(this);
    this.toggleOff = this.toggleOff.bind(this);
  }
  formatDate(date) {
    const dateObject = new Date(date);
    const month = dateObject.getMonth() + 1;
    const day = dateObject.getDate();
    const year = dateObject.getFullYear();
    return `${year}/${month}/${day}`;
  }
  // Don't do this.setState({hover: !this.state.hover}). Trust me. I tried.
  toggleOn() {
    this.setState({ hover: true });
  }
  toggleOff() {
    this.setState({ hover: false });
  }
  render() {
    const { tags, updateTag, introduction, slug, title } = this.props;
    const post_tags = tags.map((tag, index) => (
      <TagButton
        key={index}
        value={tag.id}
        updateTag={updateTag}
        name={tag.name}
      />
    ));
    const intro =
      introduction.length < 200
        ? introduction
        : `${introduction.substring(0, 200)}...`;
    return (
      <div
        className="post-box"
        onMouseEnter={this.toggleOn}
        onMouseLeave={this.toggleOff}
      >
        <h3 className="post-title">
          <Link to={`/Post/${slug}`} className="post-title-link">
            {title}
          </Link>
        </h3>
        <p className="post-introduction">{intro}</p>
        <p className="post-tag-list">{post_tags}</p>
      </div>
    );
  }
}

export default PostBox;
