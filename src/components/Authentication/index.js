import React from 'react';
import { clientId } from '../../keys';
import { config } from '../../config';

export const Authentication = () => {
  // const authEndpoint = 'https://accounts.spotify.com/authorize';
  // const redirectUri = 'http://localhost:3000/home';
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


  // const hash = window.location.href.substring(1).split('&').reduce((initial, item) => {
  //   if (item) {
  //     let parts = item.split('=');
  //     initial[parts[0]] = decodeURIComponent(parts[1]);
  //   }
  //   return initial;
  // }, {});

  // console.log(hash);
  // useEffect(() => {
  //   let _token = hash.access_token;
  //   if (_token) {
  //     console.log('if block entered');
  //     dispatch(setToken(_token));
  //   }
  // }, [hash, dispatch]);