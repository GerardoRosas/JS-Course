'use strict'
//Mostrar todos los numeros impares que hay entre dos numeros 

var n1 = parseInt(prompt("introduc el primero numeros"));
var n2 = parseInt(prompt("Introduce el segundo numero"));

while(n1 < n2){
    n1++;
    if(n1%2 != 0){
        console.log("Este numero es impar:" +n1);
    }
}