import React from "react";
import LangBtn from "./LangBtn";
import ThemeButton from "./ThemeButton";
import "../../../Design/Nav/Settings.scss";

export default class Settings extends React.Component {
  render() {
    return (
      <div className="settings-box">
        <LangBtn
          toggleLocale={this.props.toggleLocale}
          lang={this.props.lang}
        />
        <ThemeButton
          handleToggleTheme={this.props.handleToggleTheme}
          darkTheme={this.props.darkTheme}
        />
      </div>
    );
  }
}
