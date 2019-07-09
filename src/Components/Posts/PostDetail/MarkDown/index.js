import React from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";
import breaks from "remark-breaks";
import { HeadingRenderer } from "../../../../MiddleWares/Renderers/MarkDown";

export default class MarkDown extends React.Component {
  render() {
    return (
      <ReactMarkdown
        source={this.props.content}
        renderers={{
          code: CodeBlock,
          heading: HeadingRenderer
        }}
        plugins={[breaks]}
        className="post-content"
      />
    );
  }
}
