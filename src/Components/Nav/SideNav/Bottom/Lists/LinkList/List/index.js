import React from "react";
import { FormattedMessage } from "react-intl";

const LinkList = () => {
  return (
    <React.Fragment>
      <li className="list-item">
        <a href="https://dev.to/ksato1995" className="list-item-ele">
          <FormattedMessage id="sideNav.links.link1" defaultMessage="Default" />
        </a>
      </li>
      <li className="list-item">
        <a href="https://github.com/K-Sato1995" className="list-item-ele">
          <FormattedMessage id="sideNav.links.link2" defaultMessage="Default" />
        </a>
      </li>
      <li className="list-item">
        <a
          href="https://github.com/K-Sato1995/MyBlog"
          className="list-item-ele"
        >
          <FormattedMessage id="sideNav.links.link3" defaultMessage="Default" />
        </a>
      </li>
      <li className="list-item">
        <a
          href="https://github.com/K-Sato1995/MyBlogFront"
          className="list-item-ele"
        >
          <FormattedMessage id="sideNav.links.link4" defaultMessage="Default" />
        </a>
      </li>
    </React.Fragment>
  );
};

export default LinkList;
