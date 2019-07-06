import React from "react";
import "../../../Design/Posts/PostList/NoPostFound.scss";
import { FormattedMessage } from "react-intl";

class NoPostFound extends React.Component {
  render() {
    const { showAllPosts } = this.props;
    return (
      <div className="no-post-found-box">
        <img
          alt={"IMG"}
          src={require("../images/no-post.svg")}
          className="image"
        />
        <h2>
          <FormattedMessage id="noPosts.title" defaultMessage="No Post Found" />
        </h2>
        <button
          value={0}
          name={"All"}
          onClick={showAllPosts}
          className="show-all-posts-btn"
        >
          <FormattedMessage
            id="noPosts.btn"
            defaultMessage="
            Show All Posts"
          />
        </button>
      </div>
    );
  }
}

export default NoPostFound;
