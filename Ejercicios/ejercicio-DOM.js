'use stric'
console.log("cargadom");

window.addEventListener('load', function(){

    console.log("Carga del dom");

    var formulario = document.querySelector("#formulario");

    formulario.addEventListener('submit', function(){
        console.log("evento Sumbit capturado");
        
        var nombre = document.querySelector("#nombre");
        var apellidos = documetn.querySelector("#apellidos");
        var edad = documetn.querySelector("#edad");

        console.log(nombre, apellidos, edad);
       
    });

});