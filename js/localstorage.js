'use strict'

//es una 'memoria' donde se almacena mientras estamos en la página web

if(typeof(Storage) !== 'undefined'){
    console.log("Local Storage compatible");
}else{
    console.log("LocalStorage incompatible");
}

//Guardar datos

localStorage.setItem("titulo", "curso de symphony");
console.log(localStorage.getItem("titulo"));

//Guardar objetos
var usuario = {
    nombre: "Gerardo Rosas",
    email: "mbf@mail.com",
    web: "blogspot"
}
//objeto JSON 
//local Storage suele ser necesario convertir los datos a String
localStorage.setItem("key1", JSON.stringify(usuario));


//recuperar objeto
//objeto JSON.parse usando la key del item
var usuajs = JSON.parse(localStorage.getItem("key1"));
console.log(usuajs);