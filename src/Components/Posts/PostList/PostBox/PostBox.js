import React from 'react';
import '../../../../Design/Posts/PostList/PostBox.scss';
import { Link } from 'react-router-dom';
import TagButton from '../CategoryTag/TagButton';
import CategoryBall from './CategoryBall';

class PostBox extends React.Component {
  formatDate(date){
    const dateObject = new Date(date)
    const month = dateObject.getMonth() + 1
    const day = dateObject.getDate()
    const year = dateObject.getFullYear();
    return `${year}/${month}/${day}`
  }
  render() {
    const post_tags = this.props.tags.map((tag, index) =>
      <TagButton key={index} value={tag.id} updateTag={this.props.updateTag} name={tag.name}/>
    )
    const introduction = this.props.introduction ? this.props.introduction : ''
    return (
      <div className="post-box">
        <h3 className='post-title'><Link to= {`/Post/${this.props.id}`} className='post-title-link'>{this.props.title}</Link></h3>
        <CategoryBall category={this.props.category}/>
        <p className='post-introduction'>{introduction.substring(0, 300)}...</p>
        <p className='post-tag-list'>{ post_tags }</p>
        <p className='created-date'>{ this.formatDate(this.props.created_at) }</p>
      </div>
    )
  }
}

export default PostBox;
