import React from "react";

class WorkBox extends React.Component {
  render() {
    return (
      <div className="work-box">
        <h5>
          <a href={this.props.href} target="_blank" rel="noopener noreferrer">
            {this.props.title}
          </a>
        </h5>
        <p>{this.props.description}</p>
        <div className={this.props.language} />
        <span className="work-box-languag-name">{this.props.language}</span>
      </div>
    );
  }
}

export default WorkBox;
