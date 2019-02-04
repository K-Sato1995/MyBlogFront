import React from 'react';
import '../../../Design/NoMatch.scss';

class NoMatch extends React.Component {
  render() {
    return (
      <div className='no-match-box'>
        <img alt={'PENGUIN'} src={require('../images/penguin.png')} className='penguin'/>
        <h1>404 NOT FOUND</h1>
        <h3>Seems like the page you are looking for does not exist.</h3>
      </div>
    )
  }
}

export default NoMatch;
