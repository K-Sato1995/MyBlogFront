import React from "react";
import MainLoading from "./main";
import SideLoading from "./side";

const Loading = props => {
  return (
    <div className="post-container">
      <div className="post-left-container" style={props.showLC}>
        <SideLoading />
      </div>
      <div className="post-main-container">
        <div className="post-loading-content-container">
          <MainLoading />
        </div>
      </div>
    </div>
  );
};

export default Loading;
