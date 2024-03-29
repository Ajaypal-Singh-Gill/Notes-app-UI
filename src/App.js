import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Router, Switch, Route, Link } from "react-router-dom";
import Login from './Login';
import Signup from './SignUp';
import history from './History';
import NOTES from './NotesApp';
function App() {
  return (<Router history ={history}>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={Signup} />
            {/* <Route path ={"/Notes"} component={NOTES}></Route> */}
          </Switch>

    </div></Router>
  );
}

export default App;
