'use strict'


//inzializa funcion
function ejemplo1(queHay){
    queHay();
}

//se hace llamado a funcion
ejemplo1(function(){  //funcion anonima
    console.log("hola");
});

var array = [1,2,3,40];
var arrayDuplicado = array.map(function(elemento){
    return elemento*2;
});
console.log(arrayDuplicado);

//***************************************************************** */

function miMap(arr, fn){
    var nuevoArray = [];
    for(var i = 0; i< arr.length; i++){
        nuevoArray.push(fn(arr[i]));
    }
    return nuevoArray;
}

var array2 = miMap([1,2,3,4,5], function(e){
    return e * 4;
});

////////////////////////////////////////////////////////////////////

function hagoAlgo(callback){
    callback("Hola Gerardo");
}

hagoAlgo(function(valorQueTengo){
    console.log(valorQueTengo);
})

//********************************************************** */

function Sumar(a, b, callback){
    return callback(a - b);
}

Sumar(4,5, function(r){
    console.log("El resultado es: " +r);
})
