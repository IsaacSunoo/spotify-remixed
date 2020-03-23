import React from 'react';
import { clientId } from '../../keys';
import { config } from '../../config';
import landingPage from '../../images/landingPage.jpg';

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

  return (
    <div className='auth-section'>
      <img src={landingPage} alt='woman in front of music' className='landing-image' />
      <section className='login-section'>
        <h2>Discover Your Music</h2>
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
      </section>
    </div>
  )
}