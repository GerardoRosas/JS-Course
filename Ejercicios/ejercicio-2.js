'use strict'
/*
Utilizando un bucle, mostrar la suma y la media de los numeros introducidos hasta
introducir un numero negativo y ahí mostarr el resultado
*/

var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt("Introduce numero hasta que metas un numero negativo ", 0));
    if(isNaN(numero)){
        numero = 0;
    }else if(numero >= 0){
        suma += numero;
        contador++;
    }
}while(numero >= 0);
console.log("La suma de todos los numeros es: " +suma);
console.log("La media de todos los numeros es: "+ (suma/contador));