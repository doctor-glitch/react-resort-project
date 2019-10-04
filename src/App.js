import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

import Navbar from "./components/Navbar";


/* 
  exact will match the exact path
  when there will be no match Error page is called

  <switch> renders the 1st child route matches, <route> with no path always matches
*/
function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component ={Error}/>
      </Switch> 
    </>
  );
}

export default App;
