import React from 'react';
import '../../../Design/Posts/PostList/Author.scss';

class Author extends React.Component {
  render() {
    return (
      <div className='author-box'>
        <h4 className='author-title'>Author</h4>
        <div className='top'>
          <img alt={'PENGUIN'} src={require('../images/penguin.png')} className='author-penguin'/>
          <h3>K-Sato</h3>
        </div>
        <div className='body'>
          <p>I'm just a silly boy aspiring to be a competent programmer.</p>
        </div>
        <div className='snn-links'>
          <p className='snn1'><a href='https://dev.to/ksato1995' className='snn1-link'>DEV.to</a></p>
          <p className='snn2'><a href='https://github.com/K-Sato1995' className='snn2-link'>GitHub</a></p>
        </div>
      </div>
    )
  }
}

export default Author;
