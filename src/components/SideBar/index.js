import React from 'react';
import { Link } from 'react-router-dom';

export const SideBar = () => {
  return (
    <section className='sidebar-container'>
      <Link to='top-artists' className='link-styles'>
        <article>
          <span className='material-icons star'>grade</span>
          <p>Favorite Artists</p>
        </article>
      </Link>
      <Link to='top-songs' className='link-styles'>
        <article>
          <span className='material-icons'>favorite_border</span>
          <p>Favorite Songs</p>
        </article>
      </Link>
      <Link to='recently-played' className='link-styles'>
        <article>
          <span className='material-icons'>schedule</span>
          <p>Recently Played</p>
        </article>
      </Link>
      <Link to='playlists' className='link-styles'>
        <article>
          <span className='material-icons'>list</span>
          <p>Playlists</p>
        </article>
      </Link>
      <article>
        <span className='material-icons'>info</span>
        <p>Info</p>
      </article>
    </section>
  );
}

export default SideBar;