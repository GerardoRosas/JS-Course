let hora_act = parseInt(prompt("Hora Actual: "));
let hora_fut = parseInt(prompt("Cantidad de horas: "));
let suma;

/*if(hora_fut > 12){
    suma = hora_act;
}else{
    suma = hora_act + hora_fut;
}*/

console.log("En "+hora_fut+" horas, el reloj marcara las "+((hora_act+hora_fut)%12));
console.log((hora_act+hora_fut)%12);
console.log(12%12);
console.log(3%12);
console.log(46%5);
