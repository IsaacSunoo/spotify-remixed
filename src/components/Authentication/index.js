import React from 'react';
import { clientId } from '../../keys';
import { config } from '../../config';

export const Authentication = () => {
  const scopes = [
    'user-read-currently-playing',
    'user-read-playback-state',
    'user-library-read',
    'user-read-recently-played',
    'user-top-read',
    'playlist-read-private',
    'playlist-read-collaborative',
    'playlist-modify-public',
    'streaming'
  ];

  console.log('***********', config.auth);

  return (
    <div className='auth-section'>
      <h2>Authentication Login</h2>
        <a
          className='login-btn'
          href={config.auth +
            '?response_type=token' +
            '&client_id=' +
            clientId +
            (`&scope=${scopes.join('%20')}`) +
            '&redirect_uri=' +
            encodeURIComponent(config.redirectURI)
          }
        >
          Login
        </a>
    </div>
  )
}