import React from "react";
import "../../../Design/Posts/PostList/ContentHeader.scss";

export default class ContentHeader extends React.Component {
  render() {
    return (
      <div className="content-header">
        <h3 className="content-header-title">{this.props.headerTitle}</h3>
        <p className="content-header-description">
          {this.props.headerDescription}
        </p>
      </div>
    );
  }
}
