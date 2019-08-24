//Clases molde donde podemos crear infiniad de objetos
class Camiseta{
    //Propiedaes
    public color: string;
    public modelo: string;
    public marca: string;
    public talla: string;
    public precio: number;

    //Metodos (funciones o acciones que hará el objeto)

}

var camiseta = new Camiseta();
camiseta.color = "Rojo";
camiseta.modelo = "Manga larga";
camiseta.marca = "Nike";
camiseta.talla = "L";
camiseta.precio = 15;

var playera = new Camiseta();
playera.color = "Verde";

console.log(camiseta, playera);





