import React from "react";
import "../../../Design/Nav/Author.scss";
import { FormattedMessage } from "react-intl";
import Emoji from "../../Emoji";

class Author extends React.Component {
  render() {
    return (
      <div className="author-box">
        <a
          href="https://dev.to/ksato1995"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt={"PENGUIN"}
            src={require("../../Posts/images/gopher_me.png")}
            className="author-penguin"
          />
        </a>
        <span>
          <a
            href="https://dev.to/ksato1995"
            target="_blank"
            rel="noopener noreferrer"
            className="author-box-name"
          >
            <FormattedMessage id="author.name" defaultMessage="K-Sato" />
          </a>
        </span>
        <span className="author-tag" id="dog">
          Dog Lover <Emoji symbol="🐶" label="dog" />
        </span>
        <p className="author-box-body">
          <FormattedMessage
            id="author.body"
            defaultMessage="I'm just a silly boy aspiring to be a competent programmer."
          />
        </p>
      </div>
    );
  }
}

export default Author;
