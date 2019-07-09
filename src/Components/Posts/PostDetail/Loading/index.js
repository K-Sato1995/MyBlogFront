import React from "react";
import MainLoading from "./main";
import SideLoading from "./side";

export default class Loading extends React.Component {
  render() {
    return (
      <div className="post-container">
        <div className="post-left-container" style={this.props.showLC}>
          <SideLoading />
        </div>
        <div className="post-main-container">
          <div className="post-loading-content-container">
            <MainLoading />
          </div>
        </div>
      </div>
    );
  }
}
