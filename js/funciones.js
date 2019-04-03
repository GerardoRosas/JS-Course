'use strict'

//Es una agrupacion reutilizable de un conjunto de instrucciones

function calculadora(){
        console.log( "Hola Soy la calculadora");
        console.log( "Soy yo");
}

calculadora();


//Funcuion anonima

var pelicula = function(nombre){
        return "La pelicula es "+nombre;
}

//callback es una funcuion que se ejecuta dentro de otra funcion, se le pasa como parámetro una funcion

function sumame(n1, n2, sumaYmuestra, sumaPorDos){
        var sumar = n1 + n2;
        sumaYmuestra(sumar);
        sumaPorDos(sumar);
        return sumar;
}

sumame(5,7, function(dato){
        console.log("la suma es " +dato);
}, 
function (dato){
        console.log("La suma por dos es: "+(dato*2));
}
); 

