import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../assets/logo.png';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/'>
        <img className="logo" src={LOGO} alt="" />
      </Link>
    </header>
  );
};

export default Header;