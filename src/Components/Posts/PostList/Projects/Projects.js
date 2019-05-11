import React from "react";
import ContentHeader from "../ContentHeader";
import { FormattedMessage } from "react-intl";
import TabWork from "./Panel/TabWork";
import "../../../../Design/Posts/Projects.scss";

export default class projects extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <ContentHeader
          headerTitle=<FormattedMessage
            id="contentHeader.projectsTitle"
            defaultMessage="Projects"
          />
          headerDescription=<FormattedMessage
            id="contentHeader.projectsDescription"
            defaultMessage="Here are some of my personal projects on GitHub."
          />
        />
        <div className="projects-content">
          <TabWork />
        </div>
      </div>
    );
  }
}
