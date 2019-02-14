import React from 'react';
import '../../../Design/About/AboutMain.scss';

class Me extends React.Component {
  render() {
    return (
      <div className='me-box'>
          <img alt={'PENGUIN'} src={require('./images/penguin.png')} className='me-box-penguin'/>
          <h3 className='me-box-name'>K-Sato</h3>
          <a href='https://github.com/K-Sato1995' target='_blank'><button>Check me out on GitHub</button></a>
      </div>
    )
  }
}

export default Me;
