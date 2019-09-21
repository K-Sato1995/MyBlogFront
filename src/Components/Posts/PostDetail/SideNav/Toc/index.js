import React from "react";
import "../../../../../Design/Posts/PostDetail/Toc.scss";
import { FormattedMessage } from "react-intl";
import AutoToc from "react-auto-toc";

export default class Toc extends React.Component {
  render() {
    return (
      <div className="toc">
        <h3 className="toc-list-title">
          <FormattedMessage id="toc" defaultMessage="CONTENTS" />
        </h3>
        <AutoToc markdownText={this.props.content} limit={34} />
      </div>
    );
  }
}
