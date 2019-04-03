'use strict'
/*
DIgas si un numero es par o impar
1. ventana prompt
2. comprobar numero si es valido
3. 
*/

var numero = parseInt(prompt("Introduce un numero"));

while(isNaN(numero)){
    numero = parseInt(prompt("Introduce un numero")); 
}
if(numero%2 ==0 || numero==0){
    console.log("Es un numero par");
}else if(numero %2 !=0){
    console.log("Es un numeor impar");
}