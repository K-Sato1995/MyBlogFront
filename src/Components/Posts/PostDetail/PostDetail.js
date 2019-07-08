import React from "react";
import "../../../Design/Posts/PostDetail/PostDetail.scss";
import "../../../Design/Highlight.scss";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";
import PostAuthor from "./PostAuthor";
import LikeBox from "./LikeBox";
import breaks from "remark-breaks";
import Toc from "./SideNav/Toc";
import MainLoading from "./Loading/main";
import SideLoading from "./Loading/side";
import Footer from "../../Footer";
import { HeadingRenderer, formatDate } from "./Renderers";
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
    const showLeftContainer = this.props.showLeftContainer
      ? {
          display: "block"
        }
      : {
          display: "none"
        };
    const main =
      loading === true ? (
        <div className="post-container">
          <div className="post-left-container" style={showLeftContainer}>
            <SideLoading />
          </div>
          <div className="post-main-container">
            <div className="post-loading-content-container">
              <MainLoading />
            </div>
          </div>
        </div>
      ) : (
        <div className="post-container">
          <div className="wrapper" style={showLeftContainer} />
          <div className="post-left-container" style={showLeftContainer}>
            <Toc content={data.post.content} postId={data.post.id} />
          </div>
          {/* <LikeBox
            addLike={addLike}
            like={data.post.like}
            pageId={data.post.id}
          /> */}
          <div className="post-main-container">
            <div className="post-content-container">
              <div className="post-detail-title">
                <h1 className="title">{data.post.title}</h1>
                <p className="post-created-date">
                  {formatDate(data.post.created_at)}
                </p>
              </div>
              <ReactMarkdown
                source={data.post.content}
                renderers={{
                  code: CodeBlock,
                  heading: HeadingRenderer
                }}
                plugins={[breaks]}
                className="post-content"
              />
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
