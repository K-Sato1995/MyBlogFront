import React from 'react';
import '../../Design/Nav.scss';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <div className='navbar'>
        <div class="nav-container">
          <Link to='/'><img alt={'LOGO'} src={require('./images/logo.png')} className='logo'/></Link>
        </div>
      </div>
    )
  }
}

export default Nav;
