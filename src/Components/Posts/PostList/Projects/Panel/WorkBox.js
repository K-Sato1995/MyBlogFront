import React from "react";

class WorkBox extends React.Component {
  render() {
    const { href, title, description, language } = this.props;
    return (
      <div className="work-box">
        <h5>
          <a href={href} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h5>
        <p>{description}</p>
        <div className={language} />
        <span className="work-box-languag-name">{language}</span>
      </div>
    );
  }
}

export default WorkBox;
