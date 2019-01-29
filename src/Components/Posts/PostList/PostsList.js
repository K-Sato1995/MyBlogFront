import React from 'react';
import PostBox from './PostBox';
import '../../../Design/PostList.scss';
import '../../../Design/RightContainer.scss';
import { css } from '@emotion/core';
import { BarLoader } from 'react-spinners';
import { Col } from 'react-bootstrap';
import SearchBar from './RightContainer/SearchBar';
import CategoryButton from './CategoryTag/CategoryButton';
import FeaturedPost from './RightContainer/FeaturedPost';
import Tag from './RightContainer/Tag';
import NoPostFound from './NoPostFound';
import Author from './Author';
import LoadingBox from '../LoadingBox'

class PostsList extends React.Component {
  constructor () {
    super();
    this.state = {
      posts: [],
      categories: [],
      post_tags:[],
      tags: [],
      search: '',
      category: 0,
      tag: 0,
      loading: true
    }
    this.updateSearch = this.updateSearch.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
    this.updateTag = this.updateTag.bind(this);
  }
  componentDidMount () {
    this.getPosts()
  }
  getPosts = () => {
    fetch('https://k-blog0130.herokuapp.com/en/api/v1/posts')
    .then(response => response.json())
    .then(data => {
      data.data.posts.map((post, index)=>
        post.tags = data.data.post_tags[index]
      )
      this.setState({
        posts:data.data.posts,
        categories: data.data.categories,
        tags: data.data.tags,
        post_tags: data.data.post_tags,
        loading: false
      })
    })
  }
  updateSearch(e) {
    this.setState({ search: e.target.value})
  }
  updateCategory(e) {
    this.setState(
      {
        tag: 0,
        category: parseInt(e.target.value)
      }
    )
  }
  updateTag(e) {
    this.setState({ tag: parseInt(e.target.value)})
  }

  render() {
    const override = css`
        margin: 0 auto;
        display: block;
    `;
    // Array.prototype.filter() is Array#select in Ruby.
    const filterd_posts = this.state.posts.filter((post) => {
      let postTags = []
      post.tags.map(tag => postTags.push(tag.id))
      if(this.state.category === 0 && this.state.tag === 0){
        return post.title.toLowerCase().includes(this.state.search.toLowerCase())
      }else if(this.state.category !== 0 && this.state.tag !== 0){
        return (post.category_id === this.state.category && postTags.includes(this.state.tag) && post.title.toLowerCase().includes(this.state.search.toLowerCase()))
      }else if(this.state.tag !== 0){
        return (postTags.includes(this.state.tag) && post.title.toLowerCase().includes(this.state.search.toLowerCase()));
      }else if (this.state.category !== 0){
        return (post.category_id === this.state.category && post.title.toLowerCase().includes(this.state.search.toLowerCase()));
      }else {
        return post.title.toLowerCase().includes(this.state.search.toLowerCase());
      }
    })

    const postList = filterd_posts.length !== 0 ?
    filterd_posts.map((post, index) =>
      <PostBox key={index}
               id={post.id}
               title={post.title}
               content={post.context}
               image={post.image}
               category={post.category_id}
               tags={post.tags}
               updateTag={this.updateTag}
               updateCategory={this.updateCategory}
               created_at={post.created_at}
             />
    ) : this.state.loading === false? <NoPostFound /> : ''

    const categories = this.state.categories.map((category, index)=>
      <CategoryButton activeCategory={this.state.category} value={category.id} name={category.name} updateCategory={this.updateCategory} key={index}/>
    )

    const featuredPosts = this.state.posts.slice(0, 4).map((post, index) =>
      <FeaturedPost key={index} title={post.title} id={post.id} content={post.context}/>
    )

    const tags = this.state.tags.map((tag,index) =>
      <Tag activeTag={this.state.tag} key={index} value={tag.id} name={tag.name} updateTag={this.updateTag}/>
    )

    const categoryAllButton = this.state.loading === false ? (
      <CategoryButton activeCategory={this.state.category} value={0} name={'All'} updateCategory={this.updateCategory}/>
    ) : ('')

    const rightContainer =
      this.state.loading === false ? (
      <React.Fragment >
        <Author />
        <div className='right-container'>
          <SearchBar updateSearch={this.updateSearch}/>
          <h3 className='tag-list-title'>Tag List</h3>
          {tags}
          <h3 className='featured-posts-title'>Featured Posts</h3>
          {featuredPosts}
        </div>
      </React.Fragment>
      ):('')

    const loadingBox = this.state.loading === true ? (
      <LoadingBox />
    ): ('')

    return (
      <Col　className="container">
        <BarLoader
         css={override}
         sizeUnit={"px"}
         size={80}
         color={'#E0E0E0'}
         loading={this.state.loading}
        />
        { loadingBox }
        <div className='post-list-container'>
          { categoryAllButton }
          { categories }
          { postList }
        </div>
        {rightContainer}
      </Col>
    )
  }
}

export default PostsList;
