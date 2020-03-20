import React from 'react';
import { Route } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Authentication } from '../../components/Authentication';
import { Home } from '../Home';

export const App = () => {
  return (
    <div>
      <Route path='/' component={Header} />
      <Route exact path='/' component={Authentication} />
      <Route path='/home' component={Home} />
    </div>
  );
}

export default App;
