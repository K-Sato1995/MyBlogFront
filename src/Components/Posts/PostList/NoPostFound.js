import React from 'react';
import '../../../Design/NoPostFound.scss';

class NoPostFound extends React.Component {
  render() {
    return (
      <div className='no-post-found-box'>
        <img alt={'PENGUIN'} src={require('../images/penguin.png')} className='penguin'/>
        <h1>No Post Found</h1>
        <h3>Empty the search box and/or click 'All' to show posts:)</h3>
      </div>
    )
  }
}

export default NoPostFound;
