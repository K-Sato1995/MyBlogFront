import React from "react";
import PostBox from "../PostBox";
import Loading from "../Loading";
import NoPostFound from "../NoPostFound";

const PostListContent = props => {
  const { filterdPosts, showAllPosts, loading } = props;

  if (loading === true) return <Loading />;

  if (filterdPosts.length === 0)
    return <NoPostFound showAllPosts={showAllPosts} />;

  // Pagenation
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage, setPostsPerPage] = useState(10);

  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const posts = filterdPosts.map((post, index) => (
    <PostBox
      key={index}
      id={post.id}
      title={post.title}
      introduction={post.introduction}
      category={post.category_id}
      tags={post.tags}
      slug={post.slug}
      updateTag={props.updateTag}
      updateCategory={props.updateCategory}
      created_at={post.created_at}
    />
  ));

  return <div className="postList">{posts}</div>;
};

export default PostListContent;
