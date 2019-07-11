'use strict'
//Teorema de pitagoras

var a = parseFloat(prompt("Ingrese un valor para a: "));
var b = parseFloat(prompt("Ingrese un valor para b: "));

let c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
console.log("La hipotenusa es: " +c);

