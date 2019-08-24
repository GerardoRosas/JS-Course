//Clases molde donde podemos crear infiniad de objetos
var Camiseta = /** @class */ (function () {
    function Camiseta() {
    }
    return Camiseta;
}());
var camiseta = new Camiseta();
camiseta.color = "Rojo";
camiseta.modelo = "Manga larga";
camiseta.marca = "Nike";
camiseta.talla = "L";
camiseta.precio = 15;
var playera = new Camiseta();
playera.color = "Verde";
console.log(camiseta, playera);
