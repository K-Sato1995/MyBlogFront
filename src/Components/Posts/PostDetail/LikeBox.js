import React from 'react';

class LikeBox extends React.Component {
  render(){
    return (
      <div className='like-box'>
        <button className='like-button' onClick={() => this.props.addLike()} >
          <span className="glyphicon glyphicon-thumbs-up"/>
        </button>
        <p className='like-number'>{this.props.like}</p>
      </div>
    )
  }
}

export default LikeBox;
