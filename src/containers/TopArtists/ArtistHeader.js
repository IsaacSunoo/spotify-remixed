import React from 'react';
import artists from '../../images/artists.jpg';
import { Link } from 'react-router-dom';

export const ArtistHeader = () => {
  return (
    <header>
      <img src={artists} alt='musician stage' className='artist-image' />
      <section className='artist-menu'>
        <span className='time-styles'>All Time</span>
        <span className='time-styles'>Last 6 Months</span>
        <span className='time-styles'>Last Month</span>
      </section>
    </header>
  )
}

export default ArtistHeader;