'use strict'

/*
Hacer un programa que muestre todos los numeros entre dos numero introducidos por el usuario
*/

var n1 = parseInt(prompt("Introduce un numero"));
var n2 = parseInt(prompt("Introduce un segundo numero"));

document.write("<h1>De "+n1+" a "+n2+" estan estos numeros: </h1>");
for(var i = n1; i <= n2; i++){
    
    console.log(i+"<br/>");

}