import React from "react";
import ContentLoader from "react-content-loader";

const Loading = () => {
  return (
    <ContentLoader>
      <rect x="20" y="20" rx="4" ry="4" width="300" height="15" />
      <rect x="20" y="50" rx="4" ry="4" width="300" height="15" />
      <rect x="20" y="80" rx="4" ry="4" width="300" height="15" />
      <rect x="20" y="110" rx="4" ry="4" width="300" height="15" />
    </ContentLoader>
  );
};

export default Loading;
