import React from 'react';
import PostBox from './PostBox';
import '../../../Design/PostList.scss';
import { css } from '@emotion/core';
import { RingLoader } from 'react-spinners';
import { Col } from 'react-bootstrap';
import SearchBar from './SearchBar';
import CategoryButton from './CategoryButton';

class PostsList extends React.Component {
  constructor () {
    super();
    this.state = {
      posts: [],
      categories: [],
      search: '',
      category: 0,
      loading: true
    }
    this.updateSearch = this.updateSearch.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
  }
  componentWillMount () {
    this.getPosts()
  }
  getPosts = () => {
    fetch('https://k-blog0130.herokuapp.com/en/api/v1/posts')
    .then(response => response.json())
    .then(data => {
      this.setState({
        posts:data.data.posts,
        categories: data.data.categories,
        loading: false
      })
    })
  }
  updateSearch(e) {
    this.setState({ search: e.target.value})
  }
  updateCategory(e) {
    this.setState({ category: parseInt(e.target.value)})
  }

  render() {
    const override = css`
        margin: 0 auto;
        display: block;
    `;
    // Array.prototype.filter() is Array#select in Ruby.
    const filterd_posts = this.state.posts.filter((post) => {
      if(this.state.category === 0){
        return post.title.toLowerCase().includes(this.state.search.toLowerCase())
      }else {
        return (post.category_id === this.state.category && post.title.toLowerCase().includes(this.state.search.toLowerCase()));
      }
    })

    const postList = filterd_posts.map((post, index) =>
    <PostBox key={index} id={post.id} title={post.title} image={post.image} category={post.category_id} created_at={post.created_at}/>
    )

    const categories = this.state.categories.map((category, index)=>
      <CategoryButton value={category.id} name={category.name} updateCategory={this.updateCategory} key={index}/>
    )

    return (
      <Col　className="container">
        <CategoryButton value={0} name={'All'} updateCategory={this.updateCategory}/>
        {categories}

        <RingLoader
         css={override}
         sizeUnit={"px"}
         size={80}
         color={'#E0E0E0'}
         loading={this.state.loading}
       />
       <SearchBar updateSearch={this.updateSearch}/>
       { postList }
      </Col>
    )
  }
}

export default PostsList;
