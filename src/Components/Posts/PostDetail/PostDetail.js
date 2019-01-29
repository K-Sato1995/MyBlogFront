import React from 'react';
import '../../../Design/PostDetail.scss';
import '../../../Design/Highlight.scss';
import { css } from '@emotion/core';
import { BarLoader } from 'react-spinners';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';
import LoadingBox from '../LoadingBox'

class PostDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
      loading: true
    }
  }
  componentDidMount () {
    window.scrollTo(0, 0)
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
    const loadingBox = this.state.loading === true ? (
      <LoadingBox />
    ): ('')
    return (
      <div className='post-container'>
        <BarLoader
         css={override}
         sizeUnit={"px"}
         size={80}
         color={'#F0F0F0'}
         loading={this.state.loading}
       />
       { loadingBox }
       <h1 className='post-detail-title'>{this.state.data.title}</h1>
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
