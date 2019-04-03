'use strict'

var categorias = ["Accion", "Terror", "Comedia"];
var peliculas = ["Yo Robot", "Golpe Bajo", "Cars", "Era de Hielo"];

var cine = [categorias, peliculas];

/*
console.log(cine[1][3]);
console.log(cine[0][0]);
*/

var elemento = prompt("Introduce tu pelicula");
while(elemento != "ACABAR"){
    elemento = prompt("Introduce tu pelicula");
    peliculas.push(elemento);
}
//Añadir un elememto
var lenguajes = new Array("PHP", "JS", "JAVA", "C#", "Unity");


for(var lenguaje in lenguajes){
    console.log(lenguajes[lenguaje]);
}