'use strict'

//Calculadora 

var n1 = parseFloat(prompt("Digite un numero"));
var n2 = parseFloat(prompt("Digite un segundo numero"));

while(n1 < 0 || n2 < 0 || isNaN(n1) || isNaN(n2)){
    n1 = parseFloat(prompt("Digite un numero"));
    n2 = parseFloat(prompt("Digite un segundo numero"));
}
 var resultado = "La suma es: " +(n1+n2)+ "<br/>" +
                "La resta es: " +(n1-n2)+ "<br/>" +
                "La multiplicación es: " +(n1*n2)+ "<br/>" +
                "La division es: " +(n1/n2)+ "<br/>";
        
document.write(resultado);
                
