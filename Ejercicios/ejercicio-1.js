/*
Programa que pida dos numeros y que nos diga cual es le mayor, el menor y si son iguales
Plus Si los numeros no son un numero o son menores o iguales a cero, volver a introducir datos
*/

'use strict'

var numero1 = parseInt(prompt("Introduce el primer numero"));
var numero2 = parseInt(prompt("Introduce el segundo numero"));

while(numero1 <=0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){ //isNaN = Not a number 
     numero1 = parseInt(prompt("Introduce el primer numero"));
     numero2 = parseInt(prompt("Introduce el segundo numero"));
}

if(numero1 > numero2){
    console.log(numero1 + " es mayor que " + numero2);
}else if(numero2 > numero1){
    console.log(numero2 + " es mayor que " + numero1);
}else{
    console.log("Los dos numeros son iguales")
}

console.log(isNaN(numero1));


