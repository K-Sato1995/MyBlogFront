import React from 'react';
import '../../../../Design/CategoryButton.scss';

class CategoryButton extends React.Component {
  render() {
    const categoryButton = this.props.activeCategory === this.props.value ? (
      <button value={this.props.value} onClick={this.props.updateCategory} className='category-button-active'>
        {this.props.name}
      </button>) :
      <button value={this.props.value} onClick={this.props.updateCategory} className='category-button'>
        {this.props.name}
      </button>
    return (
      <React.Fragment>
        {categoryButton}
      </React.Fragment>
    )
  }
}

export default CategoryButton;
