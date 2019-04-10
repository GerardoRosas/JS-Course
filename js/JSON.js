'use strict'
//objetos

var pelicula = {
    titulo : 'Batman vs Superman',
    year: 2017,
    pais: "Estados Unidos"
};

var peliculas = [
    {titulo: "La verdad duele", year: 2013, pais: "Francia"},
    {titulo: "Golpe bajo", year:2010, pais: "EU"},
    pelicula
];

console.log(peliculas);
var catalogo = document.querySelector("#hola");
var index;
for(index in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[index].titulo + ' - ' + peliculas[index].year);
    catalogo.append(p);
}
