import React from "react";

export default class LangButton extends React.Component {
  render() {
    let active;
    active =
      this.props.lang === this.props.langValue
        ? { backgroundColor: "#111", color: "#fff" }
        : {};
    return (
      <button
        onClick={() => this.props.setLocale(this.props.langValue)}
        className="lang-box"
        style={active}
      >
        {this.props.displayLang}
      </button>
    );
  }
}
