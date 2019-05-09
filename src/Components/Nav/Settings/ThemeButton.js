import React from "react";
import Emoji from "../../Emoji";

export default class ThemeButton extends React.Component {
  render() {
    const themeButton = this.props.darkTheme ? (
      <button
        className="light-theme-button"
        onClick={() => this.props.handleToggleTheme()}
      >
        <Emoji symbol="☀️" label="sun" />
      </button>
    ) : (
      <button
        className="dark-theme-button"
        onClick={() => this.props.handleToggleTheme()}
      >
        <Emoji symbol="🌙" label="moon" />
      </button>
    );
    return themeButton;
  }
}
