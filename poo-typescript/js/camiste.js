"use strict";
exports.__esModule = true;
//Clases molde donde podemos crear infiniad de objetos
var Camiseta = /** @class */ (function () {
    //Metodos (funciones o acciones que hará el objeto)
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
exports.Camiseta = Camiseta;
