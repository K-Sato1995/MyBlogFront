import React from 'react';
import '../../../Design/Author.scss';

class Author extends React.Component {
  render() {
    return (
      <div className='author-box'>
        <h3 className='author-title'>Author</h3>
        <div className='top'>
          <img alt={'PENGUIN'} src={require('../images/penguin.png')} className='penguin'/>
          <h3>K-Sato</h3>
        </div>
        <div className='body'>
          <p>A silly boy aspiring to be a conpetent programmer.</p>
        </div>
      </div>
    )
  }
}

export default Author;
