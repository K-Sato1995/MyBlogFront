import React from "react";
import LangBtn from "./LangBtn";
import ThemeButton from "./ThemeButton";
import "../../../Design/Nav/Settings.scss";

export default class Settings extends React.Component {
  render() {
    const { toggleLocale, lang, handleToggleTheme, darkTheme } = this.props;
    return (
      <div className="settings-box">
        <LangBtn toggleLocale={toggleLocale} lang={lang} />
        <ThemeButton
          handleToggleTheme={handleToggleTheme}
          darkTheme={darkTheme}
        />
      </div>
    );
  }
}
