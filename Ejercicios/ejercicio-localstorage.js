'use strict'

var formulario = document.querySelector('#formpeliculas');

formulario.addEventListener('submit', function(){
    var titulo = document.querySelector('#addpelicula').value;
    if(titulo.lenght >= 1){
        localStorage.setItem(titulo, titulo);
    }
})

for(var i in localStorage){
    console.log(localStorage[i]);
}