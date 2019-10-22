import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./UserHome/UserHome";
import PrivateRoute from "./utils/PrivateRoute";
import SignUp from './components/SignUp/SignUp';
import Login from "./components/Login/Login";
import './App.css';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/'  component={ Login } />
        <Route exact path='/signup' component={ SignUp } />
        <Route exact path='/home' component={ Home } />
        
      </Switch>
    </>
  );
}

export default App;
