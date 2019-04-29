import React from "react";
import { Link } from "react-router-dom";

class FeaturedPost extends React.Component {
  render() {
    return (
      <Link to={`/Post/${this.props.id}`} className="featured-post-title">
        {this.props.title}
      </Link>
    );
  }
}

export default FeaturedPost;
