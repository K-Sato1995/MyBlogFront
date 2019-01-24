import React from 'react';
import PostBox from './PostBox';
import '../../../Design/PostList.scss';
import { css } from '@emotion/core';
import { RingLoader } from 'react-spinners';
import { Col } from 'react-bootstrap';
import SearchBar from './SearchBar';

class PostsList extends React.Component {
  constructor () {
    super();
    this.state = {
      data: [],
      search: '',
      loading: true
    }
    this.updateSearch = this.updateSearch.bind(this);
  }
  componentWillMount () {
    this.getPosts()
  }
  getPosts = () => {
    fetch('https://k-blog0130.herokuapp.com/en/api/v1/posts')
    .then(response => response.json())
    .then(data => {
      this.setState({
        data:data.data,
        loading: false
      })
    })
  }
  updateSearch(e) {
    this.setState({ search: e.target.value})
  }

  render() {
    const override = css`
        margin: 0 auto;
        display: block;
    `;
    // Array.prototype.filter() is Array#select in Ruby.
    const filtered_posts = this.state.data.filter((post) => {
        return post.title.toLowerCase().includes(this.state.search.toLowerCase())
      }
    );
    const posts = filtered_posts.map((post, index) =>
    <PostBox key={index} id={post.id} title={post.title} image={post.image} category={post.category_id} created_at={post.created_at}/>
    )
    return (
      <Col　className="container">
        <RingLoader
         css={override}
         sizeUnit={"px"}
         size={80}
         color={'#E0E0E0'}
         loading={this.state.loading}
       />
      <SearchBar updateSearch={this.updateSearch}/>
      { posts }
      </Col>
    )
  }
}

export default PostsList;
