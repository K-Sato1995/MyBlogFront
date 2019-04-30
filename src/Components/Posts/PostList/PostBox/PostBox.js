import React from "react";
import "../../../../Design/Posts/PostList/PostBox.scss";
import { Link } from "react-router-dom";
import TagButton from "../../../Nav/SideNav/CategoryTag/TagButton";

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
    const post_tags = this.props.tags.map((tag, index) => (
      <TagButton
        key={index}
        value={tag.id}
        updateTag={this.props.updateTag}
        name={tag.name}
      />
    ));
    const introduction = this.props.introduction ? this.props.introduction : "";
    return (
      <div
        className="post-box"
        onMouseEnter={this.toggleOn}
        onMouseLeave={this.toggleOff}
      >
        <h3 className="post-title">
          <Link to={`/Post/${this.props.id}`} className="post-title-link">
            {this.props.title}
          </Link>
        </h3>
        <p className="post-introduction">{introduction.substring(0, 150)}...</p>
        <p className="post-tag-list">{post_tags}</p>
      </div>
    );
  }
}

export default PostBox;
