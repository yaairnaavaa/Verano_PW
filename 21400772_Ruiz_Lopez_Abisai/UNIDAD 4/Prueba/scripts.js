//Declaración de variables
var nombre1 = "Abisai";
console.log(nombre1)
nombre1 = "AbisaiL";
console.log(nombre1);

let nombre2 = "Asibai";//let solo se le puede asignar un valor una sola vez
console.log(nombre2)
nombre2 = "AsibaiL";
console.log(nombre2)

/*
if(true){
    var mensaje1 = "mensaje 1";
    let mensaje2 = "mensaje 2";
    console.log(mensaje1);
    console.log(mensaje2);
}
console.log(mensaje1);
console.log(mensaje2);
*/

function saludo1(nombre){
    console.log("hola, " + nombre);
}

const saludo2 = function(nombre){
    console.log("hola, " + nombre);
}
saludo1(nombre1);
saludo2(nombre2);

const suma = (a,b) => {
    let s = a+b;
    console.log("suma: " + s);
}

suma(5,2);