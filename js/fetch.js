'use strict'

//Fetch(ajax) y peticiones a servidores

var usuarios = [];
fetch('https://jsonplaceholrder.typicode.com/users')
    .then(data => data.json())
    .then(data => {
        usuarios = data;
        console.log(usuarios);
    })