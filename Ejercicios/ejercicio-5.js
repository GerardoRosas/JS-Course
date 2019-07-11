'use strict'

/*
Muestre todos los numeros divisiro de un numero introducido
*/

var numero = parseInt(prompt("Introduce un numero"));
//Los numeros divisibles pueden ser entre el mismo y por uno (primos)
//numeros pares 

for(var i = 1; i<=numero; i++){
    if(numero%i == 0){
         console.log("Divisor:"+i);   
    }    
}

