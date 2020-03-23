import React from 'react';
import { Route } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Authentication } from '../../components/Authentication';
import { Home } from '../Home';
import { TopArtists } from '../TopArtists';
import { SideBar } from '../../components/SideBar';

export const App = () => {
  return (
    <div>
      <Route path='/' component={Header} />
      <Route exact path='/' component={Authentication} />
      <Route path='/home' component={Home} />
      <Route path='/top-artists' component={TopArtists} />
      <Route path='/(home|top-artists)' component={SideBar} />
    </div>
  );
}

export default App;
