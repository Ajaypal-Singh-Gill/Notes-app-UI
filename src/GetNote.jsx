import React, { useState } from 'react';
import axious from 'axios';

const Base_Url = "http://localhost:8080";

export default function GetNote(){
    const [notes,setNotes] = useState([]);

    axious.get(`${Base_Url}/notes`).then(response => {
        setNotes(response.data) ;
     });
     return notes;
} 