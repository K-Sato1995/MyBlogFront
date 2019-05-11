import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../../../../Design/Posts/PostDetail/Toc.scss";
import { FormattedMessage } from "react-intl";

export default class Toc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: false
    };
  }
  stringReplacer(string, regex, mark) {
    return string.replace(regex, mark);
  }
  createLink(string) {
    var shapedString = string
      .toLowerCase()
      .replace(/#+\s/, "#")
      .trimRight();
    var strArr = shapedString.split(" ");
    var anchor = strArr.join("-");
    return this.stringReplacer(anchor, /[?!]/g, "-");
  }
  returnTitle(string) {
    const link = this.createLink(string);
    const postPath = `/Post/${this.props.postId}`;
    return (
      <Link to={`${postPath}${link}`} className="toc-title">
        {`${this.stringReplacer(string, /#+/g, "")}`}
      </Link>
    );
  }
  createAnchorLink(string) {
    if (/^#{1}\s[\s\S]/.test(string)) {
      return <li className="header1">{this.returnTitle(string)}</li>;
    } else if (/^#{2}\s[\s\S]/.test(string) && this.state.filter === false) {
      return <li className="header2">{this.returnTitle(string)}</li>;
    } else if (/^#{3}\s[\s\S]/.test(string) && this.state.filter === false) {
      return <li className="header3">{this.returnTitle(string)}</li>;
    } else {
      return "";
    }
  }
  tocFilter() {
    this.setState({ filter: !this.state.filter });
  }
  render() {
    const regex = /#+\s[\u30a0-\u30ff\u3040-\u309f\u3005-\u3006\u30e0-\u9fcf\w\s!?()]+\n/g;
    const codeRegex = /```*([\s\S]+?)```/g;
    const content = this.stringReplacer(this.props.content, codeRegex, " ");
    let headers;
    if (typeof content === "string") {
      headers = content.match(regex);
    }
    const toc = headers.map(header => <li>{this.createAnchorLink(header)}</li>);
    const icon = this.state.filter ? (
      <span className="glyphicon glyphicon-chevron-right" />
    ) : (
      <span className="glyphicon glyphicon-chevron-down" />
    );
    return (
      <div className="toc">
        <h3 className="toc-list-title">
          <FormattedMessage id="toc" defaultMessage="CONTENTS" />
          <button className="arrow-icon" onClick={() => this.tocFilter()}>
            {icon}
          </button>
        </h3>
        <ul className="toc-list">{toc}</ul>
      </div>
    );
  }
}
