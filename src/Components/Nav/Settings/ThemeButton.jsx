import React from "react";
import Emoji from "../../Emoji";

const ThemeButton = props => {
  const { darkTheme, handleToggleTheme } = props;
  return (
    <button
      className={darkTheme ? "dark-theme-button" : "light-theme-button"}
      onClick={() => handleToggleTheme()}
    >
      {darkTheme ? (
        <Emoji symbol="☀️" label="sun" />
      ) : (
        <Emoji symbol="🌙" label="moon" />
      )}
    </button>
  );
};

export default ThemeButton;
