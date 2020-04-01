import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='main-header'>
      <Link to='/home' className='link-styles'>
        <h1>Spotify Remixed</h1>
      </Link>
    </header>
  )
}

export default Header;