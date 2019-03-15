import React from "react";

export default class LangButton extends React.Component {
  render() {
    return (
      <button onClick={() => this.props.setLocale(this.props.lang)}>
        {this.props.lang}
      </button>
    );
  }
}
