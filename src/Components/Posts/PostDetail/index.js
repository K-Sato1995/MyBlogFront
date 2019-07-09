import React from "react";
import "../../../Design/Posts/PostDetail/PostDetail.scss";
import "../../../Design/Highlight.scss";
import MarkDown from "./MarkDown";
import PostAuthor from "./PostAuthor";
import Toc from "./SideNav/Toc";
import Loading from "./Loading";
import Footer from "../../Footer";
import { formatDate } from "./Renderers";
import { getPost } from "../Api";

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
          <div className="post-left-container" style={showLC}>
            <Toc content={data.post.content} postId={data.post.id} />
          </div>
          <div className="post-main-container">
            <div className="post-content-container">
              <div className="post-detail-title">
                <h1 className="title">{data.post.title}</h1>
                <p className="post-created-date">
                  {formatDate(data.post.created_at)}
                </p>
              </div>
              <MarkDown content={data.post.content} />
              <span className="page-views">
                {data.post.page_views} Page Views
              </span>
              <PostAuthor />
              <Footer />
            </div>
          </div>
        </div>
      );
    return <React.Fragment>{main}</React.Fragment>;
  }
}

export default PostDetail;
