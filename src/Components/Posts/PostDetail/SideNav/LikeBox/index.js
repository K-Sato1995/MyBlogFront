import React from "react";
import { addLike } from "../../../../../middlewares/Api";

export default class LikeBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      like: this.props.like
    };
  }
  setLike(slug) {
    addLike(slug);
    this.setState({ like: this.state.like + 1 });
  }
  render() {
    const { slug } = this.props;
    return (
      <div className="like-box">
        <button className="like-button" onClick={() => this.setLike(slug)}>
          <span className="glyphicon glyphicon-thumbs-up" />
          <span className="like-number">{this.state.like}</span>
        </button>
      </div>
    );
  }
}
