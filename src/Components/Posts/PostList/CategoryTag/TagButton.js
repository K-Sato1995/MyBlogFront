import React from 'react';
import '../../../../Design/PostList.scss';

class TagButton extends React.Component {
  render() {
    return (
      <button value={this.props.value} onClick={this.props.updateTag} className='tag-button'>
        #{this.props.name}
      </button>
    )
  }
}

export default TagButton;
