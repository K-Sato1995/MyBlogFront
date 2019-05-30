import React from "react";
import "../../../Design/Posts/PostList/NoMatch.scss";
import { FormattedMessage } from "react-intl";

class NoMatch extends React.Component {
  render() {
    return (
      <div className="no-match-box">
        <img alt={"IMG"} src={require("../images/404.svg")} className="image" />
        <h1>
          <FormattedMessage id="noMatch.title" defaultMessage="404 NOT FOUND" />
        </h1>

        <h3>
          {" "}
          <FormattedMessage
            id="noMatch.description"
            defaultMessage="Seems like the page you are looking for does not exist."
          />
        </h3>
      </div>
    );
  }
}

export default NoMatch;
