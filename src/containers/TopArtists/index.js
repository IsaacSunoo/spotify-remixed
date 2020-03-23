import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchOptions } from '../../utilities/fetchOptions';
import { config } from '../../config';

export const TopArtists = () => {
  const token = useSelector(state => state.token);

  const fetchTopArtists = async () => {
    const response = await fetch(`${config.topArtists}?time_range=long_term`, fetchOptions('GET', token));
    const topArtists = await response.json();
    console.log(topArtists.items);
  }

  useEffect(() => {
    fetchTopArtists();
  }, [token])


  return (
    <div>

    </div>
  )
}

export default TopArtists;