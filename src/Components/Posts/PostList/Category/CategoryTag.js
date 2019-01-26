import React from 'react';
import '../../../../Design/PostList.scss';

class CategoryTag extends React.Component {
  render() {
    return (
      <button value={this.props.value} onClick={this.props.updateCategory} className='category-tag'>
        {this.props.name}
      </button>
    )
  }
}

export default CategoryTag;
