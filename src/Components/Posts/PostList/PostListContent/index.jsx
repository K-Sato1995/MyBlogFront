import React from "react";
import PostBox from "../PostBox";
import Loading from "../Loading";
import NoPostFound from "../NoPostFound";

const PostListContent = props => {
  const { currentPosts, updateTag, updateCategory, loading } = props;

  if (loading === true) return <Loading />;

  return <div className="postList">{currentPosts}</div>;
};

export default PostListContent;
