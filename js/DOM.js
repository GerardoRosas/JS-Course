'use strict'

function cambiaColor(color){
    caja.style.background = color;
}

//Conseguir elemtos pot su ID
var caja = document.querySelector("#micaja");
//var caja = document.getElementById("mi caja");

console.log(caja);
caja.innerHTML = "Cambiando un elemento";
caja.style.background = "brown";
caja.style.padding = "20px";
caja.style.color = "white";

caja.className = "hola";

//Conseguir elemtos por clase


//COnseguir elemtos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');
var contenidoEnTexto = todosLosDivs[2].textContent;
console.log(contenidoEnTexto);
console.log(todosLosDivs);



