import React, { useState, useEffect } from 'react';
import { clientId } from '../../keys';

export const Authentication = () => {
  const [token, setToken] = useState('');
  const authEndpoint = 'https://accounts.spotify.com/authorize';
  const redirectUri = 'http://localhost:3000/home';
  const scopes = [
    'user-read-currently-playing',
    'user-read-playback-state',
    'user-library-read',
    'user-read-recently-played',
    'playlist-read-private',
    'playlist-read-collaborative',
    'streaming'
  ];

  const hash = window.location.hash.substring(1).split('&').reduce((initial, item) => {
    if (item) {
      let parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});

  useEffect(() => {
    let _token = hash.access_token;
    if (_token) {
      setToken(_token);
    }
  }, [hash]);

  return (
    <div>
      <h2>Authentication Login</h2>
      {!token && (
        <a
          className='login-btn'
          href={authEndpoint +
            "?response_type=code" +
            "&client_id=" +
            clientId +
            (`&scope=${scopes.join('%20')}`) +
            "&redirect_uri=" +
            encodeURIComponent(redirectUri)}
        >
          Login
        </a>
      )}
      {token && (
        <div>

        </div>
      )}
    </div>
  )
}

