import React from "react";
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  LineShareButton,
  LineIcon
} from "react-share";

class LikeBox extends React.Component {
  render() {
    const pageUrl = `https://k-sato1995.github.io/MyBlogFront/#/Post/${
      this.props.pageId
    }`;
    const comment = "Check out K-Sato's post";

    return (
      <div className="like-box">
        <button className="like-button" onClick={() => this.props.addLike()}>
          <span className="glyphicon glyphicon-thumbs-up" />
        </button>
        <p className="like-number">{this.props.like}</p>
        <TwitterShareButton title={comment} url={pageUrl} className="snn-link">
          <TwitterIcon size={43} round={true} />
        </TwitterShareButton>

        <FacebookShareButton title={comment} url={pageUrl} className="snn-link">
          <FacebookIcon size={43} round={true} />
        </FacebookShareButton>

        <LineShareButton title={comment} url={pageUrl} className="snn-link">
          <LineIcon size={43} round={true} />
        </LineShareButton>
      </div>
    );
  }
}

export default LikeBox;