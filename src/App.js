import React from "react";

import Home from './pages/Home'
import Forum from "./pages/Forum";
import Rules from "./pages/Rules";
import Factions from './pages/Factions'

import { Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Route exact path='/' component={Home}/>
      <Route exact path='/Forum' component={Forum}/>
      <Route exact path='/Rules' component={Rules}/>
      <Route exact path='/Factions' component={Factions}/>
    </>
  );
}

export default App;
