'use strict'

//eventos del raton


window.addEventListener('load', function(){
   function cambiarColor(){
      console.log("Me has dado click");

      let bg = boton.style.background;

      if(bg == "green"){
         boton.style.background = "red";
      }else{
         boton.style.background = "green";
      }         
   }
      
   var boton = document.querySelector('#boton');
   
   boton.addEventListener('click', function(){
      cambiarColor();
   });
   
   //Evento Focus
   var input = document.querySelector("#campo_nombre");
   input.addEventListener('focus', function(){
      console.log("Estas dentro del input");
   });
   
   //Evento Blur
   input.addEventListener('blur', function(){
      console.log("Estas fuera del input");
   });
   
   //KeyDown
   input.addEventListener('keydown', function(event){
      console.log("[keydpwn]Pulsando la tecla ", String.fromCharCode(event.keyCode));  //Registra las teclas presionadas por el usuario
   });
   
   //Keypress
   input.addEventListener('keypress', function(event){
      console.log("[keypress]Tecla presionada ", String.fromCharCode(event.keyCode));  //Registra las teclas presionadas por el usuario
   });
      
   //Keyup
   
});

