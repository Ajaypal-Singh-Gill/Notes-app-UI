import React from 'react';
import ReadMoreReact from 'read-more-react';
import Axios from 'axios';

const Base_Url = "http://localhost:8080";
function Note(props){

    function onDelete(){
        console.log(props.id);
      Axios.delete(`${Base_Url}/notes/${props.id}`,);

    }
    return <div className='note'>
        <h1>{props.title}</h1>
        <ReadMoreReact text={props.content}>
        <div className="read-more-button">
            read-more
        </div>
        </ReadMoreReact>
        <button onClick={onDelete} >DELETE</button>
    </div>
}

export default Note;