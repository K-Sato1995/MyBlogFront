import React from 'react';
import '../../../Design/PostList.scss';

class CategoryButton extends React.Component {
  render() {
    return (
      <button value={this.props.value} onClick={this.props.updateCategory} className='category-button'>
        {this.props.name}
      </button>
    )
  }
}

export default CategoryButton;
