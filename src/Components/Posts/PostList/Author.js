import React from 'react';
import '../../../Design/Posts/PostList/Author.scss';
import { Link } from 'react-router-dom';

class Author extends React.Component {
  render() {
    return (
      <div className='author-box'>
        <h4 className='author-title'>Author</h4>
        <div className='top'>
          <Link to= {`/about`}>
            <img alt={'PENGUIN'} src={require('../images/penguin.png')} className='author-penguin'/>
          </Link>
          <h3><Link to= {`/about`} className='author-box-name'>K-Sato</Link></h3>
        </div>
        <div className='body'>
          <p>I'm just a silly boy aspiring to be a competent programmer.</p>
        </div>
        <div className='snn-links'>
          <a href='https://dev.to/ksato1995' className='snn1-link'><p className='snn1'>DEV.to</p></a>
          <a href='https://github.com/K-Sato1995' className='snn2-link'><p className='snn2'>GitHub</p></a>
        </div>
      </div>
    )
  }
}

export default Author;
