import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Blank from './pages/blank/Blank';
import { Home } from './pages/home/Home';

interface RouteProps { }

export const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/blank" component={Blank}/>
    </BrowserRouter>
  );
}