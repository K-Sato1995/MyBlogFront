import React from "react";
import "../../Design/Posts/Penguin.scss";

class Penguin extends React.Component {
  constructor() {
    super();
    this.state = {
      width: 300,
      height: 300,
      numOfPenguin: 1
    };
  }
  render() {
    const penguin = {
      width: `${this.state.width}px`,
      height: `${this.state.height}px`
    };
    return (
      <div>
        <img
          alt={"PENGUIN"}
          src={require("./images/penguin.png")}
          style={penguin}
          className="penguin"
        />
      </div>
    );
  }
}

export default Penguin;
