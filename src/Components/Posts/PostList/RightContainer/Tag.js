import React from 'react';
import '../../../../Design/RightContainer.scss';

class Tag extends React.Component {
  render() {
    return (
      <button className='tag' value={this.props.value} onClick={this.props.updateTag}>#{this.props.name}</button>
    )
  }
}

export default Tag;
