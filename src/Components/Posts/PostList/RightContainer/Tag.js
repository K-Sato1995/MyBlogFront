import React from 'react';
import '../../../../Design/Posts/PostList/RightContainer/RightContainer.scss';

class Tag extends React.Component {
  render() {
    const TagButton = this.props.activeTag === this.props.value ? (
      <button className='tag-active' value={this.props.value} onClick={this.props.updateTag}>#{this.props.name}</button>
      ) :
      <button className='tag' value={this.props.value} onClick={this.props.updateTag}>#{this.props.name}</button>

    return (
      <React.Fragment >
        { TagButton }
      </React.Fragment>
    )
  }
}

export default Tag;
