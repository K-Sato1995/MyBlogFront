import React from "react";
import { ArrowLeft } from "react-feather";

const PreviousButton = ({ paginate, text }) => {
  return (
    <button className="previous-button" onClick={paginate}>
      <span className="previous-text">{text}</span>
      <span className="left-arrow">
        <ArrowLeft size={25} />
      </span>
    </button>
  );
};

export default PreviousButton;
