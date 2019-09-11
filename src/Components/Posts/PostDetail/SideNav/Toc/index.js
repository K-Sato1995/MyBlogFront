import React from "react";
import "../../../../../Design/Posts/PostDetail/Toc.scss";
import { FormattedMessage } from "react-intl";
import { ChevronRight } from "react-feather";
import { ChevronDown } from "react-feather";
import {
  stringReplacer,
  returnTitle
} from "../../../../../middlewares/Renderers/Toc";

export default class Toc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: false
    };
  }

  createAnchorLink(string) {
    const { filter } = this.state;
    const postPath = `/${this.props.slug}`;

    if (/^#{1}\s[\s\S]/.test(string)) {
      return <li className="header1">{returnTitle(string, postPath)}</li>;
    } else if (/^#{2}\s[\s\S]/.test(string) && filter === false) {
      return <li className="header2">{returnTitle(string, postPath)}</li>;
    } else if (/^#{3}\s[\s\S]/.test(string) && filter === false) {
      return <li className="header3">{returnTitle(string, postPath)}</li>;
    } else {
      return "";
    }
  }
  tocFilter() {
    this.setState({ filter: !this.state.filter });
  }
  render() {
    const { filter } = this.state;
    const regex = /#+\s[\u30a0-\u30ff\u3040-\u309f\u3005-\u3006\u30e0-\u9fcf\w\s!?()//]+\n/g;
    const codeRegex = /```*([\s\S]+?)```/g;
    const content = stringReplacer(this.props.content, codeRegex, " ");
    let headers;
    if (typeof content === "string") {
      headers = content.match(regex);
    }
    const toc =
      headers === null
        ? ""
        : headers.map((header, i) => (
            <span key={i}>{this.createAnchorLink(header)}</span>
          ));
    const icon = filter ? <ChevronRight /> : <ChevronDown />;
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
