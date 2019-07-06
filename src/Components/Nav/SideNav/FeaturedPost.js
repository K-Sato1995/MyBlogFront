import React from "react";
import { Link } from "react-router-dom";

class FeaturedPost extends React.Component {
  render() {
    const { id, title } = this.props;
    return (
      <Link to={`/Post/${id}`} className="featured-post-title">
        {title}
      </Link>
    );
  }
}

export default FeaturedPost;
