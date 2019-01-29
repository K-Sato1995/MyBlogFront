import React from 'react';
import '../../Design/Nav.scss';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <div className='navbar'>
        <div className="nav-container">
          <Link to='/'><span className='logo'>K-Sato's Blog</span></Link>
        </div>
      </div>
    )
  }
}

export default Nav;
