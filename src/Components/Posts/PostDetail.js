import React from 'react';
import '../../Design/Post.scss';
import '../../Design/Highlight.scss';
import { css } from '@emotion/core';
import { RingLoader } from 'react-spinners';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';

class PostDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
      loading: true
    }
  }
  componentWillMount () {
    this.getPosts()
  }
  getPosts = () => {
    const id = this.props.match.params.id
    fetch(`https://k-blog0130.herokuapp.com/en/api/v1/posts/${id}`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        data:data.data,
        loading: false
      })
    })
  }
  render() {
    const override = css`
        display: block;
        margin: 0 auto;
    `;
    return (
      <div>
        <RingLoader
         css={override}
         sizeUnit={"px"}
         size={80}
         color={'#F0F0F0'}
         loading={this.state.loading}
       />
       <h3>{this.state.data.title}</h3>
        <ReactMarkdown
          source={this.state.data.context}
          renderers={{
            code: CodeBlock,
          }}
          className='post-content'
        />
      </div>
    )
  }
}

export default PostDetail;
