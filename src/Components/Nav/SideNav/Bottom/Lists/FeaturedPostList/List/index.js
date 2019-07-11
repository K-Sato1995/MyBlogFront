import React from "react";
import Loading from "../../../Loading";
import Item from "./Item";

export default class FeaturedPostList extends React.Component {
  render() {
    const { posts, loading } = this.props;
    const postList = posts.slice(0, 4).map((post, index) => (
      <li className="list-item">
        <Item key={index} title={post.title} slug={post.slug} />
      </li>
    ));
    if (this.props.loading) {
      return <Loading />;
    } else {
      return postList;
    }
  }
}
