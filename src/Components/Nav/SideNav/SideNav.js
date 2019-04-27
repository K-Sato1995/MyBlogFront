import React from "react";
import "../../../Design/Nav/SideNav.scss";
import LangButton from "../langButton";

export default class SideNav extends React.Component {
  render() {
    return (
      <div className="SideNavbar">
        <div className="content">
          <LangButton
            setLocale={this.props.setLocale}
            lang={this.props.lang}
            langValue="en"
            displayLang="EN"
          />
          <LangButton
            setLocale={this.props.setLocale}
            lang={this.props.lang}
            langValue="ja"
            displayLang="JA"
          />
        </div>
      </div>
    );
  }
}
