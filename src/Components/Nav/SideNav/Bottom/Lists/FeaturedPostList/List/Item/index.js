import React from "react";
import { Link } from "react-router-dom";
import { trimString } from "../../../../../../../../middlewares/Renderers/Data";
class FeaturedPost extends React.Component {
  render() {
    const { slug, title } = this.props;
    const featuredPostTitle = trimString(title, 30);
    return (
      <Link to={`/Post/${slug}`} className="featured-post-title">
        {featuredPostTitle}
      </Link>
    );
  }
}

export default FeaturedPost;
