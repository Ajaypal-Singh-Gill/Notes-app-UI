import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import NOTES from './NotesApp';
import {BrowserRouter as Router,  Route,Switch } from "react-router-dom";
import Login from './Login';
import history from './History';
import App from './App';
import SignUp from './SignUp';
ReactDOM.render(
  <Router >
  <Route path={"/login"} component={Login}/>
   <Route path={'/Notes'} component={NOTES}/>
   <Route path ={'/sign-up'} component={SignUp}/>
  </Router>
  
  
  ,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
