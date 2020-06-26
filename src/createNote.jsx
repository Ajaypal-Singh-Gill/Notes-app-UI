import React,{ useState } from 'react';
import {getData , postData} from './NotesService';


function CreateNoteCard()
{
    const [ note , setNote ] = useState({
    title: "",
    content: ""
    });

    function  handleChange(event)
    {
        const { name , value } = event.target;
        setNote(prevState => {
            return {
                ...prevState,
                [name] : value
            }
        });
    }
    function addNote(event){
        console.log(note);
        postData(note);
        event.preventDefault();
     }
    return (<div>
        <form>
        <input name = "title" value = {note.title} placeholder = "Title goes here" onChange = {handleChange}></input>
        <textarea name = "content" value = {note.content} placeholder = "Type notes here.." onChange = {handleChange}>
        </textarea>
        <button onClick={addNote}>Add</button>
        </form>
    </div>);
}


export default CreateNoteCard;