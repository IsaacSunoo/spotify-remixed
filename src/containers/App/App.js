import React from 'react';
import { Route } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Authentication } from '../../components/Authentication';

export const App = () => {
  return (
    <div>
      <Route path='/' component={Header} />
      <Route exact path='/' component={Authentication} />
    </div>
  );
}

export default App;
