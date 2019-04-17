import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../../../Design/Posts/PostDetail/Toc.scss";

export default class Toc extends React.Component {
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
  createTitle(string) {
    return this.stringReplacer(string, /#+/g, "");
  }
  createAnchorLink(string) {
    const postPath = `/Post/${this.props.postId}`;
    const title = this.createTitle(string);
    const link = this.createLink(string);

    if (/^#{1}\s\w/.test(string)) {
      return (
        <li className="header1">
          <Link to={`${postPath}${link}`}>{title}</Link>
        </li>
      );
    } else if (/^#{2}\s\w/.test(string)) {
      return (
        <li className="header2">
          <Link to={`${postPath}${link}`}>{title}</Link>
        </li>
      );
    } else if (/^#{3}\s\w/.test(string)) {
      return (
        <li className="header3">
          <Link to={`${postPath}${link}`}>{title}</Link>
        </li>
      );
    } else {
      return (
        <li>
          <Link to={`${postPath}${link}`}>{string}</Link>
        </li>
      );
    }
  }
  render() {
    const regex = /#+\s[\w\s?!]+\n/g;
    const content = this.props.content;
    let headers;
    if (typeof content === "string") {
      headers = content.match(regex);
    }
    const toc = headers.map(header => <li>{this.createAnchorLink(header)}</li>);
    return (
      <div className="toc">
        <ul className="toc-list">{toc}</ul>
      </div>
    );
  }
}
