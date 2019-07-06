import React from "react";
import "../../../Design/Posts/PostList/ContentHeader.scss";

export default class ContentHeader extends React.Component {
  render() {
    const { headerTitle, headerDescription } = this.props;
    return (
      <div className="content-header">
        <h3 className="content-header-title">{headerTitle}</h3>
        <p className="content-header-description">{headerDescription}</p>
      </div>
    );
  }
}
