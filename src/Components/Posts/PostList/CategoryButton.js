import React from 'react';

class CategoryButton extends React.Component {
  render() {
    return (
      <button value={this.props.value} onClick={this.props.updateCategory}>
        {this.props.name}
      </button>
    )
  }
}

export default CategoryButton;
