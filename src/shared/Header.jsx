import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../assets/logo.png';

const Header = () => {
  return (
    <div>
      <Link to='/'>
        <img className="logo" src={LOGO} alt="" />
      </Link>
    </div>
  );
};

export default Header;