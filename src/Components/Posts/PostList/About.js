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
          headerTitle=<FormattedMessage
            id="contentHeader.aboutTitle"
            defaultMessage="About Me"
          />
          headerDescription=<FormattedMessage
            id="contentHeader.aboutDescription"
            defaultMessage="Here is a short introduction of myself."
          />
        />
        <div className="about-content">
          <h3 className="about-header">
            <FormattedMessage
              id="about.header"
              defaultMessage="Self Introduction"
            />
          </h3>
          <p>
            <FormattedMessage
              id="about.paragraphOne"
              defaultMessage="Default"
            />
          </p>
          <p>
            <FormattedMessage
              id="about.paragraphTwo"
              defaultMessage="Default"
            />
          </p>
          <p>
            <FormattedMessage
              id="about.paragraphThree"
              defaultMessage="Default"
            />
          </p>
        </div>
      </div>
    );
  }
}
