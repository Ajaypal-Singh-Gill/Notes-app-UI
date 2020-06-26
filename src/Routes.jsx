import React from 'react';
import {Router,  Route } from "react-router-dom";
import history from './History.jsx';
import NotesApp from './NotesApp';
export default function Routes(){
    return (
    <Router history={history}>
        <Route path = '/Notes' component ={NotesApp}></Route>
    </Router>);
}