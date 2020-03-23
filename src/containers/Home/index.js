import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setToken } from '../../actions';
import { fetchOptions } from '../../utilities/fetchOptions';
import { config } from '../../config';

export const Home = () => {
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();
  const _token1 = window.location.href.split('access_token=')[1];
  const _token = _token1.split('&')[0];
  const [user, setUser] = useState({});
  
  useEffect(() => {
    dispatch(setToken(_token));
  }, [_token, dispatch]);

  const fetchUser = async () => {
    const response = await fetch(config.getUser, fetchOptions('GET', _token));
    const userData = await response.json();
    setUser(userData);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  console.log(user);
  return (
    <div className='home-page'>
      <h2>Welcome {user.display_name}!</h2>
    </div>
  )
}

export default Home;