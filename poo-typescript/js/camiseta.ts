//Interface
interface CamisteBase{
    setColor(color);
    getColor();
}

//Decorador
function estampar(logo: String){
    return function(target: Function){
        target.prototype.estampacion = function(): void{
            console.log("Camiseta estampad con el logo de "+logo);
        }
    }
}

//Clases molde donde podemos crear infiniad de objetos
@estampar('Gucci Gang') //Se agrega el decorador a la clase Camiseta
class Camiseta implements CamisteBase{
    //Propiedaes
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    //Metodos (funciones o acciones que hará el objeto)

    constructor(color, modelo, marca, talla, precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    public setColor(color){
        this.color = color;
    }
    public getColor(){
        return this.color
    }
}

//Herencia

class Sudadera extends Camiseta{
    public capucha: boolean;
    
    setCapucha(capucha){
        this.capucha = capucha;
    }

    getCapucha():boolean{
        return this.capucha;
    }
}

var sudadera_nike = new Sudadera("rojo", "manga larga", "adidas", "XX", 600);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("Verde");
console.log(sudadera_nike);
console.log(sudadera_nike.getCapucha());

var camiseta = new Camiseta("ff", "dd", "dds", "dddd", 40);
console.log(camiseta);

camiseta.estampacion();
