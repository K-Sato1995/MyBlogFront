import React from "react";
import "../../Design/Footer/Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <p>
          The design of this blog is influenced by{" "}
          <a href="https://docs.gitbook.com/">GitBook</a>
        </p>
      </div>
    );
  }
}

export default Footer;
