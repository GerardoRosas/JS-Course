'use strict'



function decimalRedondo(numero){
    let redondeo = Math.round(numero);
    numero -= redondeo;
    console.log(Math.abs(numero));
}

