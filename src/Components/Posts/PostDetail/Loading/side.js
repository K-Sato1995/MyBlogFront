import React from "react";
import ContentLoader from "react-content-loader";

const SideLoading = () => {
  return (
    <ContentLoader height={1000} className="post-list-loader">
      <rect x="30" y="60" rx="4" ry="4" width="230" height="30" />
      <rect x="30" y="120" rx="4" ry="4" width="270" height="18" />
      <rect x="50" y="160" rx="4" ry="4" width="250" height="16" />
      <rect x="50" y="200" rx="4" ry="4" width="250" height="16" />
      <rect x="50" y="240" rx="4" ry="4" width="250" height="16" />

      <rect x="30" y="300" rx="4" ry="4" width="270" height="18" />
      <rect x="50" y="340" rx="4" ry="4" width="250" height="16" />
      <rect x="50" y="380" rx="4" ry="4" width="250" height="16" />
      <rect x="50" y="420" rx="4" ry="4" width="250" height="16" />

      <rect x="30" y="480" rx="4" ry="4" width="270" height="18" />
      <rect x="50" y="520" rx="4" ry="4" width="250" height="16" />
      <rect x="50" y="560" rx="4" ry="4" width="250" height="16" />
      <rect x="50" y="600" rx="4" ry="4" width="250" height="16" />

      <rect x="30" y="660" rx="4" ry="4" width="270" height="18" />
      <rect x="50" y="700" rx="4" ry="4" width="250" height="16" />
      <rect x="50" y="740" rx="4" ry="4" width="250" height="16" />
      <rect x="50" y="780" rx="4" ry="4" width="250" height="16" />
    </ContentLoader>
  );
};

export default SideLoading;
