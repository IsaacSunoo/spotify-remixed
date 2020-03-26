import React from 'react';
import artists from '../../images/artists.jpg';

export const ArtistHeader = ({ handleTimeChange }) => {
  return (
    <header>
      <h3>Top Artists</h3>
      <img src={artists} alt='musician stage' className='artist-image' />
      <section className='artist-menu'>
        <span onClick={() => { handleTimeChange('long_term') }} className='time-styles'>All Time</span>
        <span onClick={() => { handleTimeChange('medium_term') }} className='time-styles'>Last 6 Months</span>
        <span onClick={() => { handleTimeChange('short_term') }} className='time-styles'>Last Month</span>
      </section>
    </header>
  )
}

export default ArtistHeader;