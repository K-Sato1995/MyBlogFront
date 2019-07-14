import React from "react";

export default class Input extends React.Component {
  render() {
    return (
      <div className="form-group">
        <div className="row">
          <button
            className="comment-button"
            onClick={() => {
              this.props.handleClick();
            }}
          >
            Submit your comment
          </button>
        </div>
      </div>
    );
  }
}
