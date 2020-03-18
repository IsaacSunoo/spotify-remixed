import React, { useState, useEffect } from 'react';
import { clientId } from '../../keys';

export const Authentication = () => {
  const [token, setToken] = useState('');
  const authEndpoint = 'https://accounts.spotify.com/authorize';
  const redirectUri = 'http://localhost:3000/home';
  const scopes = [
    'user-read-currently-playing',
    'user-read-playback-state'
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
  }, [])

  return (
    <div>
      <h2>Authentication Login</h2>
      {!token && (
        <a
          className='login-btn'
          href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`}
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