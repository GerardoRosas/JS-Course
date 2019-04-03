'use strict'

/*
1. Pida 6 numeros por pantalla y los meta en un array
2. Mostar el array entero (Todos sus elementos) en el cuerpo de la página y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
*/

var numeros = new Array(6);

for(var i = 0; i < 6; i++){
    numeros[i] = parseInt(prompt("Introduce un numero: ", 0));
}

//Impresion en pantalla
document.write("<h1>Contenido del array: </h1>");
numeros.forEach((numero, index)=>{
    document.write("<strong>" + numero + "</strong><br/>");
});

//imresion por consola
console.log(numeros);

//Ordenar y mostrar
numeros.sort(function(a,b){
    return a-b;
})
console.log(numeros);

//invertir y motrar
numeros.reverse();
console.log(numeros);

//Mostrar cuantos elementos tiene un array
console.log("Este array tiene " + numeros.length + " elementos");

//Busqueda de valor
var busqueda_valor = parseInt(prompt("Introduce un valor a buscar: "));
document.write("Posicion de la busqueda: "+ bus)