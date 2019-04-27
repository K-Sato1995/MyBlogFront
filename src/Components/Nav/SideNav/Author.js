import React from "react";
import "../../../Design/Nav/Author.scss";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

class Author extends React.Component {
  render() {
    return (
      <div className="author-box">
        <Link to={`/about`}>
          <img
            alt={"PENGUIN"}
            src={require("../../Posts/images/gopher_me.png")}
            className="author-penguin"
          />
        </Link>
        <h4>
          <Link to={`/about`} className="author-box-name">
            <FormattedMessage id="author.name" defaultMessage="K-Sato" />
          </Link>
        </h4>
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
