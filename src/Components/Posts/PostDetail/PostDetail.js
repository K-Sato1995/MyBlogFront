import React from "react";
import "../../../Design/Posts/PostDetail/PostDetail.scss";
import "../../../Design/Highlight.scss";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";
import PostAuthor from "./PostAuthor";
import LikeBox from "./LikeBox";
import breaks from "remark-breaks";
import Toc from "./SideNav/Toc";
import ContentLoader from "react-content-loader";
import Footer from "../../Footer";

const api = {
  baseUrl: "http://localhost:3000/"
};

function flatten(text, child) {
  return typeof child === "string"
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text);
}

function HeadingRenderer(props) {
  var children = React.Children.toArray(props.children);
  var text = children.reduce(flatten, "");
  var slug = text.toLowerCase().replace(/[!?\s]/g, "-");
  return React.createElement(
    "h" + props.level,
    { id: slug, class: "anchor" },
    props.children
  );
}

class PostDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
      loading: true
    };
    this.addLike = this.addLike.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.getPosts();
  }
  formatDate(date) {
    const dateObject = new Date(date);
    const month = dateObject.getMonth() + 1;
    const day = dateObject.getDate();
    const year = dateObject.getFullYear();
    return `${year}/${month}/${day}`;
  }
  getPosts = () => {
    console.log(this.props.match.params);
    const id = this.props.match.params.id;
    fetch(`${api.baseUrl}api/v1/posts/${id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data.data,
          loading: false
        });
      });
  };

  addLike = () => {
    const id = this.state.data.post.id;
    fetch(`${api.baseUrl}en/api/v1/posts/${id}/like`, {
      method: "PUT"
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data.data
        });
      });
  };
  render() {
    const showLeftContainer = this.props.showLeftContainer
      ? {
          display: "block"
        }
      : {
          display: "none"
        };
    const main =
      this.state.loading === true ? (
        <div className="post-container">
          <div className="post-left-container" style={showLeftContainer}>
            <ContentLoader height={1000} className="post-list-loader">
              <rect x="30" y="60" rx="4" ry="4" width="230" height="30" />
              <rect x="30" y="120" rx="4" ry="4" width="270" height="18" />
              <rect x="50" y="160" rx="4" ry="4" width="250" height="16" />
              <rect x="50" y="200" rx="4" ry="4" width="250" height="16" />
              <rect x="50" y="240" rx="4" ry="4" width="250" height="16" />

              <rect x="30" y="300" rx="4" ry="4" width="270" height="18" />
              <rect x="50" y="340" rx="4" ry="4" width="250" height="16" />
              <rect x="50" y="380" rx="4" ry="4" width="250" height="16" />
              <rect x="50" y="420" rx="4" ry="4" width="250" height="16" />

              <rect x="30" y="480" rx="4" ry="4" width="270" height="18" />
              <rect x="50" y="520" rx="4" ry="4" width="250" height="16" />
              <rect x="50" y="560" rx="4" ry="4" width="250" height="16" />
              <rect x="50" y="600" rx="4" ry="4" width="250" height="16" />

              <rect x="30" y="660" rx="4" ry="4" width="270" height="18" />
              <rect x="50" y="700" rx="4" ry="4" width="250" height="16" />
              <rect x="50" y="740" rx="4" ry="4" width="250" height="16" />
              <rect x="50" y="780" rx="4" ry="4" width="250" height="16" />
            </ContentLoader>
          </div>
          <div className="post-main-container">
            <div className="post-loading-content-container">
              <ContentLoader height={400}>
                <rect x="20" y="5" rx="4" ry="4" width="250" height="25" />
                <rect x="20" y="40" rx="4" ry="4" width="100" height="10" />

                <rect x="20" y="70" rx="4" ry="4" width="200" height="15" />
                <rect x="20" y="100" rx="4" ry="4" width="350" height="8" />
                <rect x="20" y="120" rx="4" ry="4" width="330" height="8" />
                <rect x="20" y="140" rx="4" ry="4" width="350" height="8" />

                <rect x="20" y="170" rx="4" ry="4" width="300" height="100" />

                <rect x="20" y="290" rx="4" ry="4" width="200" height="15" />
                <rect x="20" y="320" rx="4" ry="4" width="350" height="8" />
                <rect x="20" y="340" rx="4" ry="4" width="330" height="8" />
                <rect x="20" y="360" rx="4" ry="4" width="350" height="8" />
              </ContentLoader>
            </div>
          </div>
        </div>
      ) : (
        <div className="post-container">
          <div className="wrapper" style={showLeftContainer} />
          <div className="post-left-container" style={showLeftContainer}>
            {/* <Toc
              content={this.state.data.post.content}
              postId={this.state.data.post.id}
            /> */}
          </div>
          {/* <LikeBox
            addLike={this.addLike}
            like={this.state.data.post.like}
            pageId={id}
          /> */}

          <div className="post-main-container">
            <div className="post-content-container">
              <div className="post-detail-title">
                <h1 className="title">{this.state.data.post.title}</h1>
                <p className="post-created-date">
                  {this.formatDate(this.state.data.post.created_at)}
                </p>
              </div>
              <ReactMarkdown
                source={this.state.data.post.content}
                renderers={{
                  code: CodeBlock,
                  heading: HeadingRenderer
                }}
                plugins={[breaks]}
                className="post-content"
              />
              <span className="page-views">
                {this.state.data.post.page_views} Page Views
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
