import React from "react";

export default class Label extends React.Component {
  render() {
    return (
      <div className="nav-label">
        <a className="label-link" href="https://pages.github.com/">
          Powered By <span>GithubPages</span>
        </a>
      </div>
    );
  }
}
