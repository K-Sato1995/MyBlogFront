import "../../../Design/Nav/Settings.scss";
import React from "react";

const LangButton = props => {
  const { toggleLocale, lang } = props;
  return (
    <button onClick={() => toggleLocale()} className="lang-btn">
      {lang === "en" ? "日本語" : "English"}
    </button>
  );
};

export default LangButton;
