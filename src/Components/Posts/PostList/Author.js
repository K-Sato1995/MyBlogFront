import React from 'react';
import '../../../Design/Posts/PostList/Author.scss';
import { Link } from 'react-router-dom';

class Author extends React.Component {
  render() {
    return (
      <div className='author-box'>
        <h4 className='author-box-title'><span className='title'>About Me</span></h4>
        <Link to= {`/about`}>
          <img alt={'PENGUIN'} src={require('../images/penguin.png')} className='author-penguin'/>
        </Link>
        <h4><Link to= {`/about`} className='author-box-name'>K-Sato</Link></h4>
        <p className='author-box-body'>I'm just a silly boy aspiring to be a competent programmer.</p>
        {/* SNN-LINKS */}
        {/* <div className='snn-links'>
          <a href='https://dev.to/ksato1995' className='snn1-link'><p className='snn1'>DEV.to</p></a>
          <a href='https://github.com/K-Sato1995' className='snn2-link'><p className='snn2'>GitHub</p></a>
        </div> */}
      </div>
    )
  }
}

export default Author;
