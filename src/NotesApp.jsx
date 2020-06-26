import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';
import AddNote from './AddNote';
import axious from 'axios';
import { useState } from 'react';
import { useLocation,useHistory } from 'react-router';
import queryString from 'query-string';

const Base_Url = "http://localhost:8080";

function notesCard(notes)
{
    return <Note id = {notes.id} title = {notes.title} content = {notes.content}></Note>
}

function NOTES()
{
    const history = useHistory();

    const location = useLocation();

    const userid = queryString.parse(location.search).id;

    // console.log(userid);
    const [notes,setNotes] = useState([]);

    axious.get(`${Base_Url}/notes/${userid}`).then(response => {
        setNotes(response.data) ;
     });

console.log(notes);
    return <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
            <a class="navbar-brand" href="#">Notes</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
        
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                {/* <h3>{notes.user.username}</h3> */}
                <a class="nav-link" href="#" onClick ={() =>{history.push('/login')}}>Login <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#" onClick ={() =>{history.push('/sign-up')}}>SignUp</a>
                </li>
                {/* <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
                </li> */}
                {/* <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
                </li> */}
            </ul>
            {/* <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> */}
            </div>
        </nav>
        <AddNote id={userid}></AddNote>
         {notes.map(notesCard)}
         <Footer></Footer>
    </div>;
}

export default NOTES;