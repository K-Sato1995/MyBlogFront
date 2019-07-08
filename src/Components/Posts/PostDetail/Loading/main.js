import React from "react";
import ContentLoader from "react-content-loader";

const MainLoading = () => {
  return (
    <ContentLoader height={400}>
      <rect x="20" y="5" rx="4" ry="4" width="250" height="25" />
      <rect x="20" y="40" rx="4" ry="4" width="100" height="10" />

      <rect x="20" y="70" rx="4" ry="4" width="200" height="15" />
      <rect x="20" y="100" rx="4" ry="4" width="350" height="8" />
      <rect x="20" y="120" rx="4" ry="4" width="330" height="8" />
      <rect x="20" y="140" rx="4" ry="4" width="350" height="8" />

      <rect x="20" y="170" rx="4" ry="4" width="300" height="100" />

      <rect x="20" y="290" rx="4" ry="4" width="200" height="15" />
      <rect x="20" y="320" rx="4" ry="4" width="350" height="8" />
      <rect x="20" y="340" rx="4" ry="4" width="330" height="8" />
      <rect x="20" y="360" rx="4" ry="4" width="350" height="8" />
    </ContentLoader>
  );
};

export default MainLoading;
