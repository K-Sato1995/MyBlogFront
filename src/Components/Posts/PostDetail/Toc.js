import React from "react";
import { HashLink as Link } from "react-router-hash-link";
export default class Toc extends React.Component {
  stringReplacer(string, regex, mark) {
    return string.replace(regex, mark);
  }
  createLink(string) {
    var shapedString = string
      .toLowerCase()
      .replace(/#\s/, "#")
      .trimRight();
    var strArr = shapedString.split(" ");
    var anchor = strArr.join("-");
    return this.stringReplacer(anchor, /[?!]/g, "-");
  }
  createTitle(string) {
    return this.stringReplacer(string, /#\s/g, "");
  }
  createAnchorLink(string) {
    const postPath = `/Post/${this.props.postId}`;
    const title = this.createTitle(string);
    const link = this.createLink(string);
    return <Link to={`${postPath}${link}`}>{title}</Link>;
  }
  render() {
    const regex = /#{1}\s[\w\s?!]+\n/g;
    const content = this.props.content;
    let headers;
    if (typeof content === "string") {
      headers = content.match(regex);
    }
    const toc = headers.map(header => (
      <div>{this.createAnchorLink(header)}</div>
    ));
    return <div>{toc}</div>;
  }
}
