import React from 'react';

function footer(){
    var d = new Date();
    var year = d.getFullYear();
    return <footer> <h1>Copyright <i class="far fa-copyright"></i> {year}</h1></footer>
}

export default footer;