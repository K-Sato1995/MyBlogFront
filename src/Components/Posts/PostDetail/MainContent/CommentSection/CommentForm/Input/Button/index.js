import React from "react";

export default class Input extends React.Component {
  render() {
    return (
      <div class="form-group">
        <div class="row">
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
