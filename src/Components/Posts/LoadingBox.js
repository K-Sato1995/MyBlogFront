import React from "react";
import "../../Design/LoadingBox.scss";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

class LoadingBox extends React.Component {
  render() {
    return (
      <div className="loading-box">
        <Link to={`/about`}>
          <img
            alt={"PENGUIN"}
            src={require("./images/penguin.png")}
            className="penguin"
          />
        </Link>
        <h3>
          <FormattedMessage
            id="loadingBox.title"
            defaultMessage="Hi! It might take a while to boost up the backend-server."
          />
        </h3>
        <h3>
          <FormattedMessage
            id="loadingBox.subtitle"
            defaultMessage="Meanwhile, let me introduce myself:)"
          />
        </h3>
        <div className="self-introduction">
          <p>
            <FormattedMessage
              id="loadingBox.paragraphOne"
              defaultMessage="Default"
            />
          </p>
          <p>
            <FormattedMessage
              id="loadingBox.paragraphTwo"
              defaultMessage="Default"
            />
          </p>
          <p>
            <FormattedMessage
              id="loadingBox.paragraphThree"
              defaultMessage="Default"
            />
          </p>
        </div>
      </div>
    );
  }
}

export default LoadingBox;
