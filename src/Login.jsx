import React, { useState } from "react";
import axios from "axios";
import Routes from './Routes';
import {BrowserRouter as Router,  Route  , Switch,  Link,Redirect,useHistory} from "react-router-dom";
import NotesApp from './NotesApp';
import history from './History.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Base_Url = "http://localhost:8080";

export default function Login(){
    const history = useHistory();


    const[user,assignUser] = useState({
        username:"",
        password:""
    });


    function inputUser(event){
     const {name,value} = event.target;

     assignUser(prevUser=>{
        return {
            ...prevUser,
            [name] : value
        }
     
    });
    }

    const[dbUser,dbUserAssign] = useState({
        id:"",
        username:"",
        password:"",
        firstname:"",
        lastname:""
    });

    function validateCred(event){
        event.preventDefault();
        axios.get(`${Base_Url}/user/auth/${user.username}`).then(response => {
        //  dbUserAssign(response.data);
        //  console.log(response.data);
         if(response.data.password == user.password){
            history.push({
                pathname: '/Notes',
                search: `?id=${response.data.id}`,
                })
         }
        });
        
        // ifff
        // <Redirect ></Redirect>
        // <Redirect to="/Notes" />
//         <Route exact path="/">
//   {loggedIn ?  : <PublicHomePage />}
// </Route>
        
        // history.push('/Notes');
        // history.push('/sign-up');
    //    return <Router>
    //     <Link to ="/Notesapp"></Link>
    //     <Route path ="/Notesapp" component ={NotesApp}></Route>
    //     </Router>;
        
    }
        return (<div>
            <nav class="navbar navbar-expand-lg navbar-light bg-primary">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
        
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
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
            <form onSubmit={validateCred}>
            <h3>Sign In</h3>
            <div className="form-group">
                <label>Username</label>
                <input name="username" className="form-control" placeholder="Enter username" value={user.username} onChange={inputUser}/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input name="password" className="form-control" placeholder="Enter password" value={user.password} onChange={inputUser}/>
            </div>
    {/* 
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div> */}
        <button type="submit" className="btn btn-primary btn-block" onClick ={validateCred}>Submit</button>
        
            {/* <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
            </p> */}
            </form>

        
            
            

    </div>);
    }