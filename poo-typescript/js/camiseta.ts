//Interface
interface CamisteBase{
    setColor(color);
    getColor();
}


//Clases molde donde podemos crear infiniad de objetos
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
console.log(sudadera_nike);

var camiseta = new Camiseta("ff", "dd", "dds", "dddd", 40);
console.log(camiseta)






