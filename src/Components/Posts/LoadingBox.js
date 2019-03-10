import React from "react";
import "../../Design/LoadingBox.scss";
import { Link } from "react-router-dom";

class LoadingBox extends React.Component {
  render() {
    return (
      <div className="loading-box">
        <Link to={`/about`}>
          <img
            alt={"PENGUIN"}
            src={require("./images/penguin.png")}
            className="penguin"
          />
        </Link>
        <h3>
          Hi! Sorry! It might take a while to boost up the backend-server.
        </h3>
        <h3>Meanwhile, let me introduce myself:)</h3>
        <div className="self-introduction">
          <p>
            People often find me outgoing, upbeat, self-motivated and silly. I
            grew up in a very small and peaceful town and moved to a huge city
            for college.
          </p>
          <p>
            In college, I majored in political economy and mainly spent my time
            there studying international political economy and public economics.
            I also started coding when I was a senior and have been studying
            programming since then.
          </p>
          <p>
            Though what I learnt in college was academically very interesting, I
            didn't necessarily consider myself suitable for a politician or
            economist. I also was not interested in sales or marketing which a
            lot of my friends in the same department ended up doing after
            college. So I ended up getting a job as a webdeveloper since I
            really liked coding and I was really fascinated with the idea of
            createing something unique and original that didn't exist before.
          </p>
          <p>
            <div>
              Icons made by{" "}
              <a href="https://www.freepik.com/" title="Freepik">
                Freepik
              </a>{" "}
              from{" "}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>{" "}
              is licensed by{" "}
              <a
                href="http://creativecommons.org/licenses/by/3.0/"
                title="Creative Commons BY 3.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                CC 3.0 BY
              </a>
            </div>
          </p>
        </div>
      </div>
    );
  }
}

export default LoadingBox;
