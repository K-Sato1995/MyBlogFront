import React from "react";
import NextButton from "./Buttons/Next";
import PreviousButton from "./Buttons/Previous";
import "../../../../Design/Posts/PostList/Pagination.scss";

const Pagination = ({
  totalPageNumber,
  currentPage,
  nextPage,
  previousPage
}) => {
  const pickComponent = (currentPage, totalPageNumber) => {
    if (totalPageNumber <= 1) {
      return <></>;
    }
    if (currentPage === 1) {
      return <NextButton paginate={nextPage} text={"Go to the next page"} />;
    }
    if (currentPage === totalPageNumber) {
      return (
        <PreviousButton
          paginate={previousPage}
          text={"Go back to the previous page"}
        />
      );
    }
    return (
      <>
        <PreviousButton paginate={previousPage} text={"Previous Page"} />
        <NextButton paginate={nextPage} text={"Next Page"} />
      </>
    );
  };
  const pagenateButtons = pickComponent(currentPage, totalPageNumber);
  return <nav className="pagination">{pagenateButtons}</nav>;
};

export default Pagination;
