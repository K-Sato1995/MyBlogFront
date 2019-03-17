import React from "react";
import "../../Design/Footer/Footer.scss";
import { FormattedMessage } from "react-intl";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-container">
          <div className="footer-box1">
            <h4>
              <FormattedMessage
                id="footer.blog.title"
                defaultMessage="Default"
              />
            </h4>
            <p>
              <FormattedMessage
                id="footer.blog.description"
                defaultMessage="Default"
              />
            </p>
          </div>
          <div className="footer-box2">
            <h4>
              <FormattedMessage
                id="footer.author.name"
                defaultMessage="Default"
              />
            </h4>
            <p>
              <FormattedMessage
                id="footer.author.description"
                defaultMessage="Default"
              />
            </p>
          </div>
          <div className="footer-box3">
            <h4>
              <FormattedMessage
                id="footer.links.title"
                defaultMessage="Default"
              />
            </h4>
            <ul>
              <li>
                <a href="https://dev.to/ksato1995">
                  <FormattedMessage
                    id="footer.links.link1"
                    defaultMessage="Default"
                  />
                </a>
              </li>
              <li>
                <a href="https://github.com/K-Sato1995">
                  <FormattedMessage
                    id="footer.links.link2"
                    defaultMessage="Default"
                  />
                </a>
              </li>
              <li>
                <a href="https://github.com/K-Sato1995/MyBlog">
                  <FormattedMessage
                    id="footer.links.link3"
                    defaultMessage="Default"
                  />
                </a>
              </li>
              <li>
                <a href="https://github.com/K-Sato1995/MyBlogFront">
                  <FormattedMessage
                    id="footer.links.link4"
                    defaultMessage="Default"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-container2">
          <h5>
            This blog is powered by{" "}
            <a href="https://pages.github.com/">GitHubPages</a>,{" "}
            <a href="https://www.heroku.com/">Heroku</a> and{" "}
            <a href="https://www.flaticon.com/home">FLATICON</a>
          </h5>
        </div>
      </div>
    );
  }
}

export default Footer;
