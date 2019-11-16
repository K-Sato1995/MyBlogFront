import React from "react";
import Loading from "../../../Loading";
import Item from "./Item";

export default class TagList extends React.Component {
  render() {
    const { tags, loading, updateTag, setCurrentPage } = this.props;
    const tagList = tags.map((tag, index) => (
      <li className="list-item">
        <Item
          activeTag={tag}
          key={index}
          value={tag.id}
          name={tag.name}
          updateTag={updateTag}
          setCurrentPage={setCurrentPage}
        />
      </li>
    ));
    if (loading) {
      return <Loading />;
    } else {
      return tagList;
    }
  }
}
