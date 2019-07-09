import React from "react";
import "../../../../Design/Posts/PostDetail/PostDetail.scss";
import { FormattedMessage } from "react-intl";

class PostAuthor extends React.Component {
  render() {
    return (
      <div className="post-detail-author-box clearfix">
        <div className="post-detail-author-box-left">
          <img
            alt={"PENGUIN"}
            src={require("../../images/penguin.png")}
            className="post-author-penguin"
          />
        </div>
        <div className="post-detail-author-box-right">
          <div className="post-detail-author-box-right-description">
            <h3>
              <FormattedMessage id="postAuthor.name" defaultMessage="K-Sato" />
            </h3>
            <p>
              <FormattedMessage
                id="postAuthor.description"
                defaultMessage="I am a junior web-developer based somewhere on earth. Write Ruby as my primary lannguage and also use Javascript every now and then. RoR and React are my go-to Frameworks. Sometimes I play with Go language."
              />
            </p>
            <a
              href="https://dev.to/ksato1995"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="post-author-button">View Profile</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default PostAuthor;
