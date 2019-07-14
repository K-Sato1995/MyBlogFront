import React from "react";
import ContentLoader from "react-content-loader";

const Loading = () => {
  return (
    <ContentLoader height={300}>
      <rect x="20" y="10" rx="2.5" ry="2.5" width="350" height="20" />
      <rect x="20" y="50" rx="2.5" ry="2.5" width="350" height="20" />
      <rect x="20" y="90" rx="2.5" ry="2.5" width="350" height="20" />
      <rect x="20" y="130" rx="2.5" ry="2.5" width="350" height="20" />
      <rect x="20" y="170" rx="2.5" ry="2.5" width="350" height="20" />
      <rect x="20" y="210" rx="2.5" ry="2.5" width="350" height="20" />
      <rect x="20" y="250" rx="2.5" ry="2.5" width="350" height="20" />
    </ContentLoader>
  );
};

export default Loading;
