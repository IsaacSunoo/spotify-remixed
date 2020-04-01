import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchOptions } from '../../utilities/fetchOptions';
import { config } from '../../config';

export const TopSongs = () => {
  const token = useSelector(state => state.token);
  const [tracks, setTracks] = useState([]);


  useEffect(() => {
    const fetchTopTracks = async time => {
      const response = await fetch(`${config.topTracks}?time_range=${time || 'long_term'}&limit=50`, fetchOptions('GET', token));
      const topTracks = await response.json();
      setTracks(topTracks.items);
    }
    fetchTopTracks();
  }, [token]);

  console.log(tracks);

  return (
    <div>

    </div>
  )
}

export default TopSongs;