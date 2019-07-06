import React from "react";
import Emoji from "../../Emoji";

export default class ThemeButton extends React.Component {
  render() {
    const { darkTheme, handleToggleTheme } = this.props;
    const themeButton = darkTheme ? (
      <button
        className="light-theme-button"
        onClick={() => handleToggleTheme()}
      >
        <Emoji symbol="☀️" label="sun" />
      </button>
    ) : (
      <button className="dark-theme-button" onClick={() => handleToggleTheme()}>
        <Emoji symbol="🌙" label="moon" />
      </button>
    );
    return themeButton;
  }
}
