console.log("hola mundo");

//Declaración de variables

var nombre = "Ramses";
console.log(nombre);
nombre = "Ramses mod";
console.log(nombre);

let nombre2 = "Rojas";
console.log(nombre2);
nombre2 = "Rojas mod";

if(true){
    var mensaje1 = "MEnsaje 1";
    let mensaje2 = "Mensaje 2";
    console.log(mensaje1)
    console.log(mensaje2)
}
console.log(mensaje1)
// console.log(mensaje2);

function saludo(nombre) {
    console.log('Hola, saludo 1'+nombre)
}

const saludo2 = function(nombre){
    console.log('Hola,' +nombre)
}

saludo()
// saludo2()

const suma = (nombre) => {
    console.log('Suma')
}

console.log(suma)