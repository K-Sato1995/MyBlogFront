import React from "react";
import "../../../../Design/Posts/PostList/PostBox.scss";
import { Link } from "react-router-dom";
import TagButton from "../CategoryTag/TagButton";
import CategoryBall from "./CategoryBall";

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
    let category;
    if (this.props.category === 1) {
      category = "#701516";
    } else if (this.props.category === 2) {
      category = "#74CDDD";
    } else if (this.props.category === 3) {
      category = "#F6D033";
    } else if (this.props.category === 5) {
      category = "#009FCE";
    } else if (this.props.category === 6) {
      category = "#CC0001";
    } else if (this.props.category === 7) {
      category = "#3B444E";
    } else if (this.props.category === 8) {
      category = "#5AB601";
    }
    let postBoxHoverStyle = this.state.hover
      ? { borderLeft: `solid 5px ${category}` }
      : null;
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
        style={postBoxHoverStyle}
        onMouseEnter={this.toggleOn}
        onMouseLeave={this.toggleOff}
      >
        <h3 className="post-title">
          <Link to={`/Post/${this.props.id}`} className="post-title-link">
            {this.props.title}
          </Link>
        </h3>
        <CategoryBall category={this.props.category} />
        <p className="post-introduction">{introduction.substring(0, 250)}...</p>
        <p className="post-tag-list">{post_tags}</p>
        <p className="created-date">{this.formatDate(this.props.created_at)}</p>
      </div>
    );
  }
}

export default PostBox;
