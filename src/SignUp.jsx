import React, { useState } from "react";
import { browserHistory, Redirect ,useHistory} from "react-router-dom";
import Popup from "reactjs-popup";
import axios from "axios"
// import history from './History';
const Base_Url = "http://localhost:8080";

export default function SignUp(){

    const history = useHistory();
    // var isRegister = false;
    const [isRegister,register] = useState(false);

    const [user , assignUser] = useState({
        firstname:"",
        lastname:"",
        username:"",
        password:""
    });

    function inputUser(event){
        const {name,value} = event.target;
        assignUser(prevData => {
            return{
                ...prevData,
                [name] : value 
            }
        });
    }

    var data ;
    
    function postdata(event){
        event.preventDefault();
        console.log(user);
        axios.post(`${Base_Url}/user/add`,user).then(response => {
             data = response.data;
             console.log(data.code);
             if(data.code != '200')
             {
                 alert(data.message);
                 
             }
             else{

                history.push('/login');
                //  console.log(isRegister);
                //  register(true);

             }
            // console.log(data);
            // console.log(response.data);
        //    setData(response.data);
        });
       

        // console.log({isRegister});
        // if(isRegister)
        // history.goBack();
        // {{isRegister} ? history.goBack() }
        // history.goBack();
        // isRegister = true;
        
        
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
        
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input name="firstname" className="form-control" placeholder="First name" value = {user.firstname} onChange={inputUser}/>
                </div>
                <div className="form-group">
                    <label>Last name</label>
                    <input name="lastname" className="form-control" placeholder="Last name" value = {user.lastname} onChange={inputUser}/>
                </div>

                <div className="form-group">
                    <label>Username</label>
                    <input name="username" className="form-control" placeholder="Username" value = {user.username} onChange={inputUser}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input name="password" className="form-control" placeholder="Enter password" value = {user.password} onChange={inputUser}/>
                </div>
                
                
                <button type="submit" className="btn btn-primary btn-block" onClick={postdata}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
                
            </form></div>
        );

}