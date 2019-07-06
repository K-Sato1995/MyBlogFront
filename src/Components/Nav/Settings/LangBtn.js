import "../../../Design/Nav/Settings.scss";
import React from "react";

export default class LangButton extends React.Component {
  render() {
    const { toggleLocale, lang } = this.props;
    const btn =
      lang === "en" ? (
        <button onClick={() => toggleLocale()} className="lang-btn">
          日本語
        </button>
      ) : (
        <button onClick={() => toggleLocale()} className="lang-btn">
          English
        </button>
      );
    return <div>{btn}</div>;
  }
}
