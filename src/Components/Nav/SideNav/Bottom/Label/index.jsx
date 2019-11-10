import React from "react";
import { FormattedMessage } from "react-intl";

const Label = () => {
  return (
    <div className="nav-label">
      <a className="label-link" href="https://pages.github.com/">
        <FormattedMessage id="navLabel1" defaultMessage="Powered By" />
        <span className="emphasied-label">
          {" "}
          <FormattedMessage id="navLabel2" defaultMessage="GithubPages" />
        </span>
      </a>
    </div>
  );
};

export default Label;
