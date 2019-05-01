import React from "react";
import ContentHeader from "./ContentHeader";
import { FormattedMessage } from "react-intl";

export default class About extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <ContentHeader
          headerTitle="About Me"
          headerDescription="Here is a short introduction of myself."
        />
        <div className="about-content">
          <h3 className="about-header">Self Introduction</h3>
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
