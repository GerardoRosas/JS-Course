'use strict'


//Declarado como 
var nombres = ["Gerardo Rosas", "Victor Robles", "Neri Molina"];

//Declarado como objeto

var lenguajes = new Array("PHP", "JS", "JAVA", "C#", "Unity");

/*console.log(lenguajes.length);
for(var i = 0; i < lenguajes.length; i++){
    document.write(lenguajes[i]);
    document.write("<br/>");
}
*/

var fighters = ["Goku", "Krillin", "Vegeta", "Picoro"];

fighters.forEach(function (name, numero){
    console.log(numero + 1 + '. '+ name);
});



