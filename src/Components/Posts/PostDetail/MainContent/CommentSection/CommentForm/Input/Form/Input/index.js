import React from "react";

export default class Input extends React.Component {
  render() {
    const { value, handleChange, name } = this.props;
    return (
      <div class="form-group">
        <div class="row">
          <input
            className="form-control"
            type="text"
            name={name}
            value={value}
            onChange={handleChange}
            placeholder={name}
            id={name}
          />
        </div>
      </div>
    );
  }
}
