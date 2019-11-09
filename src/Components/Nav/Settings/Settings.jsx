import React from "react";
import LangBtn from "./LangBtn";
import ThemeButton from "./ThemeButton";
import "../../../Design/Nav/Settings.scss";

const Settings = props => {
  const { toggleLocale, lang, handleToggleTheme, darkTheme } = props;
  return (
    <div className="settings-box">
      <LangBtn toggleLocale={toggleLocale} lang={lang} />
      <ThemeButton
        handleToggleTheme={handleToggleTheme}
        darkTheme={darkTheme}
      />
    </div>
  );
};

export default Settings;
