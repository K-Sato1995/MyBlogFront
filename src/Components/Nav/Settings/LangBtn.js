import "../../../Design/Nav/Settings.scss";
import React from "react";

export default class LangButton extends React.Component {
  render() {
    const btn =
      this.props.lang === "en" ? (
        <button onClick={() => this.props.toggleLocale()} className="lang-btn">
          日本語
        </button>
      ) : (
        <button onClick={() => this.props.toggleLocale()} className="lang-btn">
          English
        </button>
      );
    return <div>{btn}</div>;
  }
}
