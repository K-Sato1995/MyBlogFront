import React from "react";
import PostBox from "../PostBox";
import Loading from "../Loading";
import NoPostFound from "../NoPostFound";
import Pagination from "../Pagination";

const PostListContent = ({
  filterdPosts,
  showAllPosts,
  loading,
  postsPerPage,
  currentPage,
  setCurrentPage,
  updateTag
}) => {
  if (loading === true) return <Loading />;

  if (filterdPosts.length === 0)
    return <NoPostFound showAllPosts={showAllPosts} />;

  // The index of the last post on the page.
  const indexOfLastPost = currentPage * postsPerPage;
  // The index of the first post on the page.
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // The posts that are displayed on the page.
  const currentPosts = filterdPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Total page number
  const totalPageNumber = Math.ceil(filterdPosts.length / postsPerPage);

  // Change Page
  const nextPage = () => setCurrentPage(currentPage + 1);
  const previousPage = () => setCurrentPage(currentPage - 1);

  return (
    <div className="postList">
      {currentPosts.map((post, index) => (
        <PostBox
          key={index}
          id={post.id}
          title={post.title}
          introduction={post.introduction}
          category={post.category_id}
          tags={post.tags}
          slug={post.slug}
          created_at={post.created_at}
          updateTag={updateTag}
          setCurrentPage={setCurrentPage}
        />
      ))}
      <Pagination
        totalPageNumber={totalPageNumber}
        currentPage={currentPage}
        nextPage={nextPage}
        previousPage={previousPage}
      />
    </div>
  );
};

export default PostListContent;
