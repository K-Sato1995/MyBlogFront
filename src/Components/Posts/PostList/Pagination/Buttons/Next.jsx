import React from "react";
import { ArrowRight } from "react-feather";

const NextButton = ({ paginate, text }) => {
  return (
    <button className="next-button" onClick={paginate}>
      <span className="next-text">{text}</span>
      <span className="right-arrow">
        <ArrowRight size={25} />
      </span>
    </button>
  );
};

export default NextButton;
