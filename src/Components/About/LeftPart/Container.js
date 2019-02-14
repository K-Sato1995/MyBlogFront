import React from 'react';
import Me from './Me';
import '../../../Design/About/AboutMain.scss';

class Container extends React.Component {
  render() {
    return (
      <div className='about-left-container'>
        <Me />
      </div>
    )
  }
}

export default Container;
