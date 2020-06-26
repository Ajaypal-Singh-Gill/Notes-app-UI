import axious from 'axios';
import {useState} from 'react';

const Base_Url = "http://localhost:8080";
// function NotesService()
// {
//     var [notes,changenotes] = useState([]);
//     function getData(){
//         axious.get(`${Base_Url}/notes/getAll`).then(response => {
//        changenotes(response.data) ;
//     });
//     return notes;
//     }
//     function PostData(note){
//         axious.post(`${Base_Url}/notes/getAll`,note);
//     }

    
// }
function getData(){
        // eslint-disable-next-line react-hooks/rules-of-hooks
        var [notes,changeNotes] = useState([]);

        axious.get(`${Base_Url}/notes/getAll`).then(response => {
       changeNotes(response.data) ;
    });
    return notes;
    }

function postData(note){
        axious.post(`${Base_Url}/notes/getAll`,note);
}

export default {getData , postData};