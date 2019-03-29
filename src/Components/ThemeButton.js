import React from "react";

export default class ThemeButton extends React.Component {
  render() {
    return (
      <button
        className="theme-button"
        onClick={() => this.props.handleToggleTheme()}
      >
        Theme
      </button>
    );
  }
}
