import React from 'react';
import '../../../Design/Author.scss';

class Author extends React.Component {
  render() {
    return (
      <div className='author-box'>
        <h4 className='author-title'>Author</h4>
        <div className='top'>
          <img alt={'PENGUIN'} src={require('../images/penguin.png')} className='penguin'/>
          <h3>K-Sato</h3>
        </div>
        <div className='body'>
          <p>I'm just a silly boy aspiring to be a competent programmer.</p>
        </div>
      </div>
    )
  }
}

export default Author;
