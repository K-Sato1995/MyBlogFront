import React from "react";

const LinkItem = ({ url, text }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="link-item">
        <p className="link-text">{text}</p>
      </div>
    </a>
  );
};

export default LinkItem;
