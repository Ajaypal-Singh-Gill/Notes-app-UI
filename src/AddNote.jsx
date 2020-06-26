import React, { useState } from 'react';
import axious from 'axios';

const Base_Url = "http://localhost:8080";

export default function AddNote(props){

    const [note,assignValue] = useState({
        title :"",
        content : ""
    });

    function handleChange(event){

        console.log(event.target);

        const { name,value } = event.target;

        assignValue(prevNote =>{
            return {
            ...prevNote,
            [name] : value
            }
        });
    }
    function postData(event){
        event.preventDefault();
        console.log(props.id);
        axious.post(`${Base_Url}/notes/${props.id}`,note);
        assignValue({title :"",
        content : ""});
    }
    
    return (<div>
            <form>
            <input name = "title" value = {note.title} placeholder = "Title goes here" onChange = {handleChange}></input>
            <textarea rows='5' name = "content" value = {note.content} placeholder = "Type notes here.." onChange = {handleChange}>
            </textarea>
            <button className = 'but-name' onClick={postData}>Add</button>
            </form>
        </div>);
    
}