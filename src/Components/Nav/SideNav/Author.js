import React from "react";
import "../../../Design/Nav/Author.scss";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

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
        <p className="author-box-body">
          <FormattedMessage
            id="author.body"
            defaultMessage="I'm just a silly boy aspiring to be a competent programmer."
          />
        </p>
        {/* SNN-LINKS */}
        {/* <div className='snn-links'>
          <a href='https://dev.to/ksato1995' className='snn1-link'><p className='snn1'>DEV.to</p></a>
          <a href='https://github.com/K-Sato1995' className='snn2-link'><p className='snn2'>GitHub</p></a>
        </div> */}
      </div>
    );
  }
}

export default Author;
