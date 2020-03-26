/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchOptions } from '../../utilities/fetchOptions';
import { config } from '../../config';
import { ArtistHeader } from './ArtistHeader';
import { ArtistsCard } from './ArtistsCard';

export const TopArtists = () => {
  const token = useSelector(state => state.token);
  const [artists, setArtists] = useState([]);

  const fetchTopArtists = async time => {
    const response = await fetch(`${config.topArtists}?time_range=${time || 'long_term'}&limit=50`, fetchOptions('GET', token));
    const topArtists = await response.json();
    setArtists(topArtists.items);
  }

  useEffect(() => {
    fetchTopArtists();
  }, [token]);

  console.log('*********', artists);

  let displayArtists;

  if (artists) {
    displayArtists = artists.map((artist, idx) => (
      <ArtistsCard {...artist} key={artist.id} num={idx + 1} />
    ));
  }

  return (
    <div className='top-artists__container'>
      <ArtistHeader handleTimeChange={fetchTopArtists} />
      { displayArtists }
    </div>
  )
}

export default TopArtists;