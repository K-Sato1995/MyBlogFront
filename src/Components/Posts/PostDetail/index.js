import React from "react";
import "../../../Design/Posts/PostDetail/PostDetail.scss";
import "../../../Design/Highlight.scss";
import Loading from "./Loading";
import MainContent from "./MainContent";
import SideNav from "./SideNav";
import { getPost } from "../../../MiddleWares/Api";

class PostDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
      loading: true
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.setData();
  }
  setData() {
    const slug = this.props.match.params.id;
    getPost(slug).then(data =>
      this.setState({
        data: data.data,
        loading: false
      })
    );
  }

  render() {
    const { data, loading } = this.state;
    const showLC = this.props.showLC
      ? { display: "block" }
      : { display: "none" };
    const main =
      loading === true ? (
        <Loading showLC={showLC} />
      ) : (
        <div className="post-container">
          <div className="wrapper" style={showLC} />
          <SideNav
            content={data.post.content}
            like={data.post.like}
            slug={data.post.slug}
            showLC={showLC}
          />
          <MainContent
            title={data.post.title}
            content={data.post.content}
            created_at={data.post.created_at}
            comments={data.comments}
            slug={data.post.slug}
            page_views={data.post.page_views}
          />
        </div>
      );
    return <React.Fragment>{main}</React.Fragment>;
  }
}

export default PostDetail;
